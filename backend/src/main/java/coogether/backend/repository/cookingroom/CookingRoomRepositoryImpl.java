package coogether.backend.repository.cookingroom;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.status.EnumCookingRoomStatus;
import coogether.backend.dto.CookingRoomDto;
import coogether.backend.dto.QCookingRoomDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;

import static coogether.backend.domain.QCookingRoom.cookingRoom;

import javax.persistence.EntityManager;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public class CookingRoomRepositoryImpl implements CookingRoomRepositoryCustom {
    private final JPAQueryFactory queryFactory;


    public CookingRoomRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<CookingRoomDto> getCookingRoomListPaging(Pageable pageable) {
        List<CookingRoomDto> content = queryFactory
                .select(new QCookingRoomDto(cookingRoom))
                .from(cookingRoom)
                .where(cookingRoom.cookingRoomStartTime.gt(LocalDateTime.now())
                        .and(cookingRoom.cookingRoomStatus.eq(EnumCookingRoomStatus.EXPECTED)))
                .orderBy(cookingRoom.cookingRoomStartTime.asc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();


        JPAQuery<CookingRoom> countQuery = queryFactory
                .select(cookingRoom)
                .from(cookingRoom);

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    @Override
    public Page<CookingRoomDto> getCookingRoomListByRecipaNamePaging(String recipeName, Pageable pageable) {
        List<CookingRoomDto> content = queryFactory
                .select(new QCookingRoomDto(cookingRoom))
                .from(cookingRoom)
                .where(cookingRoom.cookingRoomStartTime.gt(LocalDateTime.now())
                        .and(cookingRoom.recipe.recipeName.contains(recipeName))
                        .and(cookingRoom.cookingRoomStatus.eq(EnumCookingRoomStatus.EXPECTED)))
                        .offset(pageable.getOffset())
                        .limit(pageable.getPageSize())
                        .fetch();


        JPAQuery<CookingRoom> countQuery = queryFactory
                .select(cookingRoom)
                .from(cookingRoom)
                .where(cookingRoom.cookingRoomStartTime.gt(LocalDateTime.now()).and(cookingRoom.recipe.recipeName.contains(recipeName)));

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }


}
