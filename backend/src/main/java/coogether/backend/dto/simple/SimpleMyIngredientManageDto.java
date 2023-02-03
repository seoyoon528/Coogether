package coogether.backend.dto.simple;

import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.MyIngredientManage;
import coogether.backend.domain.status.EnumMyIngredientManageFlag;
import coogether.backend.dto.IngredientDto;
import coogether.backend.dto.UserDto;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SimpleMyIngredientManageDto {
    private Long myIngredientManageId;
    private LocalDateTime myIngredientManageDate;
    private EnumMyIngredientManageFlag myIngredientManageFlag;

    @QueryProjection
    public SimpleMyIngredientManageDto(MyIngredientManage myIngredientManage) {
        this.myIngredientManageId = myIngredientManage.getMyIngredientManageId();
        this.myIngredientManageDate = myIngredientManage.getMyIngredientManageDate();
        this.myIngredientManageFlag = myIngredientManage.getMyIngredientManageFlag();
    }
}
