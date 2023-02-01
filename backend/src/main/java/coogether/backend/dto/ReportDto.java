package coogether.backend.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import coogether.backend.domain.Report;
import coogether.backend.domain.status.EnumReportCategory;
import coogether.backend.dto.simple.SimpleUserDto;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
public class ReportDto {
    private int reportId;
    private SimpleUserDto reporter;
    private SimpleUserDto reported;
    private String reportContent;
    private LocalDateTime reportDate;
    private EnumReportCategory reportCategory;

    public ReportDto(Report report) {
        this.reportId = report.getReportId();
        this.reporter = new SimpleUserDto(report.getReporter());
        this.reported = new SimpleUserDto(report.getReported());
        this.reportContent = report.getReportContent();
        this.reportDate = report.getReportDate();
        this.reportCategory = report.getReportCategory();
    }
}
