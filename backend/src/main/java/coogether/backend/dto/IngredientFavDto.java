package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import coogether.backend.domain.Ingredient;
import coogether.backend.domain.IngredientFav;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumIngredientFavFlag;
import coogether.backend.dto.simple.SimpleIngredientDto;
import coogether.backend.dto.simple.SimpleUserDto;
import lombok.Data;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Data
public class IngredientFavDto {
    private int ingredientFavId;
    private SimpleIngredientDto ingredient;
    private SimpleUserDto user;
    private EnumIngredientFavFlag ingredientFavFlag;

    public IngredientFavDto(IngredientFav ingredientFav) {
        this.ingredientFavId = ingredientFav.getIngredientFavId();
        this.ingredient = new SimpleIngredientDto(ingredientFav.getIngredient());
        this.user = new SimpleUserDto(ingredientFav.getUser());
        this.ingredientFavFlag = ingredientFav.getIngredientFavFlag();
    }
}
