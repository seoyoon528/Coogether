package coogether.backend.service.history;

import coogether.backend.domain.User;
import org.springframework.stereotype.Service;

import static coogether.backend.domain.QUser.user;

@Service
public class HistoryService {

    public User (String id) {
        return queryFactory
                .selectFrom(user)
                .where(user.userId.eq(id))
                .fetchOne();
    }
}
