package coogether.backend.repository.user;

import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumSnsType;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class UserRepositoryTest {
    @Autowired
    EntityManager em;
    @Autowired
    UserRepository memberRepository;


    @Test
    public void basicTest() {
        User user = new User("10","member1", "이현구","gusrnqq@naver.com","1","1", EnumUserCookCategory.KOREAN, EnumUserAccountStatus.ACTIVE,50, EnumSnsType.GOOGLE);
        memberRepository.save(user);

        User findMember = memberRepository.findById(user.getUserId()).get();
        assertThat(findMember).isEqualTo(user);

        List<User> result1 = memberRepository.findAll();
        assertThat(result1).containsExactly(user);

        }
}