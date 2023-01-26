package coogether.backend.controller;


import coogether.backend.domain.User;
import coogether.backend.dto.UserDto;
import coogether.backend.repository.user.UserRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@Api(tags = {"유저관련 정보를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;


    @ApiOperation(value = "유저 전체 목록을 반환하는 메소드")
    @GetMapping("/user/list")
    public List<User> userList()
    {
        return userRepository.findAll();
    }


    @ApiOperation(value = "유저 1명의 상세 정보를 반환하는 메소드")
    @ApiImplicitParam(name = "userId", value = "유저의 식별 코드인 ID", dataType = "String")
    @GetMapping("/user/{userId}")
    public User userInfoById(@PathVariable("userId") String Id) {
        return userRepository.findByUserId(Id);
    }

    @ApiOperation(value = "유저 이름으로 유저 정보 검색")
    @ApiImplicitParam(name = "userName", value = "유저 이름", dataType = "String")
    @GetMapping("/user/search/{userName}")
    public List<User> userInfoByName(@PathVariable("userName") String name) {
        return userRepository.findByUserName(name);
    }
}
