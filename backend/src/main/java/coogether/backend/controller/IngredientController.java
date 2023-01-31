package coogether.backend.controller;


import coogether.backend.domain.Ingredient;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.status.EnumIngredientCategory;
import coogether.backend.dto.IngredientDto;
import coogether.backend.dto.MyIngredientManageDto;
import coogether.backend.dto.simple.SimpleIngredientDto;
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
    @ApiOperation(value = "카테고리 별 전체 재료 목록 반환하는 메소드")
    @GetMapping("/ingredient/list/total/{categoryId}")
    public ResponseEntity ingredientTotalListByCategoryId(@PathVariable("categoryId") EnumIngredientCategory categoryId)  {
        List<SimpleIngredientDto> result = new ArrayList<>();
        List<Ingredient> ingredients = ingredientService.myIngredientTotalListByCategoryId(categoryId);
        for (Ingredient i : ingredients)
            result.add(new SimpleIngredientDto(i));

        return ResponseEntity.ok().body(result);
    }
}
