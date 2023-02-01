package coogether.backend.repository.ingredient;

import coogether.backend.domain.IngredientFav;
import coogether.backend.domain.status.EnumIngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IngredientFavRepository extends JpaRepository<IngredientFav, Integer> {

    @Query("select i from IngredientFav i where i.user.userSeq= :userSeq and i.ingredientFavFlag = 'YES' ")
    List<IngredientFav> findListByUserSeq(@Param("userSeq")Long userSeq);

    @Query("select i from IngredientFav i where i.user.userSeq= :userSeq and i.ingredient.ingredientId = :ingredientId")
    IngredientFav findById(@Param("userSeq") Long userSeq, @Param("ingredientId") int ingredientId);
}
