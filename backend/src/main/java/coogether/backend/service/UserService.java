package coogether.backend.service;

import coogether.backend.domain.History;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumUserCookCategory;
import coogether.backend.repository.history.HistoryRepository;
import coogether.backend.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public List<User> getUserList(){
        return userRepository.findAll();
    }

    public User getUserInfoById(Long userSeq){
        return userRepository.findByUserId(userSeq);
    }

    public List<User> getUserListByName(String name){
        return userRepository.findByUserName(name);
    }

    @Transactional
    public void patchUserUpdate(Long userSeq, String nickname, String img, String introduce, EnumUserCookCategory userCookCategory) {
        User user = userRepository.findByUserId(userSeq);
        if(nickname != null){
            user.setUserNickname(nickname);
        }
        if(img != null){
            user.setUserImg(img);
        }
        if(introduce != null){
            user.setUserIntroduce(introduce);
        }
        if(userCookCategory != null){
            user.setUserCookCategory(userCookCategory);
        }

        try {
            userRepository.save(user);
        } catch (Exception e) {
            // 바꾼값이 DB에 이미 있으면 Error!!
        }
    }

    @Transactional
    public void patchUserDelete(Long id) {
        userRepository.deleteByUserId(id);
    }

    public List<User> getUserRank() {
        return userRepository.findUserRank();
    }
}
