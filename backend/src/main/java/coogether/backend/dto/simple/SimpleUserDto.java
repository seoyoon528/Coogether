package coogether.backend.dto.simple;


import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.Follow;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumSnsType;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import lombok.Data;

import javax.persistence.Column;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class SimpleUserDto {

    private String userId;
    private String userName;
    private String userNickname;
    private String userEmail;
    private String userImg;
    private String userIntroduce;
    private EnumUserCookCategory userCookCategory;
    private EnumUserAccountStatus userAccountStatus;
    private int userTemp;
    private LocalDateTime userCreateDate;
    private LocalDateTime userLastLoginDate;
    private EnumSnsType userSnsType;


    @QueryProjection
    public SimpleUserDto(User user){
        this.userId = user.getUserId();
        this.userName = user.getUserName();
        this.userNickname = user.getUserNickname();
        this.userEmail = user.getUserEmail();
        this.userImg = user.getUserImg();
        this.userIntroduce = user.getUserIntroduce();
        this.userCookCategory = user.getUserCookCategory();
        this.userAccountStatus = user.getUserAccountStatus();
        this.userTemp = user.getUserTemp();
        this.userCreateDate = user.getUserCreateDate();
        this.userLastLoginDate = user.getUserLastLoginDate();
        this.userSnsType = user.getUserSnsType();

    }


}
