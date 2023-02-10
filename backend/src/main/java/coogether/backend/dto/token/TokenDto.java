package coogether.backend.dto.token;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TokenDto {
    private String grantType;
    private String accessToken;
    private String refreshToken;
    private Long accessTokenExpiresIn;

//    public TokenDto() {
//    }
}