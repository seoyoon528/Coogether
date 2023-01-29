package coogether.backend.repository.history;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import coogether.backend.domain.History;
import coogether.backend.domain.QHistory;
import coogether.backend.domain.QUser;

import javax.persistence.EntityManager;
import java.util.List;

import static coogether.backend.domain.QHistory.*;
import static org.springframework.util.StringUtils.hasText;

public class HistoryRepositoryImpl implements HistoryRepositoryCustom{

    EntityManager em;
    private final JPAQueryFactory queryFactory;

    public HistoryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }


    @Override
    public List<History> findByUserId(String id) {
        return queryFactory
                .selectFrom(history)
                .where(history.userId.userId.eq(id))
                .fetch();
    }

    @Override
    public History findByCookingRoomId(String id, int cookingRoomId) {
        return queryFactory
                .selectFrom(history)
                .where(history.userId.userId.eq(id).and(history.cookingRoomId.cookingRoomId.eq(cookingRoomId)))
                .fetchOne();
    }

}
