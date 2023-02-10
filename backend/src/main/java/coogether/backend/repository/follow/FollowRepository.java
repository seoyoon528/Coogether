package coogether.backend.repository.follow;

import coogether.backend.domain.Follow;
import coogether.backend.domain.Ingredient;
import coogether.backend.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FollowRepository extends JpaRepository<Follow, Long> {

    @Query("select f from Follow f where f.followerUser.userSeq = :followerId and f.followingUser.userSeq = :followingId ")
    Follow findByFollowId(@Param("followerId") Long followerId, @Param("followingId") Long followingId);

    @Query("select f from Follow f where f.followerUser.userSeq = :userSeq ")
    List<Follow> findFollowerByUserSeq(@Param("userSeq") Long userSeq);

    @Query("select f from Follow f where f.followingUser.userSeq = :userSeq ")
    List<Follow> findFollowingByUserSeq(@Param("userSeq") Long userSeq);
}
