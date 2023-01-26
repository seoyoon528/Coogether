package coogether.backend.dto;


import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.status.EnumSnsType;
import coogether.backend.domain.status.EnumUserAccountStatus;
import coogether.backend.domain.status.EnumUserCookCategory;
import lombok.Data;

import javax.persistence.Column;
import java.time.LocalDateTime;

@Data
public class UserDto {

    private String id;
    private String user_name;
    private String user_nickname;
    private String user_email;
    private String user_img;
    private String user_introduce;
    private EnumUserCookCategory user_cook_category;
    private EnumUserAccountStatus user_account_status;
    private int user_temp;
    private LocalDateTime user_create_date;
    private LocalDateTime user_last_login_date;
    private EnumSnsType user_sns_type;

    public UserDto() {
    }


    @QueryProjection
    public UserDto(String id, String user_name, String user_nickname, String user_email, String user_img, String user_introduce, EnumUserCookCategory user_cook_category, EnumUserAccountStatus user_account_status, int user_temp, LocalDateTime user_create_date, LocalDateTime user_last_login_date, EnumSnsType user_sns_type) {
        this.id = id;
        this.user_name = user_name;
        this.user_nickname = user_nickname;
        this.user_email = user_email;
        this.user_img = user_img;
        this.user_introduce = user_introduce;
        this.user_cook_category = user_cook_category;
        this.user_account_status = user_account_status;
        this.user_temp = user_temp;
        this.user_create_date = user_create_date;
        this.user_last_login_date = user_last_login_date;
        this.user_sns_type = user_sns_type;
    }
}
