package coogether.backend.repository.user;

import com.querydsl.jpa.impl.JPAQueryFactory;
import coogether.backend.domain.QUser;
import coogether.backend.domain.User;
import coogether.backend.dto.UserDto;

import javax.persistence.EntityManager;
import java.util.List;

public class UserRepositoryImpl implements UserRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public UserRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public User findByUserId(String id) {
        return queryFactory
                .selectFrom(QUser.user)
                .where(QUser.user.userId.eq(id))
                .fetchOne();
    }
}
