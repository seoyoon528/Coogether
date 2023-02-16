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
-- Table structure for table `my_ingredient_manage`
--

DROP TABLE IF EXISTS `my_ingredient_manage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `my_ingredient_manage` (
  `my_ingredient_manage_id` bigint NOT NULL AUTO_INCREMENT,
  `my_ingredient_manage_date` datetime NOT NULL,
  `my_ingredient_manage_flag` varchar(255) NOT NULL,
  `ingredient_id` bigint DEFAULT NULL,
  `user_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`my_ingredient_manage_id`),
  KEY `FKkx9w46oxwd2iojmriedcybo47` (`ingredient_id`),
  KEY `FK41j4g020d6sn85qntopstucvg` (`user_seq`),
  CONSTRAINT `FK41j4g020d6sn85qntopstucvg` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`),
  CONSTRAINT `FKkx9w46oxwd2iojmriedcybo47` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredient` (`ingredient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `my_ingredient_manage`
--
