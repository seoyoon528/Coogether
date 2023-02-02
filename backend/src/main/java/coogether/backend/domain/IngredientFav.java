package coogether.backend.domain;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import coogether.backend.domain.status.EnumIngredientFavFlag;
import coogether.backend.domain.status.EnumReportCategory;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;

import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor//(access = AccessLevel.PROTECTED)
@Table(name = "ingredient_fav")
public class IngredientFav {
    @Id
    @GeneratedValue
    @Column(name = "ingredient_fav_id", nullable = false)
    private Long ingredientFavId;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "ingredient_fav_flag", nullable = false)
    private EnumIngredientFavFlag ingredientFavFlag;

    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm", timezone="Asia/Seoul")
    @LastModifiedDate // 최종 수정 시간
    @Column(name = "ingredient_fav_created_date", nullable = false)
    private LocalDateTime ingredientFavCreatedDate;
}
