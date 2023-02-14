package coogether.backend.controller;

import coogether.backend.dto.auth.LoginResponseDto;
import coogether.backend.dto.auth.SignupRequestDto;
import coogether.backend.dto.auth.SignupResponseDto;
import coogether.backend.service.auth.AuthService;
import coogether.backend.service.auth.SecurityService;
import coogether.backend.service.file.S3Service;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/*
@sierrah
OAuth Kakao 인증 관련 요청을 처리하는 API 입니다.
*/
@Api(tags = {"회원 인증을 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final SecurityService securityService;
    private final S3Service s3Service;


    /*
    @sierrah
    인가코드로 카카오 서버에 액세스 토큰을 요청하고,
    해당 토큰으로 사용자 정보를 받아와 DB에 저장하는 API 입니다.
    GET 방식으로 param 에 들어오는 인가코드를 추출하여 처리 로직을 수행합니다.
    */
    @ApiOperation(value = "카카오에서 받은 인가 코드로 로그인을 요청하는 메소드")
    @GetMapping("/user/login")
    public ResponseEntity<LoginResponseDto> kakaoLogin(HttpServletRequest request) {
        String code = request.getParameter("code");

        String kakaoAccessToken = authService.getKakaoAccessToken(code).getAccess_token();
        return authService.kakaoLogin(kakaoAccessToken);
    }

    @ApiOperation(value = "회원가입 위한 메소드", produces = "multipart/form-data")
    @PostMapping(value = "/user/signup", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SignupResponseDto> kakaoSignup(@RequestPart SignupRequestDto requestDto, @RequestPart(value="file",required = false) MultipartFile multipartFile) throws IOException {

        String url = null;
        if (multipartFile != null) {
            url = s3Service.uploadFile(multipartFile, "userProfile");
        }

        return authService.kakaoSignup(requestDto, url);
    }
}