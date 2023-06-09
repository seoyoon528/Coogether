package coogether.backend.service;

import coogether.backend.domain.Ingredient;
import coogether.backend.domain.IngredientList;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.status.EnumIngredientCategory;
import coogether.backend.repository.ingredient.IngredientRepository;
import coogether.backend.repository.ingredientlist.IngredientListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    public List<Ingredient> ingredientTotalListByCategoryId(EnumIngredientCategory categoryId) {
        return ingredientRepository.findByCategoryId(categoryId);
    }

    public List<Ingredient> ingredientTotalListByUserSeqAndCategoryId(Long userSeq, EnumIngredientCategory categoryId) {

        return ingredientRepository.findByUserSeqAndCategoryId(userSeq,categoryId);
    }

    public List<Ingredient> ingredientListByIngredientName(String ingredientName) {
        return ingredientRepository.findByIngredientName(ingredientName);
    }

    public List<Ingredient> ingredientTotalList() {
        return ingredientRepository.findAll();
    }
}
