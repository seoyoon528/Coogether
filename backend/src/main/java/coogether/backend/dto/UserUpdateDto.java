package coogether.backend.dto;

import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.User;
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

    @QueryProjection
    public UserUpdateDto(User user){
        this.userNickname = user.getUserNickname();
        this.userImg = user.getUserImg();
        this.userIntroduce = user.getUserIntroduce();
        this.userCookCategory = user.getUserCookCategory();
    }

}
