package coogether.backend.repository.user;

import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumUserCookCategory;
import coogether.backend.dto.UserDto;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepositoryCustom {
    public User findByUserId(String id);
    public List<User> findByUserName(String name);


    @Modifying(flushAutomatically = true, clearAutomatically = true)
    @Query("update User u set u.userAccountStatus = 'INACTIVE' where u.userId = :Id")
    void deleteByUserId(String Id);
}
