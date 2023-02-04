package coogether.backend.dto.auth;

import coogether.backend.domain.User;
import lombok.Data;

@Data
public class LoginResponseDto {

    public boolean loginSuccess;
    public User user;
    public String kakaoAccessToken;
}