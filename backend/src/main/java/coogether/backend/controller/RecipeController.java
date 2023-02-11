package coogether.backend.controller;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.Recipe;
import coogether.backend.dto.CookingRoomDto;
import coogether.backend.dto.RecipeDto;
import coogether.backend.dto.request.RecipeRequest;
import coogether.backend.dto.simple.SimpleRecipeDto;
import coogether.backend.repository.cookingroom.CookingRoomRepository;
import coogether.backend.service.IngredientListService;
import coogether.backend.service.RecipeService;
import coogether.backend.service.RecipeStepService;
import coogether.backend.service.UserService;
import coogether.backend.service.file.S3Service;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Api(tags = {"레시피 정보를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class RecipeController {
    private final RecipeService recipeService;
    private final RecipeStepService recipeStepService;
    private final IngredientListService ingredientListService;
    private final S3Service s3Service;

    @ApiOperation(value = "사용자 커스텀 레시피 등록", produces = "multipart/form-data")
    @PostMapping(value = "/recipe/create/{userSeq}",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addCustomRecipe( @RequestPart RecipeRequest recipeRequest,@RequestPart(value="file",required = false) MultipartFile multipartFile, @PathVariable("userSeq") Long userSeq) throws IOException {

        String url = null;
        if (multipartFile != null) {
            url = s3Service.uploadFile(multipartFile, "customRecipe");
        }
        System.out.println("url = " + url);
        Recipe customRecipe = recipeService.addCustomRecipe(recipeRequest, userSeq, url);

        if (customRecipe != null) {
            ingredientListService.addIngredientList(customRecipe.getRecipeId(), recipeRequest.getIngredientListRequest());
            recipeStepService.addRecipeStep(customRecipe.getRecipeId(), recipeRequest.getRecipeStepRequest());
            return ResponseEntity.status(HttpStatus.OK).body(true);
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(false);
        }

    }

    @ApiOperation(value = "레시피 목록 전체를 반환하는 메소드")
    @GetMapping("/recipe/list/total")
    public ResponseEntity recipeListAll() {
        List<SimpleRecipeDto> result = new ArrayList<>();
        List<Recipe> recipes = recipeService.getRecipeAll();
        for (Recipe r : recipes)
            result.add(new SimpleRecipeDto(r));
        return ResponseEntity.ok().body(result);
    }

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
    public Page<SimpleRecipeDto> recipeListByRecipeName(@PathVariable("recipeName") String recipeName, Pageable pageable) {
        return recipeService.getRecipeListPagingByRecipeName(recipeName, pageable);
    }

    @ApiOperation(value = "사용자 아이디로 본인의 커스텀 레시피 목록 반환")
    @GetMapping("/recipe/list/{userSeq}")
    public ResponseEntity recipeListUser(@PathVariable("userSeq") Long userSeq) {
        List<SimpleRecipeDto> result = recipeService.getRecipeListUser(userSeq);
        return ResponseEntity.ok().body(result);
    }

    @ApiOperation(value = "사용자 커스텀 레시피를 반환하는 메소드 (페이징가능 size, page)")
    @GetMapping("/recipe/list/custom")
    public Page<SimpleRecipeDto> recipeListCustom(Pageable pageable) {

        return recipeService.getRecipeCustomPaging(pageable);
    }

    @ApiOperation(value = "백종원 레시피를 반환하는 메소드 (페이징가능 size, page)")
    @GetMapping("/recipe/list/baek")
    public Page<SimpleRecipeDto> recipeListBaek(Pageable pageable) {

        return recipeService.getRecipeBaekPaging(pageable);
    }

    @ApiOperation(value = "레시피 이름으로 커스텀 레시피 목록 전체를 반환하는 메소드 (페이징가능 size, page)")
    @GetMapping("/recipe/search/custom/{recipeName}")
    public Page<SimpleRecipeDto> recipeCustomListByRecipeName(@PathVariable("recipeName") String recipeName, Pageable pageable) {
        return recipeService.getRecipeCustomListPagingByRecipeName(recipeName, pageable);
    }

    @ApiOperation(value = "레시피 이름으로 백종원 레시피 목록 전체를 반환하는 메소드 (페이징가능 size, page)")
    @GetMapping("/recipe/search/baek/{recipeName}")
    public Page<SimpleRecipeDto> recipeBaekListByRecipeName(@PathVariable("recipeName") String recipeName, Pageable pageable) {
        return recipeService.getRecipeBaekListPagingByRecipeName(recipeName, pageable);
    }
}
