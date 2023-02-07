package coogether.backend.repository.recipestep;

import coogether.backend.domain.RecipeStep;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecipeStepRepository extends JpaRepository<RecipeStep, Long> {

    // 레시피 ID로 레시피 단계 목록 반환
    @Query("select rs from RecipeStep rs where rs.recipe.recipeId = :recipeId order by rs.recipeStepNum asc")
    List<RecipeStep> findByRecipeId(@Param("recipeId") Long recipeId);
}
