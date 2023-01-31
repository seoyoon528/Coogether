package coogether.backend.service;

import coogether.backend.domain.Follow;
import coogether.backend.domain.Ingredient;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumFollowFlag;
import coogether.backend.domain.status.EnumMyIngredientManageFlag;
import coogether.backend.repository.follow.FollowRepository;
import coogether.backend.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class FollowService {
    private final FollowRepository followRepository;
    private final UserRepository userRepository;

    @Transactional
    public Follow updateFollowById(Long followerId, Long followingId) {
        Follow follow = followRepository.findByFollowId(followerId, followingId);

        if (follow == null) {
            follow = new Follow();

            //user 없으면 탈출
            User user = userRepository.findByUserId(followerId);
            if(user == null)  return follow;
            follow.setFollowerUser(user);

            //ingredient 없으면 탈출
            User user2 = userRepository.findByUserId(followingId);
            if(user2 == null)  return follow;
            follow.setFollowingUser(user2);

            // 현재 시간, Enum Type CONNECT 등록
            follow.setFollowDate(LocalDateTime.now());
            follow.setFollowFlag(EnumFollowFlag.CONNECT);

            followRepository.save(follow);
            return follow;
        } else {
            if (follow.getFollowFlag().equals(EnumFollowFlag.CONNECT)) {
                follow.setFollowFlag(EnumFollowFlag.DISCONNECT);
            } else {
                follow.setFollowFlag(EnumFollowFlag.CONNECT);
            }
            System.out.println("getFollowFlag = " + follow);

            followRepository.save(follow);

            return follow;
        }
    }
}
