package coogether.backend.repository.ingredient;

import coogether.backend.domain.Ingredient;
import coogether.backend.domain.IngredientList;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumIngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {
    Ingredient findByIngredientId(@Param("ingredientId")int ingredientId);

    @Query("select i from Ingredient i where i.ingredientCategory = :categoryId")
    List<Ingredient> findByCategoryId(@Param("categoryId") EnumIngredientCategory categoryId);
}
