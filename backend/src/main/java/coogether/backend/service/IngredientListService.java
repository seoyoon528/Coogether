package coogether.backend.service;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.Ingredient;
import coogether.backend.domain.IngredientList;
import coogether.backend.domain.Recipe;
import coogether.backend.dto.request.IngredientListRequest;
import coogether.backend.repository.ingredient.IngredientRepository;
import coogether.backend.repository.ingredientlist.IngredientListRepository;
import coogether.backend.repository.recipe.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class IngredientListService {
    private final RecipeRepository recipeRepository;
    private final IngredientRepository ingredientRepository;
    private final IngredientListRepository ingredientListRepository;

    public List<IngredientList> getIngredientListByRecipeName(Long recipeId){
        return ingredientListRepository.findByRecipeId(recipeId);
    }

    @Transactional
    public void addIngredientList(Long recipeId, List<IngredientListRequest> ingredientListRequests) {
        Recipe recipe = recipeRepository.findByRecipeId(recipeId);
        if (recipe != null) {
            for (IngredientListRequest ilr : ingredientListRequests) {
                Ingredient ingredient = ingredientRepository.findByIngredientId(ilr.getIngredientId());
                if (ingredient != null) {
                    IngredientList ingredientList = new IngredientList();
                    ingredientList.setIngredient(ingredient);
                    ingredientList.setRecipe(recipe);
                    ingredientList.setIngredientListId(ilr.getIngredientId());
                    ingredientList.setIngredientAmount(ilr.getIngredientAmount());
                    ingredientListRepository.save(ingredientList);
                }
            }
        }
    }
}
