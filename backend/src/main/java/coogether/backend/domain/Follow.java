package coogether.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import coogether.backend.domain.status.EnumFollowFlag;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor//(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Table(name = "follow")
public class Follow {

    @Id
    @GeneratedValue
    @Column(name = "follow_id", nullable = false)
    private int followId;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "follower_user_id")
    private User followerUser;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "following_user_id")
    private User followingUser;

    @CreatedDate // 팔로우 최초 등록 일자
    @Column(name = "follow_date", nullable = false)
    private LocalDateTime followDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "follow_flag", nullable = false)
    private EnumFollowFlag followFlag;
}
