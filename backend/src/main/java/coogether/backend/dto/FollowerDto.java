package coogether.backend.dto;

import coogether.backend.domain.Follow;
import coogether.backend.domain.status.EnumFollowFlag;
import coogether.backend.dto.simple.SimpleFollowUserDto;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FollowerDto {
    private int followId;
    private SimpleFollowUserDto followerUser;
    private LocalDateTime followDate;
    private EnumFollowFlag followFlag;

    public FollowerDto(Follow follow) {
        this.followId = follow.getFollowId();
        this.followerUser = new SimpleFollowUserDto(follow.getFollowerUser());
        this.followDate = follow.getFollowDate();
        this.followFlag = follow.getFollowFlag();
    }
}
