package coogether.backend.dto.simple;

import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.IngredientList;
import coogether.backend.domain.Recipe;
import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumRecipeType;
import coogether.backend.dto.UserDto;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class SimpleRecipeDto {
    private int recipeId;
    private EnumRecipeCategory recipeCategory;
    private EnumRecipeType recipeType;
    private String recipeContent;
    private String recipeName;
    private LocalDateTime recipeCreatedDate;

    @QueryProjection
    public SimpleRecipeDto(Recipe recipe) {
        this.recipeId = recipe.getRecipeId();
        this.recipeCategory = recipe.getRecipeCategory();
        this.recipeType = recipe.getRecipeType();
        this.recipeContent = recipe.getRecipeContent();
        this.recipeName = recipe.getRecipeName();
        this.recipeCreatedDate = recipe.getRecipeCreatedDate();

    }
}
