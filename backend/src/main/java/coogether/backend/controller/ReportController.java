package coogether.backend.controller;

import coogether.backend.domain.Recipe;
import coogether.backend.domain.Report;
import coogether.backend.dto.request.RecipeRequest;
import coogether.backend.dto.request.ReportRequest;
import coogether.backend.dto.simple.SimpleRecipeDto;
import coogether.backend.dto.simple.SimpleReportDto;
import coogether.backend.service.RecipeService;
import coogether.backend.service.ReportService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(tags = {"신고 정보를 제공하는 Controller"})
@RestController
@RequiredArgsConstructor
public class ReportController {
    private final ReportService reportService;

    @ApiOperation(value = "유저 신고 등록")
    @PostMapping("/report/{reporterId}/{reportedId}")
    public ResponseEntity addReport(@RequestBody ReportRequest reportRequest, @PathVariable("reporterId") Long reporterId, @PathVariable("reportedId") Long reportedId)  {

        reportService.addReport(reportRequest, reporterId, reportedId) ;

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @ApiOperation(value = "신고 목록 전체 조회")
    @GetMapping("/report/list")
    public ResponseEntity reportListAll() {
        List<SimpleReportDto> result = new ArrayList<>();
        List<Report> reports = reportService.reportListAll();
        for (Report r : reports)
            result.add(new SimpleReportDto(r));
        return ResponseEntity.ok().body(result);
    }
}
