package coogether.backend.repository.recipe;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.Recipe;
import coogether.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Long>, RecipeRepositoryCustom {

    @Query("select r from Recipe r where r.recipeName like %:recipeName% ")
    List<Recipe> findByRecipeName(@Param("recipeName") String recipeName);
}
