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

import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Data
public class IngredientFavDto {
    private Long ingredientFavId;
    private SimpleIngredientDto ingredient;
    private SimpleUserDto user;
    private EnumIngredientFavFlag ingredientFavFlag;
    private LocalDateTime ingredientFavCreatedDate;

    public IngredientFavDto(IngredientFav ingredientFav) {
        this.ingredientFavId = ingredientFav.getIngredientFavId();
        this.ingredient = new SimpleIngredientDto(ingredientFav.getIngredient());
        this.user = new SimpleUserDto(ingredientFav.getUser());
        this.ingredientFavFlag = ingredientFav.getIngredientFavFlag();
        this.ingredientFavCreatedDate = ingredientFav.getIngredientFavCreatedDate();
    }
}
