package coogether.backend.repository.user;

import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumUserCookCategory;
import coogether.backend.dto.UserDto;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepositoryCustom {
    User findByUserId(Long userseq);
    List<User> findByUserName(String name);

}
