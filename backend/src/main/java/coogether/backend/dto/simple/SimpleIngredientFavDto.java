package coogether.backend.dto.simple;

import coogether.backend.domain.IngredientFav;
import coogether.backend.domain.status.EnumIngredientFavFlag;
import lombok.Data;

@Data
public class SimpleIngredientFavDto {
    private int ingredientFavId;
    private SimpleIngredientDto ingredient;
//    private SimpleUserDto user;
    private EnumIngredientFavFlag ingredientFavFlag;

    public SimpleIngredientFavDto(IngredientFav ingredientFav) {
        this.ingredientFavId = ingredientFav.getIngredientFavId();
        this.ingredient = new SimpleIngredientDto(ingredientFav.getIngredient());
//        this.user = new SimpleUserDto(ingredientFav.getUser());
        this.ingredientFavFlag = ingredientFav.getIngredientFavFlag();
    }
}