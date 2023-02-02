package coogether.backend.repository.myingredientmanage;

import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.Recipe;
import coogether.backend.domain.status.EnumIngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MyIngredientManageRepository extends JpaRepository<MyIngredientManage, Long> {

    @Query("select mm from MyIngredientManage mm where mm.user.userSeq = :userSeq and mm.ingredient.ingredientId = :ingredientId ")
    MyIngredientManage findByUserSeqAndMyIngredientManageId(@Param("userSeq") Long userSeq, @Param("ingredientId") Long ingredientId);

    @Query("select mm from MyIngredientManage mm where mm.user.userSeq = :userSeq and mm.myIngredientManageFlag = 'IN' order by mm.myIngredientManageDate DESC ")
    List<MyIngredientManage> findByUserSeq(@Param("userSeq") Long userSeq);

    @Query("select mm from MyIngredientManage mm join Ingredient i on mm.ingredient.ingredientId = i.ingredientId " +
            " join IngredientList il on i.ingredientId = il.ingredient.ingredientId where mm.user.userSeq = :userSeq and mm.myIngredientManageFlag = 'IN' and il.recipe.recipeId = :recipeId ")
    List<MyIngredientManage> findByUserSeqAndRecipeId(@Param("userSeq")Long userSeq, @Param("recipeId")Long recipeId);
}
