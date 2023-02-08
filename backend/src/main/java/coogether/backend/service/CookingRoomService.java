package coogether.backend.service;

import coogether.backend.domain.*;
import coogether.backend.domain.status.EnumCookingRoomStatus;
import coogether.backend.domain.status.EnumMyIngredientManageFlag;
import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumUserCookCategory;
import coogether.backend.dto.CookingRoomCountDto;
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
import java.util.*;

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
    public CookingRoom addCookingRoom(CookingRoomRequest cookingRoomRequest, Long userSeq, Long recipeId, String url) {
        // 기본 정보
        CookingRoom cookingRoom = new CookingRoom();

        cookingRoom.setCookingRoomImg(url);
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

    /* 카테고리별 요리방 추천 */
    // 사용자 재료 기반 추천
    public List<CookingRoomCountDto> getRecommendedRoomListByMyIngredient(Long userSeq) {
        List<CookingRoomCountDto> cookingRoomCountDtos = new ArrayList<>();
        User user = userRepository.findByUserSeq(userSeq);

        List<MyIngredientManage> myIngredientManageList = user.getMyIngredientManageList();
        List<CookingRoom> cookingRoomList = cookingRoomRepository.findAll();

        for (CookingRoom cookingRoom : cookingRoomList) {
            CookingRoomCountDto cookingRoomCountDto = new CookingRoomCountDto();
            List<IngredientList> ingredientLists = cookingRoom.getRecipe().getIngredientList();

            int count = 0;
            for (IngredientList il : ingredientLists) {
                for (MyIngredientManage mig : myIngredientManageList) {
                    if (il.getIngredient().getIngredientId() == mig.getIngredient().getIngredientId() && mig.getMyIngredientManageFlag().toString().equals("IN")) {
                        count++;
                    }
                }
            }
            if (count > 0) {
                cookingRoomCountDto.setCookingRoom(cookingRoom);
                cookingRoomCountDto.setIngredientCnt(count);
                System.out.println("cookingRoomCountDto = " + cookingRoomCountDto.getCookingRoom().getCookingRoomId());
                System.out.println("count = " + count);
                cookingRoomCountDtos.add(cookingRoomCountDto);
            }
        }

        Collections.sort(cookingRoomCountDtos);
        return cookingRoomCountDtos;
    }

    // 시작 시간 임박 순 추천
    public List<CookingRoom> getRecommendedRoomListByStartTime() {
        List<CookingRoom> cookingRoomList = cookingRoomRepository.findAll();
        return cookingRoomList;
    }

    // 사용자 선호 요리 기반 추천
    public List<CookingRoom> getRecommendedRoomListByUserCook(Long userSeq) {
        User user = userRepository.findByUserSeq(userSeq);
        List<CookingRoom> cookingRoomList = cookingRoomRepository.findByCookingRoomByUserCook(enumConvertor(user.getUserCookCategory()));

        return cookingRoomList;
    }

    public EnumRecipeCategory enumConvertor(EnumUserCookCategory enumUserCookCategory) {
        String userCookCategory = enumUserCookCategory.toString();
        switch (userCookCategory) {
            case "KOREAN":
                return EnumRecipeCategory.KOREAN;
            case "CHINESE":
                return EnumRecipeCategory.CHINESE;
            case "WESTERN":
                return EnumRecipeCategory.WESTERN;
            case "JAPANESE":
                return EnumRecipeCategory.JAPANESE;
            case "DESSERT":
                return EnumRecipeCategory.DESSERT;
            case "ASIAN":
                return EnumRecipeCategory.ASIAN;
            case "BUNSIK":
                return EnumRecipeCategory.BUNSIK;
            case "ETC":
                return EnumRecipeCategory.ETC;
            default:
                return null;
        }
    }
}
