package coogether.backend.service;

import coogether.backend.domain.Recipe;
import coogether.backend.domain.User;
import coogether.backend.dto.request.RecipeRequest;
import coogether.backend.dto.simple.SimpleRecipeDto;
import coogether.backend.dto.simple.SimpleUserDto;
import coogether.backend.repository.recipe.RecipeRepository;
import coogether.backend.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;

    public List<Recipe> getRecipeAll(){
        return recipeRepository.findAll();
    }
    public Page<SimpleRecipeDto> getRecipeAllPaging(Pageable pageable){
        return recipeRepository.allRecipePage(pageable);
    }
    public List<Recipe> getRecipeListByRecipeName(String recipeName){
        return recipeRepository.findByRecipeName(recipeName);
    }

    @Transactional
    public Recipe addCustomRecipe(RecipeRequest recipeRequest, Long userSeq) {
        // 기본 정보
        Recipe recipe = new Recipe();
        recipe.setRecipeCategory(recipeRequest.getRecipeCategory());
        recipe.setRecipeContent(recipeRequest.getRecipeContent());
        recipe.setRecipeName(recipeRequest.getRecipeName());
        recipe.setRecipeType(recipeRequest.getRecipeType());
        recipe.setRecipeCreatedDate(LocalDateTime.now());

        User user = userRepository.findByUserSeq(userSeq);
        recipe.setUser(user);
        recipeRepository.save(recipe);


        return recipe;
    }

    public Page<SimpleRecipeDto> getRecipeListPagingByRecipeName(String recipeName, Pageable pageable) {
        return recipeRepository.getRecipeListPagingByRecipeName(recipeName,pageable);
    }
}
