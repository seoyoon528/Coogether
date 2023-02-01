package coogether.backend.dto;


import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.User;
import lombok.Data;

@Data
public class UserReportDto {

    private Long userSeq;
    private String userNickname;

    @QueryProjection
    public UserReportDto(User user){
        this.userSeq = user.getUserSeq();
        this.userNickname = user.getUserNickname();
    }

}
