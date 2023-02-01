package coogether.backend.controller;

import coogether.backend.domain.IngredientFav;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.status.EnumIngredientCategory;
import coogether.backend.dto.IngredientFavDto;
import coogether.backend.dto.MyIngredientManageDto;
import coogether.backend.dto.request.RecipeRequest;
import coogether.backend.dto.simple.SimpleIngredientFavDto;
import coogether.backend.service.IngredientFavService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(tags = {"즐겨찾기 관리를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class IngredientFavController {
    private final IngredientFavService ingredientFavService;

    @ApiOperation(value = "즐겨찾기에 재료 추가")
    @PostMapping("/myIngredient/create/fav/{userSeq}/{ingredientId}")
    public ResponseEntity addFavIngredient(@PathVariable("userSeq") Long userSeq, @PathVariable("ingredientId") int ingredientId)  {

        ingredientFavService.addFavIngredient(userSeq,ingredientId);

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "내 즐겨찾기 재료 목록 반환")
    @GetMapping("/myIngredient/list/fav/{userSeq}")
    public ResponseEntity myIngredientFavListByCategoryId(@PathVariable("userSeq") Long userSeq)  {
        List<SimpleIngredientFavDto> result = new ArrayList<>();
        List<IngredientFav> ingredientFavs = ingredientFavService.myIngredientTotalListByCategoryId(userSeq);
        for (IngredientFav idf : ingredientFavs)
            result.add(new SimpleIngredientFavDto(idf));

        return ResponseEntity.ok().body(result);
    }
}
