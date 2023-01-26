package coogether.backend.domain;

import com.sun.istack.NotNull;
import coogether.backend.domain.status.EnumReportCategory;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;

import java.time.LocalDateTime;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "report")
public class Report {
    @Id
    @GeneratedValue
    @Column(name = "report_id", nullable = false)
    private int reportId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "reporter_id")
    private User reporterId;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "reported_id")
    private User reportedId;

    @Column(name = "report_content", length = 200, nullable = true)
    private String reportContent;

    @CreatedDate // 신고 등록 일자
    @Column(name = "report_date", updatable = false, nullable = false)
    private LocalDateTime reportDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "report_category", nullable = false)
    private EnumReportCategory reportCategory;
}
