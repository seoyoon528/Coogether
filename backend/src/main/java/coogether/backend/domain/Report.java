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
    private int id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "reporter_id")
    private User reporter_id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "reported_id")
    private User reported_id;

    @Column(length = 200, nullable = true)
    private String report_content;

    @CreatedDate // 신고 등록 일자
    @Column(updatable = false, nullable = false)
    private LocalDateTime report_date;

    @NotNull
    @Enumerated(EnumType.STRING)
    private EnumReportCategory report_category;
}
