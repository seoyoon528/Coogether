package coogether.backend.repository.history;

import coogether.backend.domain.CookingRoomHistory;
import coogether.backend.domain.User;
import coogether.backend.repository.user.UserRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoryRepository extends JpaRepository<CookingRoomHistory, String>{


}