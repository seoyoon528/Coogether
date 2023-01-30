package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.History;
import coogether.backend.domain.User;
import lombok.Data;

import java.util.List;

@Data
public class HistoryDto {


    private int historyId;
    private String historyImg;

    ///////////////////////////
    private UserDto user;

    @JsonIgnore
    private CookingRoomDto cookingRoom;

    @QueryProjection
    public HistoryDto(History history){
        this.historyId = history.getHistoryId();
        this.historyImg = history.getHistoryImg();
        this.user = new UserDto(history.getUser());
        this.cookingRoom =  new CookingRoomDto(history.getCookingRoom());
    }


}
