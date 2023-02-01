package coogether.backend.controller;

import coogether.backend.domain.IngredientFav;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.status.EnumIngredientCategory;
import coogether.backend.dto.IngredientFavDto;
import coogether.backend.dto.MyIngredientManageDto;
import coogether.backend.dto.simple.SimpleIngredientFavDto;
import coogether.backend.service.IngredientFavService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Api(tags = {"즐겨찾기 관리를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class IngredientFavController {
    private final IngredientFavService ingredientFavService;

    @ApiOperation(value = "내 즐겨찾기 재료 목록 반환하는 메소드")
    @GetMapping("/myIngredient/list/fav/{userSeq}/{categoryId}")
    public ResponseEntity myIngredientFavListByCategoryId(@PathVariable("userSeq") Long userSeq, @PathVariable("categoryId") EnumIngredientCategory categoryId)  {
        List<SimpleIngredientFavDto> result = new ArrayList<>();
        List<IngredientFav> ingredientFavs = ingredientFavService.myIngredientTotalListByCategoryId(userSeq,categoryId);
        for (IngredientFav idf : ingredientFavs)
            result.add(new SimpleIngredientFavDto(idf));

        return ResponseEntity.ok().body(result);
    }
}
