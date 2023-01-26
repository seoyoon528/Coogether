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
@Table(name = "ingredient_list")
public class IngredientList {
    @Id
    @GeneratedValue
    @Column(name = "ingredient_list_id", nullable = false)
    private int ingredientListId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredientId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "recipe_id")
    private Recipe recipeId;

    @Column(name = "ingredient_amount", length = 30, nullable = true)
    private String ingredientAmount;
}
