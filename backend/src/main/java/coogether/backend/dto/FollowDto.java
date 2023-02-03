package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import coogether.backend.domain.Follow;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumFollowFlag;
import coogether.backend.dto.simple.SimpleUserDto;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Data
public class FollowDto {

    private Long followId;

    private SimpleUserDto followerUser;
    private SimpleUserDto followingUser;

    private LocalDateTime followDate;
    private EnumFollowFlag followFlag;

    public FollowDto(Follow follow) {
        this.followId = follow.getFollowId();
        this.followerUser = new SimpleUserDto(follow.getFollowerUser());
        this.followingUser = new SimpleUserDto(follow.getFollowingUser());
        this.followDate = follow.getFollowDate();
        this.followFlag = follow.getFollowFlag();
    }
}
