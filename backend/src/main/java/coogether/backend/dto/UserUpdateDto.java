package coogether.backend.dto;

import coogether.backend.domain.status.EnumUserCookCategory;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserUpdateDto {
    private String userNickname;
    private String userImg;
    private String userIntroduce;
    private EnumUserCookCategory userCookCategory;

}
