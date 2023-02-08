package coogether.backend.dto;

import coogether.backend.domain.CookingRoom;
import lombok.Data;

@Data
public class CookingRoomCountDto implements Comparable<CookingRoomCountDto> {
    private CookingRoom cookingRoom;
    private int ingredientCnt;

    @Override
    public int compareTo(CookingRoomCountDto o) {
        return o.ingredientCnt - this.ingredientCnt;
    }
}