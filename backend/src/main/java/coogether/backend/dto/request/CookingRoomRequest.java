package coogether.backend.dto.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@Data
public class CookingRoomRequest {

    private String cookingRoomName;
    private String cookingRoomImg;
    private MultipartFile file;
    private String RecipeName;
    private LocalDateTime cookingRoomStartTime;
    private String cookingRoomNotice;
}
