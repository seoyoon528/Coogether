package coogether.backend.repository.myingredientmanage;

import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MyIngredientManageRepository extends JpaRepository<MyIngredientManage, Integer> {

    @Query("select mm from MyIngredientManage mm where mm.user.userSeq = :userSeq and mm.ingredient.ingredientId = :ingredientId ")
    MyIngredientManage findByUserSeqAndMyIngredientManageId(@Param("userSeq") Long userSeq, @Param("ingredientId") int ingredientId);
}
