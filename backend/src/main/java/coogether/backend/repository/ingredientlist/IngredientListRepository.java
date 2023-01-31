package coogether.backend.repository.ingredientlist;

import coogether.backend.domain.IngredientList;
import coogether.backend.domain.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IngredientListRepository extends JpaRepository<IngredientList, Integer> {

    @Query("select il from IngredientList il where il.recipe.recipeId = :recipeId ")
    List<IngredientList> findByRecipeName(@Param("recipeId") int recipeId);
}
