package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.Ingredient;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumMyIngredientManageFlag;
import lombok.Data;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Data
public class MyIngredientManageDto {
    private int myIngredientManageId;

    private UserDto user;
    private IngredientDto ingredient;

    private LocalDateTime myIngredientManageDate;
    private EnumMyIngredientManageFlag myIngredientManageFlag;

    @QueryProjection
    public MyIngredientManageDto(MyIngredientManage myIngredientManage) {
        this.myIngredientManageId = myIngredientManage.getMyIngredientManageId();

        this.user = new UserDto(myIngredientManage.getUser());
        this.ingredient = new IngredientDto(myIngredientManage.getIngredient());

        this.myIngredientManageDate = myIngredientManage.getMyIngredientManageDate();
        this.myIngredientManageFlag = myIngredientManage.getMyIngredientManageFlag();
    }
}
