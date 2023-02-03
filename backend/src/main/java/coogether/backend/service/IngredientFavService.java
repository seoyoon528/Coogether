package coogether.backend.service;

import coogether.backend.domain.*;
import coogether.backend.domain.status.EnumIngredientCategory;
import coogether.backend.domain.status.EnumIngredientFavFlag;
import coogether.backend.repository.ingredient.IngredientFavRepository;
import coogether.backend.repository.ingredient.IngredientRepository;
import coogether.backend.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class IngredientFavService {
    private final IngredientFavRepository ingredientFavRepository;
    private final UserRepository userRepository;
    private final IngredientRepository ingredientRepository;

    public List<IngredientFav> myIngredientTotalListByCategoryId(Long userSeq) {
        return ingredientFavRepository.findListByUserSeq(userSeq);
    }

    @Transactional
    public void addFavIngredient(Long userSeq, Long ingredientId) {
        IngredientFav ingredientFav = ingredientFavRepository.findById(userSeq, ingredientId);

        if (ingredientFav == null) {
            ingredientFav = new IngredientFav();

            ingredientFav.setIngredientFavFlag(EnumIngredientFavFlag.YES);
            ingredientFav.setIngredientFavCreatedDate(LocalDateTime.now());
            User user = userRepository.findByUserId(userSeq);
            ingredientFav.setUser(user);

            Ingredient ingredient = ingredientRepository.findByIngredientId(ingredientId);
            ingredientFav.setIngredient(ingredient);

        } else {
            if (ingredientFav.getIngredientFavFlag().equals(EnumIngredientFavFlag.YES)){
                ingredientFav.setIngredientFavFlag((EnumIngredientFavFlag.NO));
                                                 ingredientFav.setIngredientFavCreatedDate(LocalDateTime.now());
            }
            else{
                ingredientFav.setIngredientFavFlag((EnumIngredientFavFlag.YES));
                ingredientFav.setIngredientFavCreatedDate(LocalDateTime.now());
            }

        }

        ingredientFavRepository.save(ingredientFav);
    }
}
