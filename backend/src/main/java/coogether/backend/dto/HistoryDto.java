package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.History;
import coogether.backend.domain.User;
import coogether.backend.dto.simple.SimpleCookingRoomDto;
import coogether.backend.dto.simple.SimpleUserDto;
import lombok.Data;

import java.util.List;

@Data
public class HistoryDto {


    private int historyId;
    private String historyImg;

    ///////////////////////////
//    private SimpleUserDto user;
    private CookingRoomDto cookingRoom;

    @QueryProjection
    public HistoryDto(History history){
        this.historyId = history.getHistoryId();
        this.historyImg = history.getHistoryImg();
//        this.user = new SimpleUserDto(history.getUser());
        this.cookingRoom =  new CookingRoomDto(history.getCookingRoom());
    }


}
