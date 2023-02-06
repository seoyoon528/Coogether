package coogether.backend.service;

import coogether.backend.domain.Recipe;
import coogether.backend.domain.RecipeStep;
import coogether.backend.dto.request.RecipeStepRequest;
import coogether.backend.repository.recipe.RecipeRepository;
import coogether.backend.repository.recipestep.RecipeStepRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class RecipeStepService {

    private final RecipeStepRepository recipeStepRepository;
    private final RecipeRepository  recipeRepository;

    public List<RecipeStep> getRecipeStepListByRecipeId(Long recipeId) {
        return recipeStepRepository.findByRecipeId(recipeId);
    }

    @Transactional
    public void addRecipeStep(Long recipeId, List<RecipeStepRequest> recipeStepRequests) {
        Recipe recipe = recipeRepository.findByRecipeId(recipeId);
        if (recipe != null) {
            for (RecipeStepRequest rsq : recipeStepRequests) {
                System.out.println("레시피 넘어옴 : " + rsq.getRecipeStepContent());
                RecipeStep recipeStep = new RecipeStep();
                recipeStep.setRecipe(recipe);

                recipeStep.setRecipeStepNum(rsq.getRecipeStepNum());
                recipeStep.setRecipeStepContent(rsq.getRecipeStepContent());
                recipeStepRepository.save(recipeStep);
            }
        }
    }

}
