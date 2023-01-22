package coogether.backend.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "cooking_room_history")
public class CookingRoomHistory {

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User user_id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "cooking_room_id")
    private CookingRoom cooking_room_id;

    @Id
    @GeneratedValue
    @Column(name = "cooking_room_history_id", nullable = false)
    private int id;

    @Column(length = 100, nullable = true)
    private String cooking_room_history_img;
}
