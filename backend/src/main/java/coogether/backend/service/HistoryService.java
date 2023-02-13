package coogether.backend.service;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.History;
import coogether.backend.domain.Recipe;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumCookingRoomStatus;
import coogether.backend.repository.cookingroom.CookingRoomRepository;
import coogether.backend.repository.history.HistoryRepository;
import coogether.backend.repository.user.UserRepository;
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
    private final CookingRoomRepository cookingRoomRepository;
    private final UserRepository userRepository;

    public List<History> getHistoryByUserId(Long userSeq){
        return historyRepository.findByUserId(userSeq);
    }
    public History getHistoryInfoByCookingRoomId(Long userSeq, Long cookingRoomId){
        return historyRepository.findByCookingRoomId(userSeq, cookingRoomId);
    }

    @Transactional
    public History addHistory(Long userSeq, Long cookingRoomId, String url) {
        // 기본 정보
        History history = new History();

        history.setHistoryImg(url);
        CookingRoom cookingRoom = cookingRoomRepository.findByCookingRoomId(cookingRoomId);
        // 요리방 상태 종료로 변경
        cookingRoom.setCookingRoomStatus(EnumCookingRoomStatus.TERMINATED);
        historyRepository.save(history);

        User user = userRepository.findByUserSeq(userSeq);
        user.setUserTemp(user.getUserTemp()+1);
        userRepository.save(user);
        history.setUser(user);
        history.setCookingRoom(cookingRoom);

        cookingRoomRepository.save(cookingRoom);

        return history;
    }
}
