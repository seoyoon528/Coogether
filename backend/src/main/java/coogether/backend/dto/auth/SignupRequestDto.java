package coogether.backend.dto.auth;

import coogether.backend.domain.status.EnumUserCookCategory;
import lombok.Builder;
import lombok.Data;

@Data
public class SignupRequestDto {
    String id;
    String name;    // kakao에서 넘겨주는 nickname 값
    String email;
    String nickname;
    String profileImg;
    String userIntroduce;
    EnumUserCookCategory userCookCategory;

    @Builder
    public SignupRequestDto(String id, String name, String email, String nickname, String profileImg, String userIntroduce, EnumUserCookCategory userCookCategory) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.nickname = nickname;
        this.profileImg = profileImg;
        this.userIntroduce = userIntroduce;
        this.userCookCategory = userCookCategory;
    }

    public SignupRequestDto() {
    }
}