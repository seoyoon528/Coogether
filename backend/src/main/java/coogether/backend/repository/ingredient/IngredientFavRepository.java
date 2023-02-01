package coogether.backend.repository.ingredient;

import coogether.backend.domain.IngredientFav;
import coogether.backend.domain.status.EnumIngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IngredientFavRepository extends JpaRepository<IngredientFav, Long> {

    @Query("select i from IngredientFav i where i.user.userSeq= :userSeq and i.ingredientFavFlag = 'YES' order by i.ingredientFavCreatedDate DESC ")
    List<IngredientFav> findListByUserSeq(@Param("userSeq")Long userSeq);

    @Query("select i from IngredientFav i where i.user.userSeq= :userSeq and i.ingredient.ingredientId = :ingredientId")
    IngredientFav findById(@Param("userSeq") Long userSeq, @Param("ingredientId") Long ingredientId);
}
