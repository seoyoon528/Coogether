package coogether.backend.dto;

import coogether.backend.domain.Follow;
import coogether.backend.domain.status.EnumFollowFlag;
import coogether.backend.dto.simple.SimpleFollowUserDto;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FollowingDto {
    private Long followId;
    private SimpleFollowUserDto followingUser;
    private LocalDateTime followDate;
    private EnumFollowFlag followFlag;

    public FollowingDto(Follow follow) {
        this.followId = follow.getFollowId();
        this.followingUser = new SimpleFollowUserDto(follow.getFollowingUser());
        this.followDate = follow.getFollowDate();
        this.followFlag = follow.getFollowFlag();
    }
}
