package coogether.backend.repository.user;

import com.querydsl.jpa.impl.JPAQueryFactory;
import coogether.backend.domain.QUser;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import coogether.backend.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;
import static coogether.backend.domain.QUser.*;
import static coogether.backend.domain.status.EnumUserAccountStatus.INACTIVE;

@Repository
public class UserRepositoryImpl implements UserRepositoryCustom{
    EntityManager em;
    private final JPAQueryFactory queryFactory;

    public UserRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public User findByUserId(Long userSeq) {
        return queryFactory
                .selectFrom(user)
                .where(user.userSeq.eq(userSeq))
                .fetchOne();
    }

    @Override
    public List<User> findByUserName(String name) {
        return queryFactory
                .selectFrom(user)
                .where(user.userName.eq(name))
                .fetch();
    }

}
