package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.*;
import coogether.backend.domain.status.EnumCookingRoomStatus;
import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumRecipeType;
import coogether.backend.dto.simple.SimpleRecipeDto;
import coogether.backend.dto.simple.SimpleUserDto;
import lombok.Data;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class CookingRoomDto {
    private SimpleRecipeDto recipe;
//    private List<History> historyList;
    private List<UserJoinListDto> userJoinLists;
    private Long cookingRoomId;
    private String cookingRoomHost;
    private String cookingRoomName;
    private String cookingRoomImg;
    private LocalDateTime cookingRoomStartTime;
    private EnumCookingRoomStatus cookingRoomStatus;
    private String cookingRoomNotice;
    private String cookingHostName;

    //////////////////////////////////////

    // 레시피 주인
//    private String recipeHostName;
//    private EnumRecipeType recipeType;
//    private String recipeName;
//    private String recipeContent;
//    private LocalDateTime recipeCreatedDate;
//    private EnumRecipeCategory recipeCategory;

    @QueryProjection
    public CookingRoomDto(CookingRoom cookingRoom) {

        this.recipe = new SimpleRecipeDto(cookingRoom.getRecipe());
//        this.historyList = cookingRoom.getHistoryList();
        this.userJoinLists = cookingRoom.getUserJoinLists()
                .stream().map(x-> new UserJoinListDto(x)).collect(Collectors.toList());
        this.cookingRoomId = cookingRoom.getCookingRoomId();
        this.cookingRoomHost = cookingRoom.getCookingRoomHost().getUserNickname();
        this.cookingRoomName = cookingRoom.getCookingRoomName();
        this.cookingRoomImg = cookingRoom.getCookingRoomImg();
        this.cookingRoomStartTime = cookingRoom.getCookingRoomStartTime();
        this.cookingRoomStatus = cookingRoom.getCookingRoomStatus();
        this.cookingRoomNotice = cookingRoom.getCookingRoomNotice();
        this.cookingHostName = cookingRoom.getCookingRoomHost().getUserNickname();

//        this.recipeHostName = cookingRoom.getRecipe().getUser().getUserNickname();
//        this.recipeType = cookingRoom.getRecipe().getRecipeType();
//        this.recipeName = cookingRoom.getRecipe().getRecipeName();
//        this.recipeContent = cookingRoom.getRecipe().getRecipeContent();
//        this.recipeCreatedDate = cookingRoom.getRecipe().getRecipeCreatedDate();
//        this.recipeCategory = cookingRoom.getRecipe().getRecipeCategory();
    }

}
