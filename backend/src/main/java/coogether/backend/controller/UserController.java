package coogether.backend.controller;


import coogether.backend.domain.Follow;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumSnsType;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import coogether.backend.dto.*;
import coogether.backend.dto.simple.SimpleUserDto;
import coogether.backend.repository.user.UserRepository;
import coogether.backend.service.FollowService;
import coogether.backend.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Api(tags = {"유저관련 정보를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final FollowService followService;

    @ApiOperation(value = "유저 전체 목록을 반환하는 메소드")
    @GetMapping("/user/list")
    public ResponseEntity userList() {
        List<UserDto> result = new ArrayList<>();
        List<User> user = userService.getUserList();
        for (User u : user)
            result.add(new UserDto(u));

        return ResponseEntity.ok().body(result);
    }


    @ApiOperation(value = "유저 1명의 상세 정보를 반환하는 메소드")
    @ApiImplicitParam(name = "userSeq", value = "유저의 식별 코드", dataType = "Long" , example="1")
    @GetMapping("/user/{userSeq}")
    public ResponseEntity userInfoById(@PathVariable("userSeq") Long userSeq) {
        User user = userService.getUserInfoById(userSeq);

        // 유저 seq로 팔로워 조회
        List<FollowerDto> followerDtoList = new ArrayList<>();
        List<Follow> follow1 = followService.getFollowerById(userSeq);
        for (Follow f : follow1)
            followerDtoList.add(new FollowerDto(f));

        // 유저 seq로 팔로잉 조회
        List<FollowingDto> followingDtoList = new ArrayList<>();
        List<Follow> follow2 = followService.getFollowingById(userSeq);
        for (Follow f : follow2)
            followingDtoList.add(new FollowingDto(f));

        return ResponseEntity.ok().body(new UserDto(user,followerDtoList,followingDtoList));
    }

    @ApiOperation(value = "유저 이름으로 유저 정보 검색")
    @ApiImplicitParam(name = "userName", value = "유저 이름", dataType = "String")
    @GetMapping("/user/search/{userName}")
    public ResponseEntity userInfoByName(@PathVariable("userName") String name) {
        List<UserDto> result = new ArrayList<>();
        List<User> user = userService.getUserListByName(name);
        for (User u : user)
            result.add(new UserDto(u));
        return ResponseEntity.ok().body(result);
    }

    @ApiOperation(value = "유저 정보 수정")
    @PatchMapping("/user/update/{userSeq}")
    public ResponseEntity userUpdate(
            @PathVariable("userSeq") Long userSeq,
            @RequestParam(value = "nickname", required = false) String nickname,
            @RequestParam(value = "img", required = false) String img,
            @RequestParam(value = "introduce", required = false) String introduce,
            @RequestParam(value = "cookCategory", required = false) EnumUserCookCategory userCookCategory
            ) {
        userService.patchUserUpdate(userSeq, nickname, img, introduce, userCookCategory);
        UserUpdateDto userUpdateDto = new UserUpdateDto(nickname,img,introduce,userCookCategory);
        System.out.println("userUpdateDto = " + userUpdateDto);
        return ResponseEntity.status(HttpStatus.OK).body(userUpdateDto);
    }

    @ApiOperation(value = "유저 회원 탈퇴")
    @ApiImplicitParam(name = "userSeq", value = "유저의 식별 코드", dataType = "Long", example="1")
    @PatchMapping("/user/delete/{userSeq}")
    public ResponseEntity userDelete(@PathVariable("userSeq") Long userSeq) {
        userService.patchUserDelete(userSeq);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

    @ApiOperation(value = "유저 랭킹 온도순으로 반환")
    @GetMapping("/rank")
    public ResponseEntity userRank() {
        List<UserRankDto> result = new ArrayList<>();
        List<User> user = userService.getUserRank();
        for (User u : user)
            result.add(new UserRankDto(u));
        return ResponseEntity.ok().body(result);
    }
}
