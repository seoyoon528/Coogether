package coogether.backend.service.auth;

import coogether.backend.config.excase.CUserIdLoginFailedException;
import coogether.backend.config.jwt.JwtProvider;
import coogether.backend.domain.RefreshToken;
import coogether.backend.domain.User;
import coogether.backend.dto.token.TokenDto;
import coogether.backend.repository.token.RefreshTokenRepository;
import coogether.backend.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SecurityService {

    private final UserRepository userRepository;
    private final JwtProvider jwtProvider;
    private final RefreshTokenRepository tokenRepository;

    public static Long getCurrentAccountId() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || authentication.getName() == null) {
            throw new RuntimeException("Security Context 에 인증 정보가 없습니다.");
        }
        return Long.parseLong(authentication.getName());
    }

    /* 로그인 된 사용자에게 토큰 발급 : refresh token 은 DB 에 저장 */
    public TokenDto login(User user) {
        System.out.println("[ Token 발급 진입 ]");
        User findUser = userRepository.findByUserId(user.getUserId());

        // 일치하는 User가 없을 경우 throw Exception
        if (findUser == null) {
            throw new CUserIdLoginFailedException();
        }

        // 토큰 발행
        TokenDto tokenDto = jwtProvider.generateTokenDto(findUser.getUserId());

        // RefreshToken DB에 저장
        RefreshToken refreshToken = RefreshToken.builder()
                .userId(findUser.getUserId())
                .token(tokenDto.getRefreshToken())
                .build();
        tokenRepository.save(refreshToken);
        System.out.println("토큰 발급과 저장을 완료했습니다.");
        return tokenDto;
    }

    /*
    회원가입 요청에 대해 Access Token 과 Refresh Token 을 발급하고,
    Refresh Token 을 Token Repository 에 저장.
    try: account 가 저장되지 않은 상태에서 id 호출 불가능
    -> refreshToken save 를 auth 단으로 올릴 것인가?
     */

    public TokenDto signup(String userId) {
        return jwtProvider.generateTokenDto(userId);
    }
}