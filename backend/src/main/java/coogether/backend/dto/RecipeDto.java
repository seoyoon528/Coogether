package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.IngredientList;
import coogether.backend.domain.Recipe;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumRecipeType;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Data
public class RecipeDto {
    private List<IngredientList> ingredientList;
    private List<CookingRoom> cookingRoomList;
    private UserDto user;
    private Long recipeId;
    private EnumRecipeCategory recipeCategory;
    private EnumRecipeType recipeType;
    private String recipeContent;
    private String recipeName;
    private LocalDateTime recipeCreatedDate;
    @QueryProjection
    public RecipeDto(Recipe recipe) {
        this.ingredientList = recipe.getIngredientList();
        this.cookingRoomList = recipe.getCookingRoomList();
        this.user = new UserDto(recipe.getUser());
        this.recipeId = recipe.getRecipeId();
        this.recipeCategory = recipe.getRecipeCategory();
        this.recipeType = recipe.getRecipeType();
        this.recipeContent = recipe.getRecipeContent();
        this.recipeName = recipe.getRecipeName();
        this.recipeCreatedDate = recipe.getRecipeCreatedDate();

    }
}
