package coogether.backend.service;

import coogether.backend.domain.Recipe;
import coogether.backend.domain.RecipeStep;
import coogether.backend.domain.User;
import coogether.backend.dto.request.RecipeRequest;
import coogether.backend.dto.request.RecipeStepRequest;
import coogether.backend.dto.simple.SimpleRecipeDto;
import coogether.backend.repository.recipe.RecipeRepository;
import coogether.backend.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final UserRepository userRepository;
    private final EntityManager em;

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
    public Recipe addCustomRecipe(RecipeRequest recipeRequest, Long userSeq, String url) {
        User user = userRepository.findByUserSeq(userSeq);
        if (user != null) {
            Recipe recipe = new Recipe();
            recipe.setUser(user);
            recipe.setRecipeCategory(recipeRequest.getRecipeCategory());

            // 버킷에 저장된 이미지 url 불러오기
            recipe.setRecipeImg(url);

            recipe.setRecipeName(recipeRequest.getRecipeName());
            recipe.setRecipeType(recipeRequest.getRecipeType());
            recipe.setRecipeCreatedDate(LocalDateTime.now());

            String recipeTotalContent = "";
            for (RecipeStepRequest rsr : recipeRequest.getRecipeStepRequest()) {
                recipeTotalContent += rsr.getRecipeStepNum() + ". " + rsr.getRecipeStepContent() + "\n";
            }
            recipe.setRecipeContent(recipeTotalContent);
            recipeRepository.saveAndFlush(recipe);
            em.clear();

            return recipe;
        }
        return null;
    }

    public Page<SimpleRecipeDto> getRecipeListPagingByRecipeName(String recipeName, Pageable pageable) {
        return recipeRepository.getRecipeListPagingByRecipeName(recipeName,pageable);
    }

    public List<SimpleRecipeDto> getRecipeListUser(Long userSeq) {
        List<SimpleRecipeDto> result = new ArrayList<>();

        List<Recipe> recipes = recipeRepository.findByUserSeq(userSeq);
        for (Recipe r : recipes) {
            SimpleRecipeDto simpleRecipeDto = new SimpleRecipeDto(r);
            result.add(simpleRecipeDto);
        }

        return result;
    }
}
