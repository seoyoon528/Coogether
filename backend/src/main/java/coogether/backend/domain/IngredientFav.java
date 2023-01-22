package coogether.backend.domain;


import com.sun.istack.NotNull;
import coogether.backend.domain.status.EnumIngredientFavFlag;
import coogether.backend.domain.status.EnumReportCategory;
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
@Table(name = "ingredient_fav")
public class IngredientFav {

    @Id
    @GeneratedValue
    @Column(name = "ingredient_fav_id", nullable = false)
    private int id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient_id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User user_id;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EnumIngredientFavFlag ingredient_fav_flag;
}
