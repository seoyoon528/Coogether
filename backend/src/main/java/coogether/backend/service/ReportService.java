package coogether.backend.service;

import coogether.backend.domain.Report;
import coogether.backend.domain.User;
import coogether.backend.dto.request.ReportRequest;
import coogether.backend.repository.report.ReportRepository;
import coogether.backend.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)  // 트랜잭션 안에서만 데이터 변경하게 설정
@RequiredArgsConstructor
public class ReportService {
    private final ReportRepository reportRepository;
    private final UserRepository userRepository;

    @Transactional
    public Report addReport(ReportRequest reportRequest, Long reporterId, Long reportedId) {
        Report report = new Report();

        // 신고자와 피신고자가 같으면 null 리턴
        if(reporterId.equals(reportedId))
            return report;
        
        //reporterId 없으면 탈출
        User user = userRepository.findByUserId(reporterId);
        if(user == null)  return report;
        report.setReporter(user);

        //reportedId 없으면 탈출
        User user2 = userRepository.findByUserId(reportedId);
        if(user2 == null)  return report;
        report.setReported(user2);

        report.setReportCategory(reportRequest.getReportCategory());
        report.setReportDate(LocalDateTime.now());
        report.setReportContent(reportRequest.getReportContent());

        reportRepository.save(report);

        return report;
    }

    public List<Report> reportListAll() {
        return reportRepository.findAll();
    }
}
