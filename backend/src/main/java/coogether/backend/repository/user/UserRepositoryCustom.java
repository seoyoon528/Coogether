package coogether.backend.repository.user;

import coogether.backend.domain.User;
import coogether.backend.dto.UserDto;

import java.util.List;

public interface UserRepositoryCustom {
    public User findByUserId(String id);
    public List<User> findByUserName(String name);
}
