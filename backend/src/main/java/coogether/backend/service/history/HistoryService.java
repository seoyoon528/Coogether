package coogether.backend.service.history;

import coogether.backend.domain.History;
import coogether.backend.domain.User;
import coogether.backend.repository.history.HistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static coogether.backend.domain.QUser.user;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class HistoryService {
    private final HistoryRepository historyRepository;


    public List<History> getHistoryByUserId(String userId){
        return historyRepository.findByUserId(userId);
    }
    public History getHistoryInfoByCookingRoomId(String userId, int cookingRoomId){
        return historyRepository.findByCookingRoomId(userId, cookingRoomId);
    }

}
