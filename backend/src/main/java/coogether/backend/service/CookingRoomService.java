package coogether.backend.service;

import coogether.backend.domain.*;
import coogether.backend.domain.status.EnumCookingRoomStatus;
import coogether.backend.dto.CookingRoomDto;
import coogether.backend.dto.request.CookingRoomRequest;
import coogether.backend.dto.simple.SimpleUserJoinListDto;
import coogether.backend.repository.cookingroom.CookingRoomRepository;
import coogether.backend.repository.recipe.RecipeRepository;
import coogether.backend.repository.user.UserRepository;
import coogether.backend.repository.userjoinlist.UserJoinListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class CookingRoomService {

    private final CookingRoomRepository cookingRoomRepository;
    private final UserRepository userRepository;
    private final RecipeRepository recipeRepository;
    private final UserJoinListRepository userJoinListRepository;

    public CookingRoom getCookingRoomByCookingRoomId(Long cookingRoomId) {
        return cookingRoomRepository.findByCookingRoomId(cookingRoomId);
    }

    // 페이징
    public Page<CookingRoomDto> getCookingRoomListPaging(Pageable pageable) {
        cookingRoomRepository.findAll(pageable);
        return cookingRoomRepository.getCookingRoomListPaging(pageable);
    }

    public Page<CookingRoomDto> roomListByRecipeNamePaging(String recipeName, Pageable pageable) {
        return cookingRoomRepository.getCookingRoomListByRecipaNamePaging(recipeName, pageable);
    }

    @Transactional
    public CookingRoom addCookingRoom(CookingRoomRequest cookingRoomRequest, Long userSeq, Long recipeId) {
        // 기본 정보
        CookingRoom cookingRoom = new CookingRoom();

        cookingRoom.setCookingRoomImg(cookingRoomRequest.getCookingRoomImg());
        cookingRoom.setCookingRoomName(cookingRoomRequest.getCookingRoomName());
        cookingRoom.setCookingRoomNotice(cookingRoomRequest.getCookingRoomNotice());
        cookingRoom.setCookingRoomStartTime(cookingRoomRequest.getCookingRoomStartTime());
        cookingRoom.setCookingRoomStatus(EnumCookingRoomStatus.EXPECTED);

        User user = userRepository.findByUserSeq(userSeq);
        cookingRoom.setCookingRoomHost(user);

        Recipe recipe = recipeRepository.findByRecipeId(recipeId);
        cookingRoom.setRecipe(recipe);


        cookingRoomRepository.save(cookingRoom);

        return cookingRoom;
    }

    @Transactional
    public Boolean addUserJoin(Long userSeq, Long cookingRoomId) {
        UserJoinList userJoinList = new UserJoinList();
        List<UserJoinList> userJoinLists = userJoinListRepository.findByCookingRoomCookingRoomId(cookingRoomId);
        for (UserJoinList joinList : userJoinLists) {
            if (joinList.getUser().getUserSeq() == userSeq)
                return false;
        }

        if (userJoinLists.size() < 6) {
            CookingRoom cookingRoom = cookingRoomRepository.findByCookingRoomId(cookingRoomId);
            User user = userRepository.findByUserSeq(userSeq);
            if (user != null) {
                userJoinList.setCookingRoom(cookingRoom);
                userJoinList.setUser(user);
                userJoinList.setUserJoinRegTime(LocalDateTime.now());
                userJoinListRepository.save(userJoinList);
                return true;
            }
        }
        return false;
    }

    @Transactional
    public void deleteCookingRoomByCookingRoomId(Long cookingRoomId,Long userSeq) {
        userJoinListRepository.deleteByUserSeq(cookingRoomId,userSeq);
    }
}
