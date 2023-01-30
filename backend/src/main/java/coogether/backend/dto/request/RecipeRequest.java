package coogether.backend.dto.request;

import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumRecipeType;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;

@Data
public class RecipeRequest {

    private EnumRecipeCategory recipeCategory;
    private EnumRecipeType recipeType;
    private String recipeContent;
    private String recipeName;
}
