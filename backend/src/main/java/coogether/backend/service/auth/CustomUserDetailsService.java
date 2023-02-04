package coogether.backend.service.auth;

import coogether.backend.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    @Transactional // transactional 처리로 작업단위 지정
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        coogether.backend.domain.User user = userRepository.findByUserId(userId);
        if (user != null) {
            return createUserDetails(user);
        }
        else {
            throw new UsernameNotFoundException(userId + " 아이디를 가진 유저정보를 DB 에서 찾을 수 없습니다.");
        }
    }

    // DB 계정 정보가 존재하면 UserDetails 객체로 만들어서 리턴
    private UserDetails createUserDetails(coogether.backend.domain.User user) {
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(user.getUserRoleType().toString());

        // 여기서 리턴하는 User 은 스프링 시큐리티 내 UserDetails(인터페이스) 의 구현체
        return new User (
                user.getUserId(),
                "",
                Collections.singleton(grantedAuthority)
        );
    }

}