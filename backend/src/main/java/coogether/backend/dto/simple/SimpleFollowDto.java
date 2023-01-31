package coogether.backend.dto.simple;

import coogether.backend.domain.Follow;
import coogether.backend.domain.status.EnumFollowFlag;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SimpleFollowDto {
    private int followId;

    private LocalDateTime followDate;
    private EnumFollowFlag followFlag;

    public SimpleFollowDto(Follow follow) {
        this.followId = follow.getFollowId();
        this.followDate = follow.getFollowDate();
        this.followFlag = follow.getFollowFlag();
    }
}
