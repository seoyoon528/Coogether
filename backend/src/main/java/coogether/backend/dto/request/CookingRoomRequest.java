package coogether.backend.dto.request;

import coogether.backend.domain.status.EnumCookingRoomStatus;
import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumRecipeType;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;

@Data
public class CookingRoomRequest {

    private String cookingRoomName;
    private String cookingRoomImg;
    private String RecipeName;
    private LocalDateTime cookingRoomStartTime;
    private String cookingRoomNotice;
}
