package coogether.backend.dto.simple;

import coogether.backend.domain.Report;
import coogether.backend.domain.status.EnumReportCategory;
import coogether.backend.dto.UserReportDto;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class SimpleReportDto {
    private Long reportId;
    private UserReportDto reporter;
    private UserReportDto reported;
    private String reportContent;
    private LocalDateTime reportDate;
    private EnumReportCategory reportCategory;

    public SimpleReportDto(Report report) {
        this.reportId = report.getReportId();
        this.reportContent = report.getReportContent();
        this.reportDate = report.getReportDate();
        this.reportCategory = report.getReportCategory();
        this.reporter = new UserReportDto(report.getReporter());
        this.reported = new UserReportDto(report.getReported());
    }
}
