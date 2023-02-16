-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: i8b206.p.ssafy.io    Database: coogether
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cooking_room`
--

DROP TABLE IF EXISTS `cooking_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cooking_room` (
  `cooking_room_id` bigint NOT NULL AUTO_INCREMENT,
  `cooking_room_img` varchar(1000) NOT NULL,
  `cooking_room_name` varchar(30) NOT NULL,
  `cooking_room_notice` varchar(200) NOT NULL,
  `cooking_room_start_time` datetime NOT NULL,
  `cooking_room_status` varchar(255) NOT NULL,
  `cooking_room_host_id` bigint DEFAULT NULL,
  `recipe_id` bigint DEFAULT NULL,
  PRIMARY KEY (`cooking_room_id`),
  KEY `FK2i2amo2r9p580k544152qdall` (`cooking_room_host_id`),
  KEY `FKi6krccyv07rexvneanle1pvt1` (`recipe_id`),
  CONSTRAINT `FK2i2amo2r9p580k544152qdall` FOREIGN KEY (`cooking_room_host_id`) REFERENCES `user` (`user_seq`),
  CONSTRAINT `FKi6krccyv07rexvneanle1pvt1` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`recipe_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cooking_room`
--

LOCK TABLES `cooking_room` WRITE;
/*!40000 ALTER TABLE `cooking_room` DISABLE KEYS */;
INSERT INTO `cooking_room` VALUES (1,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/카레라면.jpg','카레라면 만드실분 있나요?','카레라면 만드실분 있나요?','2023-02-15 22:00:00','EXPECTED',4,14),(2,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/갈치조림.jpg','제주도 뺨치는 갈치조림','갈치조림 합니다','2023-02-15 23:49:00','EXPECTED',3,20),(3,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/떡만둣국.jpg','사골 떡만둣국 하실분~~','사골 떡만둣국 하실분~~','2023-02-15 23:50:00','EXPECTED',4,197),(4,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/김치찌개.jpg','엄마가 만든 김치찌개','김치찌개','2023-02-15 23:50:00','EXPECTED',3,106),(5,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/꽃게탕.jpg','꽃게탕 못참지','이거 못참습니다','2023-02-15 23:50:00','EXPECTED',3,1),(6,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/도토리묵밥.jpg','메밀말고 도토리묵밥','도토리묵사발','2023-02-15 23:50:00','EXPECTED',3,5),(7,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/명란크림파스타.jpg','명크파 좋아용','명란크림파스타 최고','2023-02-15 23:49:00','TERMINATED',3,3),(8,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/스파게티.jpg','토마토 스파게티 함께 만들어 먹어요','함께 재밌게 만들어요','2023-02-15 23:48:00','EXPECTED',2,293),(9,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/미역국.jpg','생일 필수 미역국','내 생일은 7월14일','2023-02-15 22:51:00','EXPECTED',3,170),(10,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/werwer.png','같이 김치찌개 만들어요~','김치는 필수!','2023-02-15 23:21:00','EXPECTED',5,106),(11,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/비빔밥.jpg','전주 비빔밥','전주가면 콩나물국밥임','2023-02-15 23:34:00','PROGRESS',3,145),(12,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/찜닭.jpg','안동에 가면 찜닭','찜닭','2023-02-15 22:50:00','EXPECTED',3,279),(13,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/카레.jpg','맛있는 카레','맛있겠다','2023-02-15 23:50:00','EXPECTED',3,257),(14,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/알리오올리오.jpg','알료올료','알료올료','2023-02-15 22:39:00','EXPECTED',3,72),(15,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/국수.jpg','국수는 이렇게 만들어요','함께 국수를 만들어 봅시다','2023-02-15 23:51:00','EXPECTED',2,188),(16,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/볶음우동.jpg','보끔우동','내 속을 들들볶음','2023-02-15 21:59:00','TERMINATED',3,176),(17,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/분짜.jpg','분짜','분짜는 맛있어','2023-02-15 23:46:00','EXPECTED',3,268),(18,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/카레.jpg','이것이 진짜 카레','재료 손질은 미리 해주세요','2023-02-15 23:55:00','EXPECTED',2,55),(19,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/쌀국수.jpg','고기폭탄 쌀국수','쌀국수','2023-02-15 22:58:00','EXPECTED',3,262),(20,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/23r32r.png','야식으로 두부조림!','매운걸 좋아하시는 분들은 청양고추 추가하기!','2023-02-15 23:44:00','EXPECTED',5,126),(21,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/수육.jpg','돼지고기 수육','돼지고기 수육','2023-02-15 23:50:00','EXPECTED',6,78),(22,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/연어초밥.jpg','연어 초밥 만드실분!!','연어초밥 만드실분!!','2023-02-15 23:50:00','TERMINATED',6,296),(23,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/22.png','두부조림 만드실분!','두부는 필수!','2023-02-16 12:55:00','TERMINATED',5,126),(24,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/23r32r.png','두부조림 또 만들어요!','두부는 꼭 필요한거 아시죠?','2023-02-16 13:30:00','TERMINATED',5,126),(25,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/두부.jpg','들기름 두부 구이!! 최애 반찬','같이 해봅시다','2023-02-16 13:01:00','EXPECTED',2,2),(26,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/22.png','두부조림 제발 만들어요!','두부는 꼭 필요해요!','2023-02-16 13:31:00','PROGRESS',5,126),(27,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/22.png','두부조림 제발 만들어요!','두부는 꼭 필요해요!','2023-02-16 13:31:00','TERMINATED',5,126),(28,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/cookingRoom/김치찌개.jpg','김찌 함 만들어봅시다.','재료 준비해주세요','2023-02-16 13:32:00','PROGRESS',2,6);
/*!40000 ALTER TABLE `cooking_room` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-16 13:45:53
