package coogether.backend.controller;


import coogether.backend.domain.History;
import coogether.backend.dto.HistoryDto;
import coogether.backend.dto.UserDto;
import coogether.backend.service.HistoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Api(tags = {"히스토리 정보를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class HistoryController {

    private final HistoryService historyService;

    @ApiOperation(value = "유저 식별 정보로 히스토리 리스트를 반환")
    @ApiImplicitParam(name = "userSeq", value = "유저의 식별 코드", dataType = "Long")
    @GetMapping("/history/{userSeq}")
    public ResponseEntity HistoryListById(@PathVariable("userSeq") Long userSeq) {
        List<History> historyList = historyService.getHistoryByUserId(userSeq);
        List<HistoryDto> result = historyList.stream().map(x -> new HistoryDto(x)).collect(Collectors.toList());
        return ResponseEntity.ok().body(result);
    }



//    @ApiOperation(value = "유저 ID와 요리방 ID로 히스토리 상세 정보를 반환")
//    @ApiImplicitParams({@ApiImplicitParam(name = "userId", value = "유저의 식별 코드인 ID", dataType = "String")
//            ,@ApiImplicitParam(name = "cookingRoomId", value = "쿠킹룸 ID", dataType = "int")})
//    @GetMapping("/history/{userId}/{cookingRoomId}")
//    public ResponseEntity HistoryInfoByCookingRoomId(@PathVariable("userId") String userId, @PathVariable("cookingRoomId") int cookingRoomId) {
//        return historyService.getHistoryInfoByCookingRoomId(userId, cookingRoomId);
//    }

}
