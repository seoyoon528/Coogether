package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.History;
import coogether.backend.domain.Recipe;
import coogether.backend.domain.User;
import coogether.backend.domain.status.EnumCookingRoomStatus;
import lombok.Data;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class CookingRoomDto {
    private UserDto cookingRoomHost;
    private RecipeDto recipe;
    private List<History> historyList;
    private int cookingRoomId;
    private String cookingRoomName;
    private String cookingRoomImg;

    private LocalDateTime cookingRoomStartTime;
    private EnumCookingRoomStatus cookingRoomStatus;
    private String cookingRoomNotice;

    @QueryProjection
    public CookingRoomDto(CookingRoom cookingRoom) {
        this.cookingRoomHost = new UserDto(cookingRoom.getCookingRoomHost());
        this.recipe = new RecipeDto(cookingRoom.getRecipe());
        this.historyList = cookingRoom.getHistoryList();
        this.cookingRoomId = cookingRoom.getCookingRoomId();
        this.cookingRoomName = cookingRoom.getCookingRoomName();
        this.cookingRoomImg = cookingRoom.getCookingRoomImg();
        this.cookingRoomStartTime = cookingRoom.getCookingRoomStartTime();
        this.cookingRoomStatus = cookingRoom.getCookingRoomStatus();
        this.cookingRoomNotice = cookingRoom.getCookingRoomNotice();
    }

}
