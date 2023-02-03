package coogether.backend.dto.simple;

import coogether.backend.domain.IngredientFav;
import coogether.backend.domain.status.EnumIngredientFavFlag;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SimpleIngredientFavDto {
    private Long ingredientFavId;
    private SimpleIngredientDto ingredient;
//    private SimpleUserDto user;
    private EnumIngredientFavFlag ingredientFavFlag;
    private LocalDateTime ingredientFavCreatedDate;

    public SimpleIngredientFavDto(IngredientFav ingredientFav) {
        this.ingredientFavId = ingredientFav.getIngredientFavId();
        this.ingredient = new SimpleIngredientDto(ingredientFav.getIngredient());
//        this.user = new SimpleUserDto(ingredientFav.getUser());
        this.ingredientFavFlag = ingredientFav.getIngredientFavFlag();
        this.ingredientFavCreatedDate = ingredientFav.getIngredientFavCreatedDate();
    }
}