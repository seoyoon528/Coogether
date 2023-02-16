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
-- Table structure for table `user_join_list`
--

DROP TABLE IF EXISTS `user_join_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_join_list` (
  `user_join_list_id` bigint NOT NULL AUTO_INCREMENT,
  `user_join_reg_time` datetime NOT NULL,
  `cooking_room_id` bigint DEFAULT NULL,
  `user_seq` bigint DEFAULT NULL,
  PRIMARY KEY (`user_join_list_id`),
  KEY `FKooguwtbrrjdf2dk4ipj7k50hu` (`cooking_room_id`),
  KEY `FK2vcipmy2l1ikalhpll8ekogn6` (`user_seq`),
  CONSTRAINT `FK2vcipmy2l1ikalhpll8ekogn6` FOREIGN KEY (`user_seq`) REFERENCES `user` (`user_seq`),
  CONSTRAINT `FKooguwtbrrjdf2dk4ipj7k50hu` FOREIGN KEY (`cooking_room_id`) REFERENCES `cooking_room` (`cooking_room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_join_list`
--
