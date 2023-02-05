package coogether.backend.dto.simple;

import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.Recipe;
import coogether.backend.domain.RecipeStep;
import lombok.Data;

@Data
public class SimpleRecipeStepDto {
    private Long recipeStepId;
    private int recipeStepNum;
    private String recipeStepContent;


    @QueryProjection
    public SimpleRecipeStepDto(RecipeStep recipeStep) {
        this.recipeStepId = recipeStep.getRecipeStepId();
        this.recipeStepNum = recipeStep.getRecipeStepNum();
        this.recipeStepContent = recipeStep.getRecipeStepContent();
    }
}

