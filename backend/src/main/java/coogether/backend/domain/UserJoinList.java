package coogether.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "user_join_list")
public class UserJoinList {

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "cooking_room_id")
    private CookingRoom cookingRoom;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_seq")
    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_join_list_id", nullable = false)
    private Long userJoinListId;

    @CreatedDate // 참여자 입장 시간
    @Column(name = "user_join_reg_time", updatable = false, nullable = false)
    private LocalDateTime userJoinRegTime;

}
