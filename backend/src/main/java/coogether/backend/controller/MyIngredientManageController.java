package coogether.backend.controller;

import coogether.backend.domain.MyIngredientManage;
import coogether.backend.dto.UserUpdateDto;
import coogether.backend.dto.request.MyIngredientManageRequest;
import coogether.backend.dto.simple.SimpleMyIngredientManageDto;
import coogether.backend.service.MyIngredientManageService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"내 냉장고 관리를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class MyIngredientManageController {
    private final MyIngredientManageService myIngredientManageService;

    @ApiOperation(value = "재료 아이디로 내 냉장고에 재료 추가하는 메소드")
    @PostMapping("/myingredient/create/{userSeq}/{ingredientId}")
    public ResponseEntity addMyIngredientByIngredientId(@PathVariable("userSeq") Long userSeq, @PathVariable("ingredientId") int ingredientId) {

        MyIngredientManage result = myIngredientManageService.addMyIngredientByIngredientId(userSeq,ingredientId);

        return ResponseEntity.status(HttpStatus.CREATED).body(new SimpleMyIngredientManageDto(result));
    }

    @ApiOperation(value = "한 번 이상 등록된 재료 내 냉장고에 재등록/제거 * flag : {IN, OUT}")
    @PatchMapping("/myingredient/update/{userSeq}/{ingredientId}")
    public ResponseEntity updateMyIngredientByIngredientId(@PathVariable("userSeq") Long userSeq, @PathVariable("ingredientId") int ingredientId) {

        MyIngredientManage result = myIngredientManageService.updateMyIngredientByIngredientId(userSeq,ingredientId);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
