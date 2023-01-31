package coogether.backend.dto.request;

import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.status.EnumMyIngredientManageFlag;
import coogether.backend.dto.simple.SimpleIngredientDto;
import coogether.backend.dto.simple.SimpleUserDto;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MyIngredientManageRequest {

    //private int myIngredientManageId;
//    private SimpleUserDto user;
//    private SimpleIngredientDto ingredient;
    private Long userSeq;
    private int ingredientId;
    private LocalDateTime myIngredientManageDate;
    private EnumMyIngredientManageFlag myIngredientManageFlag;

    public MyIngredientManageRequest(MyIngredientManage myIngredientManage) {
        //this.myIngredientManageId = myIngredientManage.getMyIngredientManageId();
//        this.user = new SimpleUserDto(myIngredientManage.getUser());
//        this.ingredient = new SimpleIngredientDto(myIngredientManage.getIngredient());
        this.userSeq = myIngredientManage.getUser().getUserSeq();
        this.ingredientId = myIngredientManage.getIngredient().getIngredientId();
        this.myIngredientManageDate = myIngredientManage.getMyIngredientManageDate();
        this.myIngredientManageFlag = myIngredientManage.getMyIngredientManageFlag();
    }
}
