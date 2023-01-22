package coogether.backend.domain;

import com.sun.istack.NotNull;
import coogether.backend.domain.status.EnumFollowFlag;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;

import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "follow")
public class Follow {

    @Id
    @GeneratedValue
    @Column(name = "follow_id", nullable = false)
    private int id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "follower_user_id")
    private User follower_id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "following_user_id")
    private User following_id;

    @CreatedDate // 팔로우 최초 등록 일자
    @Column(updatable = false, nullable = false)
    private LocalDateTime follow_date;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EnumFollowFlag follow_flag;
}
