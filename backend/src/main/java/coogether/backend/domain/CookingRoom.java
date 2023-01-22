package coogether.backend.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;
import coogether.backend.domain.status.EnumCookingRoomStatus;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "cooking_room")
public class CookingRoom {

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "cooking_room_host_id")
    private User cooking_room_host_id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe_id;

    @OneToMany(mappedBy = "cooking_room_id", cascade = CascadeType.ALL)
    private List<CookingRoomHistory> cookingRoomHistoryList = new ArrayList<>();

    @Id
    @GeneratedValue
    @Column(name = "cooking_room_id", nullable = false)
    private int id;

    @Column(length = 30, nullable = false)
    private String cooking_room_name;

    @Column(length = 100, nullable = false)
    private String cooking_room_img;


    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm", timezone="Asia/Seoul")
    @Column(updatable = false, nullable = false)
    @LastModifiedDate // 요리 시작 시간
    private LocalDateTime cooking_room_start_time;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EnumCookingRoomStatus cooking_room_status;

    @Column(length = 200, nullable = false)
    private String cooking_room_notice;
}
