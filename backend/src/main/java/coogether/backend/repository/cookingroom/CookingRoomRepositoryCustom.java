package coogether.backend.repository.cookingroom;

import coogether.backend.dto.CookingRoomDto;
import coogether.backend.dto.RecipeDto;
import coogether.backend.dto.simple.SimpleRecipeDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CookingRoomRepositoryCustom {
    Page<CookingRoomDto> getCookingRoomListPaging(Pageable pageable);

    Page<CookingRoomDto> getCookingRoomListByRecipeNamePaging(String recipeName, Pageable pageable);
}
