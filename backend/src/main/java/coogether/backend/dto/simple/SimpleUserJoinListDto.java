package coogether.backend.dto.simple;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.User;
import coogether.backend.domain.UserJoinList;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SimpleUserJoinListDto {
    private Long userJoinListId;
    private LocalDateTime userJoinRegTime;

    public SimpleUserJoinListDto(UserJoinList userJoinList) {
        this.userJoinListId = userJoinList.getUserJoinListId();
        this.userJoinRegTime = userJoinList.getUserJoinRegTime();
    }
}
