package coogether.backend.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import coogether.backend.domain.status.EnumRoleType;
import coogether.backend.domain.status.EnumSnsType;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Table(name = "user")
public class User {

    @JsonIgnore
    @OneToMany(mappedBy = "followingUser", cascade = CascadeType.ALL)
    private List<Follow> followingList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "followerUser", cascade = CascadeType.ALL)
    private List<Follow> followerList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "reporter", cascade = CascadeType.ALL)
    private List<Report> reporterList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "reported", cascade = CascadeType.ALL)
    private List<Report> reportedList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<MyIngredientManage> myIngredientManageList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<IngredientFav> ingredientFavList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "cookingRoomHost", cascade = CascadeType.ALL)
    private List<CookingRoom> cookingRoomList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<History> historyList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Recipe> recipeList = new ArrayList<>();

    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_seq")
    private Long userSeq;

    @Column(name = "user_id", length = 200, nullable = false)
    private String userId;

    @Column(name = "user_name", length = 30, nullable = false)
    private String userName;

    @Column(name = "user_nickname", length = 30, nullable = false)
    private String userNickname;

    @Column(name = "user_email", length = 50, nullable = false)
    private String userEmail;

    @Column(name = "user_img", length = 1000, nullable = true)
    private String userImg;

    @Column(name = "user_introduce", length = 300, nullable = true)
    private String userIntroduce;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_cook_category", nullable = false)
    private EnumUserCookCategory userCookCategory;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_account_status", nullable = false)
    private EnumUserAccountStatus userAccountStatus;

    @Column(name = "user_temp", nullable = false)
    private int userTemp;

    @CreatedDate // 최초 생성 시간
    @Column(name = "user_create_date", updatable = false, nullable = false)
    private LocalDateTime userCreateDate;

    @LastModifiedDate // 최종 수정 시간
    @Column(name = "user_last_login_date", updatable = false, nullable = false)
    private LocalDateTime userLastLoginDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_sns_type", nullable = false)
    private EnumSnsType userSnsType;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_role_type", nullable = false)
    private EnumRoleType userRoleType;

    @Builder
    public User(String userId, String userName, String userNickname, String userEmail, String userImg, String userIntroduce, EnumUserCookCategory userCookCategory, EnumUserAccountStatus userAccountStatus, int userTemp, LocalDateTime userCreateDate, LocalDateTime userLastLoginDate, EnumSnsType userSnsType, EnumRoleType userRoleType) {
        this.userId = userId;
        this.userName = userName;
        this.userNickname = userNickname;
        this.userEmail = userEmail;
        this.userImg = userImg;
        this.userIntroduce = userIntroduce;
        this.userCookCategory = userCookCategory;
        this.userAccountStatus = userAccountStatus;
        this.userTemp = userTemp;
        this.userCreateDate = userCreateDate;
        this.userLastLoginDate = userLastLoginDate;
        this.userSnsType = userSnsType;
        this.userRoleType = userRoleType;
    }
}
