package coogether.backend.controller;


import coogether.backend.domain.CookingRoom;
import coogether.backend.dto.CookingRoomCountDto;
import coogether.backend.dto.CookingRoomDto;
import coogether.backend.dto.request.CookingRoomRequest;
import coogether.backend.service.CookingRoomService;
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
import java.util.List;


@Api(tags = {"쿠킹룸 정보를 제공하는 Controller (현재 시간 이후의 방 정보만 제공)"})
@RestController
@RequiredArgsConstructor
public class CookingRoomController {

    private final CookingRoomService cookingRoomService;
    private final S3Service s3Service;

    @ApiOperation(value = "요리방 생성 (대기방)", produces = "multipart/form-data")
    @PostMapping(value ="/room/create/{userSeq}/{recipeId}",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addCookingRoom(@RequestBody CookingRoomRequest cookingRoomRequest, @RequestPart(value="file",required = false) MultipartFile multipartFile, @PathVariable("userSeq") Long userSeq
            , @PathVariable("recipeId") Long recipeId) throws IOException {

        String url = null;
        if (multipartFile != null) {
            url = s3Service.uploadFile(multipartFile, "cookingRoom");
        }
        System.out.println("url = " + url);
        CookingRoom cookingRoom = cookingRoomService.addCookingRoom(cookingRoomRequest, userSeq, recipeId, url);

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

    @ApiOperation(value = "카테고리별 요리방 추천")
    @GetMapping("/room/list/{category}/{userSeq}")
    public ResponseEntity roomListByRecommend(@PathVariable("category") int category, @PathVariable("userSeq") Long userSeq) {
        List<CookingRoom> cookingRoomList;

        switch(category) {
            // 0: 내 재료 기반 추천, 1: 시작시간 임박순 추천, 2: 사용자 선호 요리 기반 추천
            case 0:
                List<CookingRoomCountDto> cookingRoomDtos = cookingRoomService.getRecommendedRoomListByMyIngredient(userSeq);
                return ResponseEntity.status(HttpStatus.OK).body(cookingRoomDtos);

            case 1:
                cookingRoomList = cookingRoomService.getRecommendedRoomListByStartTime();
                return ResponseEntity.status(HttpStatus.OK).body(cookingRoomList);

            case 2:
                cookingRoomList = cookingRoomService.getRecommendedRoomListByUserCook(userSeq);
                return ResponseEntity.status(HttpStatus.OK).body(cookingRoomList);

            default:
                return null;
        }
    }
}