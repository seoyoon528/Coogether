package coogether.backend.domain;

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
@Table(name = "user_join_list")
public class UserJoinList {
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "cooking_room_id")
    private CookingRoom cooking_room_id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User user_id;

    @Id
    @GeneratedValue
    @Column(name = "user_join_list_id", nullable = false)
    private int id;

    @CreatedDate // 참여자 입장 시간
    @Column(updatable = false, nullable = false)
    private LocalDateTime user_join_reg_time;

}
