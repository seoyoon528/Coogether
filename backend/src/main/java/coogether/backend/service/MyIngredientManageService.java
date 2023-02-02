package coogether.backend.service;

import coogether.backend.domain.Ingredient;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumIngredientCategory;
import coogether.backend.domain.status.EnumMyIngredientManageFlag;
import coogether.backend.dto.MyIngredientManageDto;
import coogether.backend.dto.request.MyIngredientManageRequest;
import coogether.backend.repository.ingredient.IngredientRepository;
import coogether.backend.repository.myingredientmanage.MyIngredientManageRepository;
import coogether.backend.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class MyIngredientManageService {
    private final MyIngredientManageRepository myIngredientManageRepository;
    private final UserRepository userRepository;
    private final IngredientRepository ingredientRepository;

    @Transactional
    public MyIngredientManage addMyIngredientByIngredientId(Long userSeq, Long ingredientId) {
        MyIngredientManage myIngredientManage = new MyIngredientManage();

        //user
        User user = userRepository.findByUserId(userSeq);
        myIngredientManage.setUser(user);

        //ingredient
        Ingredient ingredient = ingredientRepository.findByIngredientId(ingredientId);
        myIngredientManage.setIngredient(ingredient);

        // 현재 시간, Enum Type IN 등록
        myIngredientManage.setMyIngredientManageDate(LocalDateTime.now());
        myIngredientManage.setMyIngredientManageFlag(EnumMyIngredientManageFlag.IN);
        myIngredientManageRepository.save(myIngredientManage);


        return myIngredientManage;
    }

    @Transactional
    public MyIngredientManage updateMyIngredientByIngredientId(Long userSeq, Long ingredientId) {
        MyIngredientManage myIngredientManage = myIngredientManageRepository.findByUserSeqAndMyIngredientManageId
                (userSeq, ingredientId);

        if (myIngredientManage == null) {
            myIngredientManage = new MyIngredientManage();

            //user 없으면 탈출
            User user = userRepository.findByUserId(userSeq);
            if (user == null) return myIngredientManage;
            myIngredientManage.setUser(user);

            //ingredient 없으면 탈출
            Ingredient ingredient = ingredientRepository.findByIngredientId(ingredientId);
            if (ingredient == null) return myIngredientManage;
            myIngredientManage.setIngredient(ingredient);

            // 현재 시간, Enum Type IN 등록
            myIngredientManage.setMyIngredientManageDate(LocalDateTime.now());
            myIngredientManage.setMyIngredientManageFlag(EnumMyIngredientManageFlag.IN);

            myIngredientManageRepository.save(myIngredientManage);
        } else {
            System.out.println("히히 ");
            if (myIngredientManage.getMyIngredientManageFlag().equals(EnumMyIngredientManageFlag.IN)) {
                myIngredientManage.setMyIngredientManageFlag(EnumMyIngredientManageFlag.OUT);
            } else {
                myIngredientManage.setMyIngredientManageFlag(EnumMyIngredientManageFlag.IN);
            }
            //System.out.println("myIngredientManage = " + myIngredientManage);

            myIngredientManageRepository.save(myIngredientManage);

        }
            return myIngredientManage;
    }

    public List<MyIngredientManage> myIngredientTotalListByUserSeq(Long userSeq) {
        return myIngredientManageRepository.findByUserSeq(userSeq);
    }

    public List<MyIngredientManage> myIngredientListByUserSeqAndRecipeId(Long userSeq, Long recipeId) {
        return myIngredientManageRepository.findByUserSeqAndRecipeId(userSeq, recipeId);
    }

    @Transactional
    public List<MyIngredientManage> deleteMyIngredientByIngredientId(Long userSeq, String deleteIngredientList) {

        // 재료 번호 리스트 분리해서 배열에 담기
        String line = deleteIngredientList;
        String[] arr = line.split(",");
        Long[] array = new Long[arr.length];
        List<MyIngredientManage> result = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            array[i] = Long.parseLong(arr[i]);

            // 레시피에 있는 재료인지 확인하는 로직 짜야하나? 프론트에서 정확하게 넘어온다고 가정하면 안 짜도 됨 / 짜야되면 추가할 것
            MyIngredientManage myIngredientManage = myIngredientManageRepository.findByUserSeqAndMyIngredientManageId
                    (userSeq, array[i]);
            if (myIngredientManage.getMyIngredientManageFlag().equals(EnumMyIngredientManageFlag.IN)) {
                myIngredientManage.setMyIngredientManageFlag(EnumMyIngredientManageFlag.OUT);
            }
            myIngredientManageRepository.save(myIngredientManage);
            result.add(myIngredientManage);
        }
        ///////////////////////////

        return result;
    }
}
