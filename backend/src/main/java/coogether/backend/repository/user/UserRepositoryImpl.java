package coogether.backend.repository.user;

import com.querydsl.jpa.impl.JPAQueryFactory;
import coogether.backend.domain.QUser;
import coogether.backend.domain.User;
import coogether.backend.dto.UserDto;

import javax.persistence.EntityManager;
import java.util.List;
import static coogether.backend.domain.QUser.*;

public class UserRepositoryImpl implements UserRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public UserRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public User findByUserId(String id) {
        return queryFactory
                .selectFrom(user)
                .where(user.userId.eq(id))
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
