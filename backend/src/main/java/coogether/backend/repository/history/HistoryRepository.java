package coogether.backend.repository.history;

import coogether.backend.domain.History;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface HistoryRepository extends JpaRepository<History, Long>, HistoryRepositoryCustom{

    @Query("select h from History h where h.user.userSeq = :userSeq and h.cookingRoom.cookingRoomStatus = 'TERMINATED' ")
    List<History> findByUserId(@Param("userSeq") Long userSeq);
}