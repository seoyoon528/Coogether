package coogether.backend.dto;

import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.Ingredient;
import coogether.backend.domain.IngredientFav;
import coogether.backend.domain.IngredientList;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.status.EnumIngredientCategory;
import lombok.Data;

import java.util.List;

@Data
public class IngredientDto {
    private List<MyIngredientManage> myIngredientManageList;
    private List<IngredientFav> ingredientFavList;
    private List<IngredientList> ingredientList;
    private int ingredientId;
    private String ingredientName;
    private EnumIngredientCategory ingredientCategory;
    private String ingredientIcon;


    @QueryProjection
    public IngredientDto(Ingredient ingredient) {
        this.myIngredientManageList = ingredient.getMyIngredientManageList();
        this.ingredientFavList = ingredient.getIngredientFavList();
        this.ingredientList = ingredient.getIngredientList();
        this.ingredientId = ingredient.getIngredientId();
        this.ingredientName = ingredient.getIngredientName();
        this.ingredientCategory = ingredient.getIngredientCategory();
        this.ingredientIcon = ingredient.getIngredientIcon();
    }
}
