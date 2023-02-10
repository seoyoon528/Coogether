package coogether.backend.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import coogether.backend.domain.status.EnumCookingRoomStatus;
import lombok.*;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor//(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Table(name = "cooking_room")
public class CookingRoom {

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "cooking_room_host_id")
    private User cookingRoomHost;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    @JsonIgnore
    @OneToMany(mappedBy = "cookingRoom", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<History> historyList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "cookingRoom", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserJoinList> userJoinLists = new ArrayList<>();
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cooking_room_id", nullable = false)
    private Long cookingRoomId;

    @Column(name = "cooking_room_name", length = 30, nullable = false)
    private String cookingRoomName;

    @Column(name = "cooking_room_img", length = 1000, nullable = false)
    private String cookingRoomImg;

    @Column(name = "cooking_room_start_time", updatable = false, nullable = false)
    private LocalDateTime cookingRoomStartTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "cooking_room_status", nullable = false)
    private EnumCookingRoomStatus cookingRoomStatus;

    @Column(name = "cooking_room_notice", length = 200, nullable = false)
    private String cookingRoomNotice;
}
