package coogether.backend.controller;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.Recipe;
import coogether.backend.dto.CookingRoomDto;
import coogether.backend.dto.RecipeDto;
import coogether.backend.dto.request.RecipeRequest;
import coogether.backend.dto.simple.SimpleRecipeDto;
import coogether.backend.repository.cookingroom.CookingRoomRepository;
import coogether.backend.service.RecipeService;
import coogether.backend.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(tags = {"레시피 정보를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;

    @ApiOperation(value = "사용자 커스텀 레시피 등록")
    @PostMapping("/recipe/create/{userSeq}")
    public ResponseEntity addCustomRecipe(@RequestBody RecipeRequest recipeRequest, @PathVariable("userSeq") Long userSeq)  {

        recipeService.addCustomRecipe(recipeRequest,userSeq);

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }
    
//    @ApiOperation(value = "레시피 목록 전체를 반환하는 메소드")
//    @GetMapping("/recipe/list")
//    public ResponseEntity recipeListAll() {
//        List<SimpleRecipeDto> result = new ArrayList<>();
//        List<Recipe> recipes = recipeService.getRecipeAll();
//        for (Recipe r : recipes)
//            result.add(new SimpleRecipeDto(r));
//        return ResponseEntity.ok().body(result);
//    }

    @ApiOperation(value = "레시피 목록 전체를 반환하는 메소드 (페이징가능 size, page)")
    @GetMapping("/recipe/list")
    public Page<SimpleRecipeDto> recipeListAll(Pageable pageable) {

        return recipeService.getRecipeAllPaging(pageable);
    }

//    @ApiOperation(value = "레시피 이름으로 레시피 목록 전체를 반환하는 메소드")
//    @GetMapping("/recipe/search/{recipeName}")
//    public ResponseEntity recipeListByRecipeName(@PathVariable("recipeName") String recipeName)  {
//        List<SimpleRecipeDto> result = new ArrayList<>();
//        List<Recipe> recipes = recipeService.getRecipeListByRecipeName(recipeName);
//        for (Recipe r : recipes)
//            result.add(new SimpleRecipeDto(r));
//        return ResponseEntity.ok().body(result);
//    }

    @ApiOperation(value = "레시피 이름으로 레시피 목록 전체를 반환하는 메소드 (페이징가능 size, page)")
    @GetMapping("/recipe/search/{recipeName}")
    public Page<SimpleRecipeDto> recipeListByRecipeName(@PathVariable("recipeName") String recipeName,Pageable pageable)  {
        return recipeService.getRecipeListPagingByRecipeName(recipeName,pageable);
    }
}
