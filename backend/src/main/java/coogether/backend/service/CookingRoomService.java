package coogether.backend.service;

import coogether.backend.domain.CookingRoom;
import coogether.backend.domain.History;
import coogether.backend.dto.CookingRoomDto;
import coogether.backend.repository.cookingroom.CookingRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class CookingRoomService {

    private final CookingRoomRepository cookingRoomRepository;

    public List<CookingRoom> getCookingRoomList(){
        return cookingRoomRepository.findAll();
    }

    public List<CookingRoom> getCookingRoomListByRecipeName(String recipeName){
        return cookingRoomRepository.findByRecipeName(recipeName);
    }

    public CookingRoom getCookingRoomByCookingRoomId(Long cookingRoomId){
        return cookingRoomRepository.findByCookingRoomId(cookingRoomId);
    }

    // 페이징
    public Page<CookingRoomDto> getCookingRoomListPaging(Pageable pageable) {
        cookingRoomRepository.findAll(pageable);
        return cookingRoomRepository.getCookingRoomListPaging(pageable);
    }

    public Page<CookingRoomDto> roomListByRecipeNamePaging(String recipeName , Pageable pageable) {
        return cookingRoomRepository.getCookingRoomListByRecipaNamePaging(recipeName, pageable);
    }
}
