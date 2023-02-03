package coogether.backend.repository.report;

import coogether.backend.domain.Follow;
import coogether.backend.domain.Report;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository extends JpaRepository<Report, Long> {
}
