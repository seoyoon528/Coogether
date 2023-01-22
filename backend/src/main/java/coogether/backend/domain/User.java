package coogether.backend.domain;


import com.sun.istack.NotNull;
import coogether.backend.domain.status.EnumSnsType;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "user")
public class User {

    @OneToMany(mappedBy = "following_id", cascade = CascadeType.ALL)
    private List<Follow> followingList = new ArrayList<>();

    @OneToMany(mappedBy = "follower_id", cascade = CascadeType.ALL)
    private List<Follow> followerList = new ArrayList<>();

    @OneToMany(mappedBy = "reporter_id", cascade = CascadeType.ALL)
    private List<Report> reporterList = new ArrayList<>();

    @OneToMany(mappedBy = "reported_id", cascade = CascadeType.ALL)
    private List<Report> reportedList = new ArrayList<>();

    @OneToMany(mappedBy = "user_id", cascade = CascadeType.ALL)
    private List<MyIngredientManage> myIngredientManageList = new ArrayList<>();

    @OneToMany(mappedBy = "user_id", cascade = CascadeType.ALL)
    private List<IngredientFav> ingredientFavList = new ArrayList<>();

    @OneToMany(mappedBy = "cooking_room_host_id", cascade = CascadeType.ALL)
    private List<CookingRoom> cookingRoomList = new ArrayList<>();

    @OneToMany(mappedBy = "user_id", cascade = CascadeType.ALL)
    private List<CookingRoomHistory> cookingRoomHistoryList = new ArrayList<>();

    @Id
    @Column(name = "user_id", length = 200, nullable = false)
    private String id;

    @Column(length = 30, nullable = false)
    private String user_name;

    @Column(length = 30, nullable = false)
    private String user_nickname;

    @Column(length = 50, nullable = false)
    private String user_email;

    @Column(length = 100, nullable = true)
    private String user_img;

    @Column(length = 300, nullable = true)
    private String user_introduce;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EnumUserCookCategory user_cook_category;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EnumUserAccountStatus user_account_status;


    @NotNull
    private int user_temp;

    @CreatedDate // 최초 생성 시간
    @Column(updatable = false, nullable = false)
    private LocalDateTime user_create_date;

    @Column(updatable = false, nullable = false)
    @LastModifiedDate // 최종 수정 시간
    private LocalDateTime user_last_login_date;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EnumSnsType user_sns_type;
}
