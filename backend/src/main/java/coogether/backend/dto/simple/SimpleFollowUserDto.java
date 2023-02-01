package coogether.backend.dto.simple;


import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumSnsType;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SimpleFollowUserDto {

    //팔로우용 유저 정보 DTO
    private Long userSeq;
    private String userNickname;
    private String userImg;
    private int userTemp;


    @QueryProjection
    public SimpleFollowUserDto(User user){
        this.userSeq = user.getUserSeq();
        this.userNickname = user.getUserNickname();
        this.userImg = user.getUserImg();
        this.userTemp = user.getUserTemp();

    }


}
