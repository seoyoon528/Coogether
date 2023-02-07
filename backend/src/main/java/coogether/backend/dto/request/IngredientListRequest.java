package coogether.backend.dto.request;

import lombok.Data;

@Data
public class IngredientListRequest {
    private Long ingredientId;
    private String ingredientAmount;
}
