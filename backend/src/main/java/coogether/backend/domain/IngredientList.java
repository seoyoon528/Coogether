package coogether.backend.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ingredient_list_id", nullable = false)
    private Long ingredientListId;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    @Column(name = "ingredient_amount", length = 30, nullable = true)
    private String ingredientAmount;
}
