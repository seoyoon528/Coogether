package coogether.backend.domain;

import coogether.backend.domain.status.EnumIngredientCategory;
import coogether.backend.domain.status.EnumRecipeCategory;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "recipe")
public class Recipe {

    @OneToMany(mappedBy = "recipeId", cascade = CascadeType.ALL)
    private List<IngredientList> ingredientList = new ArrayList<>();

    @OneToMany(mappedBy = "recipeId", cascade = CascadeType.ALL)
    private List<CookingRoom> cookingRoomList = new ArrayList<>();

    @Id
    @GeneratedValue
    @Column(name = "recipe_id", nullable = false)
    private int recipeId;

    @Enumerated(EnumType.STRING)
    @Column(name = "recipe_category", nullable = false)
    private EnumRecipeCategory recipeCategory;

    @Column(name = "recipe_content", length = 2000, nullable = false)
    private String recipeContent;

    @Column(name = "recipe_name", length = 50, nullable = false)
    private String recipeName;
}
