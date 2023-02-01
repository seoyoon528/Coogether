package coogether.backend.controller;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.IngredientList;
import coogether.backend.dto.CookingRoomDto;
import coogether.backend.dto.IngredientListDto;
import coogether.backend.service.CookingRoomService;
import coogether.backend.service.IngredientListService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Api(tags = {"재료 리스트 정보를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class IngredientListController {
    private final IngredientListService ingredientListService;


    @ApiOperation(value = "레시피 ID로 재료 리스트를 반환하는 메소드")
    @GetMapping("/ingredient/list/{recipeId}")
    public ResponseEntity ingredientListByRecipeName(@PathVariable("recipeId") int recipeId)  {
        List<IngredientListDto> result = new ArrayList<>();
        List<IngredientList> ingredientLists = ingredientListService.getIngredientListByRecipeName(recipeId);
        for (IngredientList il : ingredientLists)
            result.add(new IngredientListDto(il));

        return ResponseEntity.ok().body(result);
    }
}
