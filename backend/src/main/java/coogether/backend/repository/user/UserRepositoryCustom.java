package coogether.backend.repository.user;

import coogether.backend.domain.User;
import coogether.backend.dto.UserDto;

public interface UserRepositoryCustom {
    public User findByUserId(String id);
}
