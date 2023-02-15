package coogether.backend.repository.userjoinlist;

import coogether.backend.domain.UserJoinList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserJoinListRepository extends JpaRepository<UserJoinList, Long> {

    @Query("select ul from UserJoinList ul where ul.cookingRoom.cookingRoomId = :cookingRoomId ")
    List<UserJoinList> findByCookingRoomCookingRoomId(@Param("cookingRoomId") Long cookingRoomId);

    @Modifying
    @Query("delete from UserJoinList uj where uj.cookingRoom.cookingRoomId = :cookingRoomId and uj.user.userSeq = :userSeq")
    void deleteByUserSeq(@Param("cookingRoomId") Long cookingRoomId, @Param("userSeq") Long userSeq);
}
