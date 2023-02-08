package coogether.backend.service.file;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class S3Service {
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;
    private final AmazonS3 amazonS3;

    public String uploadFile(MultipartFile multipartFile, String uploadType) throws IOException {
        String folder = "";
        String fileName = multipartFile.getOriginalFilename();
        System.out.println("파일이름 : " + fileName);
        //파일 형식 구하기
        String ext = fileName.split("\\.")[1];
        String contentType = "";
        String type = "";
        //content type을 지정해서 올려주지 않으면 자동으로 "application/octet-stream"으로 고정이 되서 링크 클릭시 웹에서 열리는게 아니라 자동 다운이 시작됨.
        switch (ext) {
            case "JPG":
                contentType = "image/jpg";
                folder = uploadType + "/";
                break;
            case "jpg":
                contentType = "image/jpg";
                folder = uploadType + "/";
                break;
            case "JPEG":
                contentType = "image/jpeg";
                folder = uploadType + "/";
                break;
            case "jpeg":
                contentType = "image/jpeg";
                folder = uploadType + "/";
                break;
            case "PNG":
                contentType = "image/png";
                folder = uploadType + "/";
                break;
            case "png":
                contentType = "image/png";
                folder = uploadType + "/";
                break;
//            case "txt":
//                contentType = "text/plain";
//                folder = "txt/";
//                break;
//            case "csv":
//                contentType = "text/csv";
//                folder = "csv/";
//                break;
        }

        try {
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType(contentType);
            System.out.println("folder = " + folder);
            amazonS3.putObject(new PutObjectRequest(bucket, folder + fileName, multipartFile.getInputStream(), metadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead));
        } catch (AmazonServiceException e) {
            e.printStackTrace();
        } catch (SdkClientException e) {
            e.printStackTrace();
        }

        //object 정보 가져오기
        ListObjectsV2Result listObjectsV2Result = amazonS3.listObjectsV2(bucket);
        List<S3ObjectSummary> objectSummaries = listObjectsV2Result.getObjectSummaries();

        for (S3ObjectSummary object : objectSummaries) {
            System.out.println("object = " + object.toString());
        }

        String Url = "https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/";
        Url += uploadType + "/" + fileName;
        String changeUrl = Url.replaceAll(" ", "+");
        System.out.println(changeUrl);
        //return amazonS3.getUrl(bucket, fileName).toString();
        return changeUrl;
    }

    public List<String> allFolders() {
        ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request().withBucketName(bucket);
        String prefix = listObjectsV2Request.getDelimiter();
        System.out.println(prefix);
        return null;
    }
}