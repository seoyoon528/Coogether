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
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `report_id` bigint NOT NULL AUTO_INCREMENT,
  `report_category` varchar(255) NOT NULL,
  `report_content` varchar(200) DEFAULT NULL,
  `report_date` datetime NOT NULL,
  `reported_seq` bigint DEFAULT NULL,
  `reporter_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`report_id`),
  KEY `FKmtv1vxsei7x20ea6qievbb9xi` (`reported_seq`),
  KEY `FKl2x2o0xfl02u0xu7xsd2srkk2` (`reporter_seq`),
  CONSTRAINT `FKl2x2o0xfl02u0xu7xsd2srkk2` FOREIGN KEY (`reporter_seq`) REFERENCES `user` (`user_seq`),
  CONSTRAINT `FKmtv1vxsei7x20ea6qievbb9xi` FOREIGN KEY (`reported_seq`) REFERENCES `user` (`user_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--
