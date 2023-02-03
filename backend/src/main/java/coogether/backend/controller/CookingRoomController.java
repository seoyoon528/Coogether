package coogether.backend.controller;


import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.User;
import coogether.backend.dto.CookingRoomDto;
import coogether.backend.dto.UserDto;
import coogether.backend.dto.simple.SimpleRecipeDto;
import coogether.backend.service.CookingRoomService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Api(tags = {"쿠킹룸 정보를 제공하는 Controller (현재 시간 이후의 방 정보만 제공)"})
@RestController
@RequiredArgsConstructor
public class CookingRoomController {

    private final CookingRoomService cookingRoomService;

//    @ApiOperation(value = "요리방 목록 전체를 반환하는 메소드")
//    @GetMapping("/room/list")
//    public ResponseEntity roomListAll() {
//        List<CookingRoomDto> result = new ArrayList<>();
//        List<CookingRoom> cookingRooms = cookingRoomService.getCookingRoomList();
//        for (CookingRoom cr : cookingRooms)
//            result.add(new CookingRoomDto(cr));
//
//        return ResponseEntity.ok().body(result);
//    }
    @ApiOperation(value = "요리방 목록 전체를 반환하는 메소드 (페이징가능 size, page)")
    @GetMapping("/room/list")
    public Page<CookingRoomDto> recipeListByRecipeName(Pageable pageable)  {
        return cookingRoomService.getCookingRoomListPaging(pageable);
    }

//    @ApiOperation(value = "레시피 이름으로 요리방 목록 전체를 반환하는 메소드")
//    @GetMapping("/room/search/{recipeName}")
//    public ResponseEntity roomListByRecipeName(@PathVariable("recipeName") String recipeName)  {
//        List<CookingRoomDto> result = new ArrayList<>();
//        List<CookingRoom> cookingRooms = cookingRoomService.getCookingRoomListByRecipeName(recipeName);
//        for (CookingRoom cr : cookingRooms)
//            result.add(new CookingRoomDto(cr));
//
//        return ResponseEntity.ok().body(result);
//    }
    @ApiOperation(value = "레시피 이름으로 요리방 목록 전체를 반환하는 메소드 (페이징가능 size, page)")
    @GetMapping("/room/search/{recipeName}")
    public Page<CookingRoomDto> roomListByRecipeName(@PathVariable("recipeName") String recipeName, Pageable pageable)  {

        return cookingRoomService.roomListByRecipeNamePaging(recipeName, pageable);
    }
    @ApiOperation(value = "요리방 ID로 요리방 정보를 반환하는 메소드")
    @GetMapping("/room/{cookingRoomId}")
    public ResponseEntity roomInfoByCookingRoomId(@PathVariable("cookingRoomId") Long cookingRoomId)  {
        CookingRoom cookingRoom = cookingRoomService.getCookingRoomByCookingRoomId(cookingRoomId);
        return ResponseEntity.ok().body(new CookingRoomDto(cookingRoom));
    }


}