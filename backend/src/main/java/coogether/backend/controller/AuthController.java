package coogether.backend.controller;

import coogether.backend.dto.auth.LoginResponseDto;
import coogether.backend.dto.auth.SignupRequestDto;
import coogether.backend.dto.auth.SignupResponseDto;
import coogether.backend.service.auth.AuthService;
import coogether.backend.service.auth.SecurityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/*
@sierrah
OAuth Kakao 인증 관련 요청을 처리하는 API 입니다.
*/
@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final SecurityService securityService;

    /*
    @sierrah
    인가코드로 카카오 서버에 액세스 토큰을 요청하고,
    해당 토큰으로 사용자 정보를 받아와 DB에 저장하는 API 입니다.
    GET 방식으로 param 에 들어오는 인가코드를 추출하여 처리 로직을 수행합니다.
    */
//    @GetMapping("/login/kakao")
//    public ResponseEntity<LoginResponseDto> kakaoLogin(@RequestParam String code) {

    @GetMapping("/user/login")
    public ResponseEntity<LoginResponseDto> kakaoLogin(HttpServletRequest request) {
        String code = request.getParameter("code");
        System.out.println("Authentication 코드 받음 :" + code);

        String kakaoAccessToken = authService.getKakaoAccessToken(code).getAccess_token();
        System.out.println("kakaoAccessToken 코드 받음 :" + kakaoAccessToken);
        return authService.kakaoLogin(kakaoAccessToken);
    }

    @PostMapping("/user/signup")
    public ResponseEntity<SignupResponseDto> kakaoSignup(@RequestBody SignupRequestDto requestDto) {
        return authService.kakaoSignup(requestDto);
    }
}