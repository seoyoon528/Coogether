package coogether.backend.repository.cookingroom;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CookingRoomRepository extends JpaRepository<CookingRoom, Long>{

    @Query("select cr from CookingRoom cr where TIMEDIFF(cr.cookingRoomStartTime ,now()) > 0 ")
    List<CookingRoom> findAll();


    @Query("select cr from CookingRoom cr where TIMEDIFF(cr.cookingRoomStartTime ,now()) > 0 and cr.recipe.recipeName like %:recipeName% ")
    List<CookingRoom> findByRecipeName(@Param("recipeName") String recipeName);

    @Query("select cr from CookingRoom cr where cr.cookingRoomId = :cookingRoomId ")
    CookingRoom findByCookingRoomId(@Param("cookingRoomId") Long cookingRoomId);
}
