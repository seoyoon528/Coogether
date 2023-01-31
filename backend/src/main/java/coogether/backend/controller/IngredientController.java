package coogether.backend.controller;


import coogether.backend.domain.Ingredient;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.Recipe;
import coogether.backend.domain.status.EnumIngredientCategory;
import coogether.backend.dto.IngredientDto;
import coogether.backend.dto.MyIngredientManageDto;
import coogether.backend.dto.simple.SimpleIngredientDto;
import coogether.backend.dto.simple.SimpleRecipeDto;
import coogether.backend.service.IngredientService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Api(tags = {"재료 관리를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class IngredientController {

    private final IngredientService ingredientService;
    @ApiOperation(value = "카테고리별 전체 재료 목록 반환하는 메소드")
    @GetMapping("/ingredient/list/total/{categoryId}")
    public ResponseEntity ingredientTotalListByCategoryId(@PathVariable("categoryId") EnumIngredientCategory categoryId)  {
        List<SimpleIngredientDto> result = new ArrayList<>();
        List<Ingredient> ingredients = ingredientService.myIngredientTotalListByCategoryId(categoryId);
        for (Ingredient i : ingredients)
            result.add(new SimpleIngredientDto(i));

        return ResponseEntity.ok().body(result);
    }

    @ApiOperation(value = "카테고리별 내가 보유중인 재료 목록 반환하는 메소드")
    @GetMapping("/ingredient/list/my/{userSeq}/{categoryId}")
    public ResponseEntity ingredientTotalListByUserSeqAndCategoryId(@PathVariable("userSeq") Long userSeq,@PathVariable("categoryId") EnumIngredientCategory categoryId)  {
        List<SimpleIngredientDto> result = new ArrayList<>();
        List<Ingredient> ingredients = ingredientService.ingredientTotalListByUserSeqAndCategoryId(userSeq,categoryId);
        for (Ingredient i : ingredients)
            result.add(new SimpleIngredientDto(i));

        return ResponseEntity.ok().body(result);
    }

    @ApiOperation(value = "내 냉장고에서 재료 이름으로 재료 검색하는 메소드")
    @GetMapping("/myIngredient/search/{ingredientName}")
    public ResponseEntity ingredientListByIngredientName(@PathVariable("ingredientName") String ingredientName)  {
        List<SimpleIngredientDto> result = new ArrayList<>();
        List<Ingredient> ingredients = ingredientService.ingredientListByIngredientName(ingredientName);
        for (Ingredient i : ingredients)
            result.add(new SimpleIngredientDto(i));

        return ResponseEntity.ok().body(result);
    }
}
