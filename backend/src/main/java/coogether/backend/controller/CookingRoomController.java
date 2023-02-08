package coogether.backend.controller;


import coogether.backend.domain.CookingRoom;
import coogether.backend.dto.CookingRoomDto;
import coogether.backend.dto.request.CookingRoomRequest;
import coogether.backend.service.CookingRoomService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Api(tags = {"쿠킹룸 정보를 제공하는 Controller (현재 시간 이후의 방 정보만 제공)"})
@RestController
@RequiredArgsConstructor
public class CookingRoomController {

    private final CookingRoomService cookingRoomService;

    @ApiOperation(value = "요리방 생성 (대기방)")
    @PostMapping("/room/create/{userSeq}/{recipeId}")
    public ResponseEntity addCookingRoom(@RequestBody CookingRoomRequest cookingRoomRequest, @PathVariable("userSeq") Long userSeq
            , @PathVariable("recipeId") Long recipeId) {

        CookingRoom cookingRoom = cookingRoomService.addCookingRoom(cookingRoomRequest, userSeq, recipeId);

        if (cookingRoom != null) {
            Boolean check = cookingRoomService.addUserJoin(userSeq, cookingRoom.getCookingRoomId());
            if (check) {
                return ResponseEntity.status(HttpStatus.OK).body(cookingRoom.getCookingRoomId());
            }
        }

        return ResponseEntity.status(HttpStatus.OK).body(false);
    }

    @ApiOperation(value = "요리방 입장 (대기방)")
    @GetMapping("/room/{cookingRoomId}/{userSeq}")
    public ResponseEntity addCookingRoom(@PathVariable("cookingRoomId") Long cookingRoomId, @PathVariable("userSeq") Long userSeq) {

        Boolean check = cookingRoomService.addUserJoin(userSeq, cookingRoomId);
        System.out.println("check = " + check);
        CookingRoom cookingRoom = new CookingRoom();
        if (check) {
            cookingRoom = cookingRoomService.getCookingRoomByCookingRoomId(cookingRoomId);
            return ResponseEntity.ok().body(new CookingRoomDto(cookingRoom));
        }
        return ResponseEntity.ok().body(false);
    }

    @ApiOperation(value = "요리방 목록 전체를 반환하는 메소드 (페이징가능 size, page)")
    @GetMapping("/room/list")
    public Page<CookingRoomDto> recipeListByRecipeName(Pageable pageable) {
        return cookingRoomService.getCookingRoomListPaging(pageable);
    }

    @ApiOperation(value = "레시피 이름으로 요리방 목록 전체를 반환하는 메소드 (페이징가능 size, page)")
    @GetMapping("/room/search/{recipeName}")
    public Page<CookingRoomDto> roomListByRecipeName(@PathVariable("recipeName") String recipeName, Pageable pageable) {

        return cookingRoomService.roomListByRecipeNamePaging(recipeName, pageable);
    }

    @ApiOperation(value = "요리방 ID로 요리방 정보를 반환하는 메소드")
    @GetMapping("/room/{cookingRoomId}")
    public ResponseEntity roomInfoByCookingRoomId(@PathVariable("cookingRoomId") Long cookingRoomId) {
        CookingRoom cookingRoom = cookingRoomService.getCookingRoomByCookingRoomId(cookingRoomId);
        return ResponseEntity.ok().body(new CookingRoomDto(cookingRoom));
    }


    @ApiOperation(value = "요리방 퇴장")
    @DeleteMapping("/room/{cookingRoomId}/{userSeq}")
    public ResponseEntity roomInfoByCookingRoomId(@PathVariable("cookingRoomId") Long cookingRoomId, @PathVariable("userSeq") Long userSeq) {
        cookingRoomService.deleteCookingRoomByCookingRoomId(cookingRoomId,userSeq);
        return ResponseEntity.status(HttpStatus.OK).body(true);
    }
}