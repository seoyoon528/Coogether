package coogether.backend.controller;


import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumSnsType;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import coogether.backend.dto.UserDto;
import coogether.backend.dto.UserUpdateDto;
import coogether.backend.repository.user.UserRepository;
import coogether.backend.service.user.UserService;
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

    private final UserRepository userRepository;
    private final UserService userService;


    @Data
    static class CreateUserRequest {
        private String id;
        private String user_name;
        private String user_nickname;
        private String user_email;
        private String user_img;
        private String user_introduce;
        private EnumUserCookCategory user_cook_category;
        private EnumUserAccountStatus user_account_status;
        private int user_temp;
        LocalDateTime user_create_date;
        LocalDateTime user_last_login_date;
        private EnumSnsType user_sns_type;
    }

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
    @ApiImplicitParam(name = "userId", value = "유저의 식별 코드인 ID", dataType = "String")
    @GetMapping("/user/{userId}")
    public ResponseEntity userInfoById(@PathVariable("userId") String Id) {
        User user = userService.getUserInfoById(Id);
        return ResponseEntity.ok().body(new UserDto(user));
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
    @PatchMapping("/user/update/{userid}")
    public ResponseEntity userUpdate(
            @PathVariable("userid") String id,
            @RequestParam(value = "nickname", required = false) String nickname,
            @RequestParam(value = "img", required = false) String img,
            @RequestParam(value = "introduce", required = false) String introduce,
            @RequestParam(value = "cookCategory", required = false) EnumUserCookCategory userCookCategory
            ) {
        userService.patchUserUpdate(id, nickname, img, introduce, userCookCategory);
        UserUpdateDto userUpdateDto = new UserUpdateDto(nickname,img,introduce,userCookCategory);
        return ResponseEntity.status(HttpStatus.OK).body(userUpdateDto);
    }

    @ApiOperation(value = "유저 회원 탈퇴")
    @ApiImplicitParam(name = "userId", value = "유저의 식별 코드인 ID", dataType = "String")
    @PatchMapping("/user/delete/{userId}")
    public ResponseEntity userDelete(@PathVariable("userId") String Id) {
        userService.patchUserDelete(Id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }
}
