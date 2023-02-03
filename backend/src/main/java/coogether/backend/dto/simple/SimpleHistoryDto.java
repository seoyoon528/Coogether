package coogether.backend.dto.simple;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryProjection;
import coogether.backend.domain.History;
import coogether.backend.dto.CookingRoomDto;
import lombok.Data;

@Data
public class SimpleHistoryDto {
    private Long historyId;
    private String historyImg;

    @QueryProjection
    public SimpleHistoryDto(History history){
        this.historyId = history.getHistoryId();
        this.historyImg = history.getHistoryImg();

    }
}
