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

    @OneToMany(mappedBy = "followingUserId", cascade = CascadeType.ALL)
    private List<Follow> followingList = new ArrayList<>();

    @OneToMany(mappedBy = "followerUserId", cascade = CascadeType.ALL)
    private List<Follow> followerList = new ArrayList<>();

    @OneToMany(mappedBy = "reporterId", cascade = CascadeType.ALL)
    private List<Report> reporterList = new ArrayList<>();

    @OneToMany(mappedBy = "reportedId", cascade = CascadeType.ALL)
    private List<Report> reportedList = new ArrayList<>();

    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<MyIngredientManage> myIngredientManageList = new ArrayList<>();

    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<IngredientFav> ingredientFavList = new ArrayList<>();

    @OneToMany(mappedBy = "cookingRoomHostId", cascade = CascadeType.ALL)
    private List<CookingRoom> cookingRoomList = new ArrayList<>();

    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<CookingRoomHistory> cookingRoomHistoryList = new ArrayList<>();

    @Id
    @Column(name = "user_id", length = 200, nullable = false)
    private String userId;

    @Column(name = "user_name", length = 30, nullable = false)
    private String userName;

    @Column(name = "user_nickname", length = 30, nullable = false)
    private String userNickname;

    @Column(name = "user_email", length = 50, nullable = false)
    private String userEmail;

    @Column(name = "user_img", length = 100, nullable = true)
    private String userImg;

    @Column(name = "user_introduce", length = 300, nullable = true)
    private String userIntroduce;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name="user_cook_category")
    private EnumUserCookCategory userCookCategory;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "user_account_status")
    private EnumUserAccountStatus user_account_status;


    @Column(name = "user_temp", nullable = false)
    private int userTemp;

    @CreatedDate // 최초 생성 시간
    @Column(name = "user_create_date", updatable = false, nullable = false)
    private LocalDateTime user_create_date;

    @LastModifiedDate // 최종 수정 시간
    @Column(name = "user_last_login_date", updatable = false, nullable = false)
    private LocalDateTime user_last_login_date;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "user_sns_type")
    private EnumSnsType user_sns_type;
}
