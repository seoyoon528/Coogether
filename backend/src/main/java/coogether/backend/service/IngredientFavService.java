package coogether.backend.service;

import coogether.backend.domain.IngredientFav;
import coogether.backend.domain.status.EnumIngredientCategory;
import coogether.backend.repository.ingredient.IngredientFavRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class IngredientFavService {
    private final IngredientFavRepository ingredientFavRepository;

    public List<IngredientFav> myIngredientTotalListByCategoryId(Long userSeq, EnumIngredientCategory categoryId) {
        return ingredientFavRepository.findByRCategoryId(userSeq,categoryId);
    }
}
