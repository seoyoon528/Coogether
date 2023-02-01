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

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    Ingredient findByIngredientId(@Param("ingredientId")Long ingredientId);

    @Query("select i from Ingredient i where i.ingredientCategory = :categoryId")
    List<Ingredient> findByCategoryId(@Param("categoryId") EnumIngredientCategory categoryId);
    @Query("select i from Ingredient i join MyIngredientManage mm on i.ingredientId = mm.ingredient.ingredientId " +
            "where mm.user.userSeq = :userSeq and i.ingredientCategory = :categoryId")
    List<Ingredient> findByUserSeqAndCategoryId(@Param("userSeq") Long userSeq, @Param("categoryId") EnumIngredientCategory categoryId);
    @Query("select i from Ingredient i where i.ingredientName like %:ingredientName% ")
    List<Ingredient> findByIngredientName(String ingredientName);
}
