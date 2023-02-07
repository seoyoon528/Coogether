package coogether.backend.controller;

import coogether.backend.domain.RecipeStep;
import coogether.backend.dto.request.RecipeStepRequest;
import coogether.backend.dto.simple.SimpleRecipeStepDto;
import coogether.backend.service.RecipeStepService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(tags = {"레시피 단계별 정보를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class RecipeStepController {

    private final RecipeStepService recipeStepService;

    @ApiOperation(value = "레시피 ID로 레시피 단계 정보 목록을 반환하는 메소드")
    @GetMapping("/recipestep/list/{recipeId}")
    public ResponseEntity recipeStepList(@PathVariable("recipeId") Long recipeId) {
        List<SimpleRecipeStepDto> result = new ArrayList<>();
        List<RecipeStep> recipeSteps = recipeStepService.getRecipeStepListByRecipeId(recipeId);

        for (RecipeStep rs : recipeSteps) {
            result.add(new SimpleRecipeStepDto(rs));
        }

        return ResponseEntity.ok().body(result);
    }

    @ApiOperation(value = "레시피 단계별 정보를 추가하는 메소드")
    @PostMapping("/recipestep/create/{recipeId}")
    public ResponseEntity addCustomRecipeStep(@RequestBody List<RecipeStepRequest> recipeStepRequest, @PathVariable("recipeId") Long recipeId) {
        System.out.println("레시피 ID : "+recipeId);
        recipeStepService.addRecipeStep(recipeId, recipeStepRequest);

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

}
