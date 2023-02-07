package coogether.backend.service.auth;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import coogether.backend.config.excase.CUserIdLoginFailedException;
import coogether.backend.domain.RefreshToken;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumRoleType;
import coogether.backend.domain.status.EnumSnsType;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.dto.auth.LoginResponseDto;
import coogether.backend.dto.auth.SignupRequestDto;
import coogether.backend.dto.auth.SignupResponseDto;
import coogether.backend.dto.auth.kakao.KakaoTokenDto;
import coogether.backend.dto.auth.kakao.KakaoUserDto;
import coogether.backend.dto.token.TokenDto;
import coogether.backend.repository.token.RefreshTokenRepository;
import coogether.backend.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final UserRepository userRepository;
    private final RefreshTokenRepository tokenRepository;
    private final SecurityService securityService;

    /* 환경변수 가져오기 */
    @Value("${spring.security.oauth2.client.registration.kakao.client-id}")
    String KAKAO_CLIENT_ID;

   @Value("${spring.security.oauth2.client.registration.kakao.client-secret}")
   String KAKAO_CLIENT_SECRET;

    @Value("${spring.security.oauth2.client.registration.kakao.redirect-uri}")
    String KAKAO_REDIRECT_URI;

    /* 인가코드로 kakaoAccessToken 따오는 메소드 */
    public KakaoTokenDto getKakaoAccessToken(String code) {

        RestTemplate rt = new RestTemplate(); //통신용
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HttpBody 객체 생성
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code"); //카카오 공식문서 기준 authorization_code 로 고정
        params.add("client_id", KAKAO_CLIENT_ID); //카카오 앱 REST API 키
        params.add("client_secret", KAKAO_CLIENT_SECRET);
        params.add("redirect_uri", KAKAO_REDIRECT_URI);
        params.add("code", code); //인가 코드 요청시 받은 인가 코드값, 프론트에서 받아오는 그 코드
        System.out.println("인가 코드 넘어옴 => " + params.get("code"));

        // 헤더와 바디 합치기 위해 HttpEntity 객체 생성
        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(params, headers);
        System.out.println("kakaoTokenRequest = " + kakaoTokenRequest);

        // 카카오로부터 Access token 수신
        ResponseEntity<String> accessTokenResponse = rt.exchange(
                "https://kauth.kakao.com/oauth/token",
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class
        );

        System.out.println("accessTokenResponse = " + accessTokenResponse);

        // JSON Parsing (-> KakaoTokenDto)
        ObjectMapper objectMapper = new ObjectMapper();
        KakaoTokenDto kakaoTokenDto = null;
        try {
            kakaoTokenDto = objectMapper.readValue(accessTokenResponse.getBody(), KakaoTokenDto.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return kakaoTokenDto;
    }

    /* kakaoAccessToken 으로 카카오 서버에 정보 요청 */
    public User getKakaoInfo(String kakaoAccessToken) {

        RestTemplate rt = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + kakaoAccessToken);
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> userInfoRequest = new HttpEntity<>(headers);

        // POST 방식으로 API 서버에 요청 보내고, response 받아옴
        ResponseEntity<String> accountInfoResponse = rt.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.POST,
                userInfoRequest,
                String.class
        );

        System.out.println("카카오 서버에서 정상적으로 데이터를 수신했습니다.");
        // JSON Parsing (-> kakaoAccountDto)
        ObjectMapper objectMapper = new ObjectMapper();
        KakaoUserDto kakaoAccountDto = null;
        try {
            kakaoAccountDto = objectMapper.readValue(accountInfoResponse.getBody(), KakaoUserDto.class);
        } catch (JsonProcessingException e) { e.printStackTrace(); }

        // kakaoAccountDto 에서 필요한 정보 꺼내서 Account 객체로 매핑
        Long id = kakaoAccountDto.getId();
        String email = kakaoAccountDto.getKakao_account().getEmail();
        String kakaoName = kakaoAccountDto.getKakao_account().getProfile().getNickname();

        System.out.println("kakaoName = " + kakaoName);
        System.out.println("email = " + email);

        return User.builder()
                .userId("KAKAO_"+id.toString())
                .userName(kakaoName)
                .userEmail(email)
                .build();
    }

    /* login 요청 보내는 회원가입 유무 판단해 분기 처리 */
    public ResponseEntity<LoginResponseDto> kakaoLogin(String kakaoAccessToken) {
        // kakaoAccessToken 으로 회원정보 받아오기
        User kakaoUser = getKakaoInfo(kakaoAccessToken);
        LoginResponseDto loginResponseDto = new LoginResponseDto();
        try {
            TokenDto tokenDto = securityService.login(kakaoUser);
            loginResponseDto.setUser(userRepository.findByUserId(kakaoUser.getUserId()));
            loginResponseDto.setLoginSuccess(true);
            HttpHeaders headers = setTokenHeaders(tokenDto);
            return ResponseEntity.ok().headers(headers).body(loginResponseDto);
        } catch (CUserIdLoginFailedException e) {
            loginResponseDto.setUser(kakaoUser);
            loginResponseDto.setLoginSuccess(false);
            return ResponseEntity.ok(loginResponseDto);
        }
    }

    /* 토큰을 헤더에 배치 */
    public HttpHeaders setTokenHeaders(TokenDto tokenDto) {
        HttpHeaders headers = new HttpHeaders();
        ResponseCookie cookie = ResponseCookie.from("JWTRefreshToken", tokenDto.getRefreshToken())
                .path("/")
                .maxAge(60*60*24*7) // 쿠키 유효기간 7일로 설정했음
                .secure(true)
                .sameSite("None")
                .httpOnly(true)
                .build();
        headers.add("Set-cookie", cookie.toString());
        headers.add("Authorization", tokenDto.getAccessToken());

        return headers;
    }

    /* 회원가입 요청 처리 */
    public ResponseEntity<SignupResponseDto> kakaoSignup(SignupRequestDto requestDto) {
        // 받아온 정보 DB에 저장
        System.out.println("[ kakaoSignup 넘어옴 ]");
        User newUser = User.builder()
                .userId(requestDto.getId())
                .userName(requestDto.getName())
                .userEmail(requestDto.getEmail())
                .userRoleType(EnumRoleType.ROLE_USER)
                .userNickname(requestDto.getNickname())
                .userImg(requestDto.getProfileImg())
                .userIntroduce(requestDto.getUserIntroduce())
                .userCookCategory(requestDto.getUserCookCategory())
                .userTemp(0)
                .userCreateDate(LocalDateTime.now())
                .userLastLoginDate(LocalDateTime.now())
                .userAccountStatus(EnumUserAccountStatus.ACTIVE)
                .userSnsType(EnumSnsType.KAKAO)
                .build();
        userRepository.save(newUser);

        System.out.println("[ 회원가입 완료 ]");

        // 회원가입 상황에 대해 토큰을 발급하고 헤더와 쿠키에 배치
        TokenDto tokenDto = securityService.signup(newUser.getUserId());
        saveRefreshToken(newUser, tokenDto);
        HttpHeaders headers = setTokenHeaders(tokenDto);

        // 응답 작성
        SignupResponseDto responseDto = new SignupResponseDto();
        responseDto.setUser(userRepository.findByUserId(requestDto.getId()));
        responseDto.setResult("회원가입이 완료되었습니다.");
        return ResponseEntity.ok().headers(headers).body(responseDto);
    }

    /* Refresh Token을 Repository 에 저장하는 메소드 */
    public void saveRefreshToken(User user, TokenDto tokenDto) {
        RefreshToken refreshToken = RefreshToken.builder()
                .userId(user.getUserId())
                .token(tokenDto.getRefreshToken())
                .build();
        tokenRepository.save(refreshToken);
        System.out.println("토큰 저장이 완료되었습니다 : 계정 아이디 - " + user.getUserId() + ", refresh token - " + tokenDto.getRefreshToken());
    }
}
