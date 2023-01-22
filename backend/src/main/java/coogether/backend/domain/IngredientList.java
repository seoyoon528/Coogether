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
    private int id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient_id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe_id;

    @Column(length = 30, nullable = true)
    private String ingredient_amount;
}
