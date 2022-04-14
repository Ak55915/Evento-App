CREATE DATABASE  IF NOT EXISTS `eventodb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `eventodb`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: eventodb
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `cust_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `contact_no` varchar(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `login_id` int NOT NULL,
  PRIMARY KEY (`cust_id`),
  KEY `login_id_idx` (`login_id`),
  CONSTRAINT `login_id` FOREIGN KEY (`login_id`) REFERENCES `logins` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Dinesh','Parate','9096393223','near gorewada,khapa',1),(2,'Akash','Kadam','9564685456','near manewada,Pune',2);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_requests`
--

DROP TABLE IF EXISTS `event_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_requests` (
  `req_id` int NOT NULL AUTO_INCREMENT,
  `location` varchar(255) NOT NULL,
  `date_time` date NOT NULL,
  `guests` int NOT NULL,
  `budget` decimal(15,2) NOT NULL,
  `status` varchar(12) DEFAULT 'false',
  `eid` int NOT NULL,
  `v_id` int NOT NULL DEFAULT '0',
  `cust_id` int NOT NULL,
  PRIMARY KEY (`req_id`),
  UNIQUE KEY `date_time_UNIQUE` (`date_time`),
  KEY `eid_idx` (`eid`),
  KEY `cust_id_idx` (`cust_id`),
  CONSTRAINT `cust_id` FOREIGN KEY (`cust_id`) REFERENCES `customers` (`cust_id`),
  CONSTRAINT `eid` FOREIGN KEY (`eid`) REFERENCES `events` (`eid`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_requests`
--

LOCK TABLES `event_requests` WRITE;
/*!40000 ALTER TABLE `event_requests` DISABLE KEYS */;
INSERT INTO `event_requests` VALUES (1,'Pune','2022-04-06',100,60000.00,'true',1,1,1),(2,'Pune','2022-04-08',150,65000.00,'true',2,1,2),(3,'Pune','2022-04-16',150,125000.00,'true',1,1,2),(23,'kamla nehru hall,pune','2022-04-21',60,62000.00,'false',3,0,2),(24,'kamla nehru hall,pune','2022-04-22',60,62000.00,'false',3,0,2);
/*!40000 ALTER TABLE `event_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_service`
--

DROP TABLE IF EXISTS `event_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_service` (
  `eid` int NOT NULL,
  `sid` int NOT NULL,
  PRIMARY KEY (`eid`,`sid`),
  KEY `sid_idx` (`sid`),
  CONSTRAINT `eiid` FOREIGN KEY (`eid`) REFERENCES `events` (`eid`),
  CONSTRAINT `siid` FOREIGN KEY (`sid`) REFERENCES `services` (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_service`
--

LOCK TABLES `event_service` WRITE;
/*!40000 ALTER TABLE `event_service` DISABLE KEYS */;
INSERT INTO `event_service` VALUES (1,1),(3,1),(1,2),(3,2),(1,3),(2,3),(3,3),(1,4),(2,4),(3,4),(1,5),(1,6),(3,6);
/*!40000 ALTER TABLE `event_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `eid` int NOT NULL AUTO_INCREMENT,
  `ename` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `add_on_price` decimal(7,2) NOT NULL,
  `no_of_guest` varchar(45) NOT NULL DEFAULT '30',
  PRIMARY KEY (`eid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'Birthday Event','Through our portal organize birthday event with offoring some basic services.',50000.00,500.00,'30'),(2,'Family get together','Through our portal organize family get together event with offoring some basic services.',50000.00,600.00,'30'),(3,'Seminar','Many corporate company or organization organize their corporate events with good facility and minimum cost.',50000.00,400.00,'30');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logins`
--

DROP TABLE IF EXISTS `logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logins` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `email_id` varchar(45) NOT NULL,
  `password` varchar(12) NOT NULL,
  `role` varchar(12) NOT NULL,
  `sec_ans` varchar(255) NOT NULL,
  `sec_id` int NOT NULL,
  PRIMARY KEY (`login_id`),
  UNIQUE KEY `email_id_UNIQUE` (`email_id`),
  KEY `sec_id_idx` (`sec_id`),
  CONSTRAINT `sec_id` FOREIGN KEY (`sec_id`) REFERENCES `questions` (`sec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logins`
--

LOCK TABLES `logins` WRITE;
/*!40000 ALTER TABLE `logins` DISABLE KEYS */;
INSERT INTO `logins` VALUES (1,'dineshparate25@gmail.com','dinesh@123','customer','Dinesh',1),(2,'akashkadam21@gmail.com','akash@123','customer','akash',1),(3,'shaileshsarode25@gmail.com','shailesh@123','vendor','shailesh',1),(4,'rohan25@gmail.com','rohan@123','admin','rohan',1),(22,'dineshparate95@gmail.com','G00gle@123','vendor','Dinesh',1);
/*!40000 ALTER TABLE `logins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `sec_id` int NOT NULL AUTO_INCREMENT,
  `sec_ques` varchar(255) NOT NULL,
  PRIMARY KEY (`sec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'what is your nickname?'),(2,'What is the name of your favorite pet?'),(3,'What is the name of your first school?'),(4,'What was your favorite food as a child?'),(5,'In what city were you born?'),(6,'What is your favorite food?');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `sname` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'Decoration',' enhancing the mood and set a perfect ambience for any type of event.'),(2,'Lightening','Lights helps to add life and provide dynamic venue presence.'),(3,'Catering','The goal of catering services is to stasify clients while also earning profit.'),(4,'Photographer and Videgraphy','This services used to capture prestidges movement of events.'),(5,'Cake','This service very specific for birthday events only.'),(6,'Sound','The foremost function of the sound system for the event is to create the mood and set aura');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendors`
--

DROP TABLE IF EXISTS `vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendors` (
  `v_id` int NOT NULL AUTO_INCREMENT,
  `v_name` varchar(45) NOT NULL,
  `b_name` varchar(45) NOT NULL,
  `contact_no` varchar(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`v_id`),
  KEY `login_id_idx` (`login_id`),
  CONSTRAINT `login_iid` FOREIGN KEY (`login_id`) REFERENCES `logins` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendors`
--

LOCK TABLES `vendors` WRITE;
/*!40000 ALTER TABLE `vendors` DISABLE KEYS */;
INSERT INTO `vendors` VALUES (1,'Shailesh Wasnik','Shradha vendor service ','9645853687','Near Somalwada,Pune',3),(5,'Dinesh Parate','event','9096393223','At Post Khapa',22);
/*!40000 ALTER TABLE `vendors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-12 23:14:17
