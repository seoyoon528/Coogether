package coogether.backend.repository.user;

import coogether.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long>, UserRepositoryCustom {

    @Modifying(flushAutomatically = true, clearAutomatically = true)
    @Query("update User u set u.userAccountStatus = 'INACTIVE' where u.userSeq = :userseq")
    void deleteByUserId(@Param("userseq") Long userseq);
}
