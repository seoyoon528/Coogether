package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.User;
import coogether.backend.domain.UserJoinList;
import coogether.backend.dto.simple.SimpleCookingRoomDto;
import coogether.backend.dto.simple.SimpleUserDto;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Data
public class UserJoinListDto {

//    private SimpleCookingRoomDto cookingRoom;
//    private SimpleUserDto user;
    private Long userJoinListId;
    private LocalDateTime userJoinRegTime;

    ///////////////////////////
    private String userNickname;
    @QueryProjection
    public UserJoinListDto(UserJoinList userJoinList) {
//        this.cookingRoom = new SimpleCookingRoomDto(userJoinList.getCookingRoom());
//        this.user = new SimpleUserDto(userJoinList.getUser());
        this.userJoinListId = userJoinList.getUserJoinListId();
        this.userJoinRegTime = userJoinList.getUserJoinRegTime();

        this.userNickname = userJoinList.getUser().getUserNickname();
    }
}
