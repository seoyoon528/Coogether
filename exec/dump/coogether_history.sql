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
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `history_id` bigint NOT NULL AUTO_INCREMENT,
  `history_img` varchar(1000) DEFAULT NULL,
  `cooking_room_id` bigint DEFAULT NULL,
  `user_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`history_id`),
  KEY `FKmpbl9mn5160emx5l3jtnmc0qy` (`cooking_room_id`),
  KEY `FK77dwqgwgpbfop6vc38blujm0p` (`user_seq`),
  CONSTRAINT `FK77dwqgwgpbfop6vc38blujm0p` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`),
  CONSTRAINT `FKmpbl9mn5160emx5l3jtnmc0qy` FOREIGN KEY (`cooking_room_id`) REFERENCES `cooking_room` (`cooking_room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (1,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/History/연어초밥레시피.jpg',22,6),(2,NULL,22,2),(3,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/History/bread_jam.png',22,4),(4,NULL,22,3),(5,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/History/343443.png',22,5),(6,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/History/명란크림파스타.jpg',7,3),(7,NULL,7,4),(8,NULL,16,3),(9,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/History/22.png',23,5),(10,NULL,23,2),(11,NULL,24,3),(12,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/History/23r32r.png',24,5),(13,'https://s3.ap-northeast-2.amazonaws.com/my.first.example.sss.bucket/History/22.png',27,5);
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-16 13:45:52
