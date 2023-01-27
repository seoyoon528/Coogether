package coogether.backend.repository.user;

import com.querydsl.jpa.impl.JPAQueryFactory;
import coogether.backend.domain.QUser;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;
import static coogether.backend.domain.QUser.*;

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

//    @Override
//    public void updateByUserId(String Id){
//        queryFactory
//                .update(user)
//                .set(user.userId, "비회원")
//                .where(user.age.lt(28))
//                .execute();
//
//        em.flush();
//    }

    @Transactional
    @Override
    public void deleteByUserId(String Id){
        queryFactory
                .update(user)
                .set(user.userAccountStatus, EnumUserAccountStatus.INACTIVE)
                .where(user.userId.eq(Id))
                .execute();

        em.flush();
        em.clear();

    }
}
