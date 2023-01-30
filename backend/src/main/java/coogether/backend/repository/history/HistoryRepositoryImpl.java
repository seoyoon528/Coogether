package coogether.backend.repository.history;

import com.querydsl.jpa.impl.JPAQueryFactory;
import coogether.backend.domain.History;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

import static coogether.backend.domain.QHistory.*;
import static org.springframework.util.StringUtils.hasText;

@Repository
public class HistoryRepositoryImpl implements HistoryRepositoryCustom{

    private final JPAQueryFactory queryFactory;

    public HistoryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

//    @Override
//    public List<History> findByUserId(String id) {
//        return queryFactory
//                .selectFrom(history)
//                .where(history.userId.)
//                .fetch();
//    }

    @Override
    public History findByCookingRoomId(Long userSeq, int cookingRoomId) {
        return queryFactory
                .selectFrom(history)
                .where(history.user.userSeq.eq(userSeq).and(history.cookingRoom.cookingRoomId.eq(cookingRoomId)))
                .fetchOne();
    }

}
