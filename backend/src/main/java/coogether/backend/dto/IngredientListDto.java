package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.Ingredient;
import coogether.backend.domain.IngredientList;
import coogether.backend.domain.Recipe;
import coogether.backend.dto.simple.SimpleIngredientDto;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
public class IngredientListDto {
    private Long ingredientListId;
    private String ingredientAmount;

    /////////////////////
    private SimpleIngredientDto ingredient;
//    private RecipeDto recipe;



    @QueryProjection
    public IngredientListDto(IngredientList ingredientList) {
        this.ingredientListId = ingredientList.getIngredientListId();
        this.ingredientAmount = ingredientList.getIngredientAmount();
        /////////////////////
        this.ingredient = new SimpleIngredientDto(ingredientList.getIngredient());
//        this.recipe = new RecipeDto(ingredientList.getRecipe());
    }
}
