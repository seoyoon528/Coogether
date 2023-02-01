package coogether.backend.dto.request;

import coogether.backend.domain.status.EnumRecipeCategory;
import coogether.backend.domain.status.EnumRecipeType;
import coogether.backend.domain.status.EnumReportCategory;
import coogether.backend.dto.simple.SimpleUserDto;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReportRequest {

    private EnumReportCategory reportCategory;
    private String reportContent;
}
