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
        return userRepository.findByUserSeq(userSeq);
    }

    public List<User> getUserListByName(String name){
        return userRepository.findByUserName(name);
    }

    @Transactional
    public void patchUserUpdate(Long userSeq, String nickname, String img, String introduce, EnumUserCookCategory userCookCategory) {
        User user = userRepository.findByUserSeq(userSeq);
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

    /* 사용자 정보 가져오는 메소드
    요청 헤더에 Authorization 항목으로 토큰이 오면,
    인증된 사용자에 대해 정보를 가져와 Account 타입으로 반환 */

//    public User getAccountInfo(HttpServletRequest request) {
//        String authenticAccount = (String) request.getAttribute("authenticAccount"); // userId 리턴
//        System.out.println("JWT 토큰 인증이 완료된 계정입니다 : " + authenticAccount);
//
//        User user = userRepository.findByUserId(authenticAccount).orElseThrow();
//        System.out.println("여기는 AccountService : " + user);
//        return user;
//    }
}
