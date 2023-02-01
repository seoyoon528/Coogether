package coogether.backend.dto;


import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.Follow;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumSnsType;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class UserRankDto {

    private Long userSeq;
    private String userNickname;
    private String userEmail;
    private String userImg;
    private int userTemp;

    @QueryProjection
    public UserRankDto(User user){
        this.userSeq = user.getUserSeq();
        this.userNickname = user.getUserNickname();
        this.userEmail = user.getUserEmail();
        this.userImg = user.getUserImg();
        this.userTemp = user.getUserTemp();
    }


}
