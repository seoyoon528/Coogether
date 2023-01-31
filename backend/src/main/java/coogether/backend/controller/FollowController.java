package coogether.backend.controller;

import coogether.backend.domain.Follow;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.service.FollowService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = {"팔로우 관리를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class FollowController {

    private final FollowService followService;
    @ApiOperation(value = "팔로우 추가/삭제 메소드  * flag : {CONNECT, DISCONNECT}")
    @PatchMapping("/follow/{followerId}/{followingId}")
    public ResponseEntity updateFollowById(@PathVariable("followerId") Long followerId, @PathVariable("followingId") Long followingId) {

        Follow result = followService.updateFollowById(followerId,followingId);

        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
