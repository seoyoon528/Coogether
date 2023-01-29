package coogether.backend.repository.history;

import coogether.backend.domain.History;
import coogether.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoryRepositoryCustom {

    List<History> findByUserId(String id);
    History findByCookingRoomId(String userId, int cookingRoomId);


}