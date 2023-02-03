package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.Ingredient;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumMyIngredientManageFlag;
import coogether.backend.dto.simple.SimpleIngredientDto;
import coogether.backend.dto.simple.SimpleUserDto;
import lombok.Data;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Data
public class MyIngredientManageDto {
    private Long myIngredientManageId;

//    private SimpleUserDto user;
    private SimpleIngredientDto ingredient;

    private LocalDateTime myIngredientManageDate;
    private EnumMyIngredientManageFlag myIngredientManageFlag;

    // 내 냉장고 관리용 추가 정보
    private String userName;

    @QueryProjection
    public MyIngredientManageDto(MyIngredientManage myIngredientManage) {
        this.myIngredientManageId = myIngredientManage.getMyIngredientManageId();

//        this.user = new SimpleUserDto(myIngredientManage.getUser());
        this.ingredient = new SimpleIngredientDto(myIngredientManage.getIngredient());

        this.myIngredientManageDate = myIngredientManage.getMyIngredientManageDate();
        this.myIngredientManageFlag = myIngredientManage.getMyIngredientManageFlag();

        ///////////
        this.userName = myIngredientManage.getUser().getUserName();
    }


}
