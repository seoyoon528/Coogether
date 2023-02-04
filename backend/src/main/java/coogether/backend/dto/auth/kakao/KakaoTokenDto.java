package coogether.backend.dto.auth.kakao;

import lombok.Data;

@Data
public class KakaoTokenDto {

    /*
    카카오에서 보내는 access token 을 매핑
    */

    private String access_token;
    private String token_type;
    private String refresh_token;
    private String id_token;
    private int expires_in;
    private int refresh_token_expires_in;
    private String scope;
}