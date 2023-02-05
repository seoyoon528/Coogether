package coogether.backend.dto;

import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.IngredientList;
import coogether.backend.domain.Recipe;
import coogether.backend.domain.RecipeStep;
import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumRecipeType;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class RecipeStepDto {
    private RecipeDto recipe;

    private Long recipeStepId;
    private int recipeStepNum;
    private String recipeStepContent;


    @QueryProjection
    public RecipeStepDto(RecipeStep recipeStep) {
        this.recipe = new RecipeDto(recipeStep.getRecipe());

        this.recipeStepId = recipeStep.getRecipeStepId();
        this.recipeStepNum = recipeStep.getRecipeStepNum();
        this.recipeStepContent = recipeStep.getRecipeStepContent();
    }
}

