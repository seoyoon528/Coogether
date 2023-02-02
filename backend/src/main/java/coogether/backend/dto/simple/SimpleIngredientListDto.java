package coogether.backend.dto.simple;

import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.Ingredient;
import coogether.backend.domain.IngredientList;
import coogether.backend.dto.RecipeDto;
import lombok.Data;

@Data
public class SimpleIngredientListDto {
    private Long ingredientListId;
    private String ingredientAmount;

    @QueryProjection
    public SimpleIngredientListDto(IngredientList ingredientList) {
        this.ingredientListId = ingredientList.getIngredientListId();
        this.ingredientAmount = ingredientList.getIngredientAmount();
    }
}
