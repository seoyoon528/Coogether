package coogether.backend.controller;

import coogether.backend.domain.Follow;
import coogether.backend.dto.FollowerDto;
import coogether.backend.dto.FollowingDto;
import coogether.backend.service.FollowService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

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

    @ApiOperation(value = "팔로워 조회")
    @GetMapping("/follow/follower/{userSeq}")
    public ResponseEntity getFollowerById(@PathVariable("userSeq") Long userSeq)  {
        List<FollowerDto> result = new ArrayList<>();
        List<Follow> follows = followService.getFollowerById(userSeq);
        for (Follow f : follows)
            result.add(new FollowerDto(f));

        return ResponseEntity.ok().body(result);
    }

    @ApiOperation(value = "팔로잉 조회")
    @GetMapping("/follow/following/{userSeq}")
    public ResponseEntity getFollowingById(@PathVariable("userSeq") Long userSeq)  {
        List<FollowingDto> result = new ArrayList<>();
        List<Follow> follows = followService.getFollowingById(userSeq);
        for (Follow f : follows)
            result.add(new FollowingDto(f));

        return ResponseEntity.ok().body(result);
    }
}
