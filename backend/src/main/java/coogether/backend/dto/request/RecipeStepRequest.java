package coogether.backend.dto.request;

import lombok.Data;

@Data
public class RecipeStepRequest {

    private int recipeStepNum;
    private String recipeStepContent;

}