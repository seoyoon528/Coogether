package coogether.backend.repository.cookingroom;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumUserCookCategory;
import coogether.backend.dto.CookingRoomCountDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CookingRoomRepository extends JpaRepository<CookingRoom, Long>, CookingRoomRepositoryCustom{

    @Query("select cr from CookingRoom cr where TIMEDIFF(cr.cookingRoomStartTime ,now()) > 0 and cr.cookingRoomStatus = 'EXPECTED' order by cr.cookingRoomStartTime asc")
    List<CookingRoom> findAll();


    CookingRoom findByCookingRoomId(Long cookingRoomId);

    @Query("select cr from CookingRoom cr where cr.recipe.recipeCategory = :enumRecipeCategory")
    List<CookingRoom> findByCookingRoomByUserCook(@Param("enumRecipeCategory") EnumRecipeCategory enumRecipeCategory);
}
