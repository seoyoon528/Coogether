package coogether.backend.repository.user;

import com.querydsl.jpa.impl.JPAQueryFactory;
import coogether.backend.domain.QUser;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import coogether.backend.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;
import static coogether.backend.domain.QUser.*;
import static coogether.backend.domain.status.EnumUserAccountStatus.INACTIVE;

public class UserRepositoryImpl implements UserRepositoryCustom{
    EntityManager em;
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

    @Transactional
    @Override
    public void deleteByUserId(String Id){
//        queryFactory
//                .update(user)
//                .set(user.userAccountStatus, INACTIVE)
//                .where(user.userId.eq(Id))
//                .execute();
//
//        em.flush();
//        em.clear();
    }
}
