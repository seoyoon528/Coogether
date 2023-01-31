package coogether.backend.service;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.IngredientList;
import coogether.backend.domain.Recipe;
import coogether.backend.repository.ingredientlist.IngredientListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class IngredientListService {
    private final IngredientListRepository ingredientListRepository;

    public List<IngredientList> getIngredientListByRecipeName(int recipeId){
        return ingredientListRepository.findByRecipeName(recipeId);
    }
}
