package coogether.backend.dto.simple;

import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.Ingredient;
import coogether.backend.domain.status.EnumIngredientCategory;
import lombok.Data;


@Data
public class SimpleIngredientDto {
    private Long ingredientId;
    private String ingredientName;
    private EnumIngredientCategory ingredientCategory;
    private String ingredientIcon;


    @QueryProjection
    public SimpleIngredientDto(Ingredient ingredient) {
        this.ingredientId = ingredient.getIngredientId();
        this.ingredientName = ingredient.getIngredientName();
        this.ingredientCategory = ingredient.getIngredientCategory();
        this.ingredientIcon = ingredient.getIngredientIcon();
    }
}
