-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2024 at 01:50 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cgidb`
--

-- --------------------------------------------------------

--
-- Table structure for table `childdetails`
--

CREATE TABLE `childdetails` (
  `ChildID` int(11) NOT NULL,
  `DHMO` varchar(255) DEFAULT NULL,
  `DFWO` varchar(255) DEFAULT NULL,
  `Birn` varchar(255) DEFAULT NULL,
  `ChildName` varchar(255) DEFAULT NULL,
  `PMRN` varchar(255) DEFAULT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `DateOfRegister` date DEFAULT NULL,
  `MotheName` varchar(255) DEFAULT NULL,
  `MotherAge` int(11) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `ChildCount` int(11) DEFAULT NULL,
  `Hospital` varchar(255) DEFAULT NULL,
  `DeliveryMethod` varchar(255) DEFAULT NULL,
  `Apgar1` int(11) DEFAULT NULL,
  `Apgar2` int(11) DEFAULT NULL,
  `Apgar3` int(11) DEFAULT NULL,
  `BirthWeight` decimal(10,2) DEFAULT NULL,
  `HeadCircumference` int(11) DEFAULT NULL,
  `LengthAtBirth` int(11) DEFAULT NULL,
  `WeightAtDischarge` decimal(10,2) DEFAULT NULL,
  `VitaminK` varchar(255) DEFAULT NULL,
  `BreastfeedingStart` varchar(255) DEFAULT NULL,
  `MotherWarmth` varchar(255) DEFAULT NULL,
  `BabyAttachment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `childdetails`
--

INSERT INTO `childdetails` (`ChildID`, `DHMO`, `DFWO`, `Birn`, `ChildName`, `PMRN`, `DateOfBirth`, `DateOfRegister`, `MotheName`, `MotherAge`, `Address`, `ChildCount`, `Hospital`, `DeliveryMethod`, `Apgar1`, `Apgar2`, `Apgar3`, `BirthWeight`, `HeadCircumference`, `LengthAtBirth`, `WeightAtDischarge`, `VitaminK`, `BreastfeedingStart`, `MotherWarmth`, `BabyAttachment`) VALUES
(1, 'Hospital1', 'DFWO1', 'Birn1', 'ChildName1', 'PMRN1', '2023-01-01', '2023-01-01', 'MotherName1', 25, 'Address1', 2, 'Hospital1', 'Vaginal Delivery', 7, 8, 9, 2.50, 34, 50, 2.30, 'Given', 'Yes', 'Correct', 'Correct'),
(2, 'Hospital1', 'DFWO1', 'Birn2', 'ChildName2', 'PMRN2', '2023-01-01', '2023-01-01', 'MotherName2', 28, 'Address2', 1, 'Hospital1', 'Caesarean Delivery', 6, 7, 8, 2.80, 35, 52, 2.60, 'Given', 'Yes', 'Correct', 'Correct'),
(3, 'Hospital2', 'DFWO2', 'Birn3', 'ChildName3', 'PMRN3', '2023-03-01', '2023-03-01', 'MotherName3', 30, 'Address3', 3, 'Hospital2', 'Vaginal Delivery', 8, 9, 9, 3.20, 36, 54, 2.90, 'Given', 'Yes', 'Correct', 'Correct'),
(4, 'Hospital2', 'DFWO2', 'Birn4', 'ChildName4', 'PMRN4', '2023-03-01', '2023-03-01', 'MotherName4', 26, 'Address4', 2, 'Hospital2', 'Forceps Delivery', 9, 8, 7, 2.70, 33, 48, 2.20, 'Given', 'Yes', 'Correct', 'Correct'),
(5, 'Hospital3', 'DFWO3', 'Birn5', 'ChildName5', 'PMRN5', '2023-05-01', '2023-05-01', 'MotherName5', 29, 'Address5', 1, 'Hospital3', 'Vacuum Extraction', 8, 10, 9, 3.50, 37, 55, 3.10, 'Given', 'Yes', 'Correct', 'Correct');

-- --------------------------------------------------------

--
-- Table structure for table `childmonthlydetails`
--

CREATE TABLE `childmonthlydetails` (
  `ChildMonthlyID` int(11) NOT NULL,
  `ChildID` int(11) DEFAULT NULL,
  `Month` int(11) DEFAULT NULL,
  `Height` decimal(10,2) DEFAULT NULL,
  `Weight` decimal(10,2) DEFAULT NULL,
  `DateOfMeasurement` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `heightf`
--

CREATE TABLE `heightf` (
  `Month` int(11) DEFAULT NULL,
  `SD-3` double DEFAULT NULL,
  `SD-2` double DEFAULT NULL,
  `SD-1` double DEFAULT NULL,
  `SD0` double DEFAULT NULL,
  `SD1` double DEFAULT NULL,
  `SD2` double DEFAULT NULL,
  `SD3` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `heightf`
--

INSERT INTO `heightf` (`Month`, `SD-3`, `SD-2`, `SD-1`, `SD0`, `SD1`, `SD2`, `SD3`) VALUES
(0, 43.6, 45.4, 47.3, 49.1, 51, 52.9, 54.7),
(1, 47.8, 49.8, 51.7, 53.7, 55.6, 57.6, 59.5),
(2, 51, 53, 55, 57.1, 59.1, 61.1, 63.2),
(3, 53.5, 55.6, 57.7, 59.8, 61.9, 64, 66.1),
(4, 55.6, 57.8, 59.9, 62.1, 64.3, 66.4, 68.6),
(5, 57.4, 59.6, 61.8, 64, 66.2, 68.5, 70.7),
(6, 58.9, 61.2, 63.5, 65.7, 68, 70.3, 72.5),
(7, 60.3, 62.7, 65, 67.3, 69.6, 71.9, 74.2),
(8, 61.7, 64, 66.4, 68.7, 71.1, 73.5, 75.8),
(9, 62.9, 65.3, 67.7, 70.1, 72.6, 75, 77.4),
(10, 64.1, 66.5, 69, 71.5, 73.9, 76.4, 78.9),
(11, 65.2, 67.7, 70.3, 72.8, 75.3, 77.8, 80.3),
(12, 66.3, 68.9, 71.4, 74, 76.6, 79.2, 81.7),
(13, 67.3, 70, 72.6, 75.2, 77.8, 80.5, 83.1),
(14, 68.3, 71, 73.7, 76.4, 79.1, 81.7, 84.4),
(15, 69.3, 72, 74.8, 77.5, 80.2, 83, 85.7),
(16, 70.2, 73, 75.8, 78.6, 81.4, 84.2, 87),
(17, 71.1, 74, 76.8, 79.7, 82.5, 85.4, 88.2),
(18, 72, 74.9, 77.8, 80.7, 83.6, 86.5, 89.4),
(19, 72.8, 75.8, 78.8, 81.7, 84.7, 87.6, 90.6),
(20, 73.7, 76.7, 79.7, 82.7, 85.7, 88.7, 91.7),
(21, 74.5, 77.5, 80.6, 83.7, 86.7, 89.8, 92.9),
(22, 75.2, 78.4, 81.5, 84.6, 87.7, 90.8, 94),
(23, 76, 79.2, 82.3, 85.5, 88.7, 91.9, 95),
(24, 76.7, 80, 83.2, 86.4, 89.6, 92.9, 96.1);

-- --------------------------------------------------------

--
-- Table structure for table `heightm`
--

CREATE TABLE `heightm` (
  `Month` int(11) DEFAULT NULL,
  `SD-3` double DEFAULT NULL,
  `SD-2` double DEFAULT NULL,
  `SD-1` double DEFAULT NULL,
  `SD0` double DEFAULT NULL,
  `SD1` double DEFAULT NULL,
  `SD2` double DEFAULT NULL,
  `SD3` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `heightm`
--

INSERT INTO `heightm` (`Month`, `SD-3`, `SD-2`, `SD-1`, `SD0`, `SD1`, `SD2`, `SD3`) VALUES
(0, 44.2, 46.1, 48, 49.9, 51.8, 53.7, 55.6),
(1, 48.9, 50.8, 52.8, 54.7, 56.7, 58.6, 60.6),
(2, 52.4, 54.4, 56.4, 58.4, 60.4, 62.4, 64.4),
(3, 55.3, 57.3, 59.4, 61.4, 63.5, 65.5, 67.6),
(4, 57.6, 59.7, 61.8, 63.9, 66, 68, 70.1),
(5, 59.6, 61.7, 63.8, 65.9, 68, 70.1, 72.2),
(6, 61.2, 63.3, 65.5, 67.6, 69.8, 71.9, 74),
(7, 62.7, 64.8, 67, 69.2, 71.3, 73.5, 75.7),
(8, 64, 66.2, 68.4, 70.6, 72.8, 75, 77.2),
(9, 65.2, 67.5, 69.7, 72, 74.2, 76.5, 78.7),
(10, 66.4, 68.7, 71, 73.3, 75.6, 77.9, 80.1),
(11, 67.6, 69.9, 72.2, 74.5, 76.9, 79.2, 81.5),
(12, 68.6, 71, 73.4, 75.7, 78.1, 80.5, 82.9),
(13, 69.6, 72.1, 74.5, 76.9, 79.3, 81.8, 84.2),
(14, 70.6, 73.1, 75.6, 78, 80.5, 83, 85.5),
(15, 71.6, 74.1, 76.6, 79.1, 81.7, 84.2, 86.7),
(16, 72.5, 75, 77.6, 80.2, 82.8, 85.4, 88),
(17, 73.3, 76, 78.6, 81.2, 83.9, 86.5, 89.2),
(18, 74.2, 76.9, 79.6, 82.3, 85, 87.7, 90.4),
(19, 75, 77.7, 80.5, 83.2, 86, 88.8, 91.5),
(20, 75.8, 78.6, 81.4, 84.2, 87, 89.8, 92.6),
(21, 76.5, 79.4, 82.3, 85.1, 88, 90.9, 93.8),
(22, 77.2, 80.2, 83.1, 86, 89, 91.9, 94.9),
(23, 78, 81, 83.9, 86.9, 89.9, 92.9, 95.9),
(24, 78.7, 81.7, 84.8, 87.8, 90.9, 93.9, 97);

-- --------------------------------------------------------

--
-- Table structure for table `immunization`
--

CREATE TABLE `immunization` (
  `ImmunizationId` int(11) NOT NULL,
  `ChildId` int(11) DEFAULT NULL,
  `VaccineId` int(11) DEFAULT NULL,
  `DateOfVaccination` date DEFAULT NULL,
  `BatchNumber` varchar(50) DEFAULT NULL,
  `SideEffects` varchar(100) DEFAULT NULL,
  `Status` enum('done','pending') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `immunization`
--

INSERT INTO `immunization` (`ImmunizationId`, `ChildId`, `VaccineId`, `DateOfVaccination`, `BatchNumber`, `SideEffects`, `Status`) VALUES
(1, 1, 1, '2015-05-17', '0375', 'B.C.C Scar', 'done'),
(2, 1, 2, NULL, NULL, NULL, 'done'),
(3, 2, 3, '2015-07-15', '124P4027B', NULL, 'done'),
(4, 2, 4, '2015-07-15', 'L5146', NULL, 'done'),
(5, 2, 5, '2015-09-16', '124P4002A', NULL, 'done'),
(6, 2, 6, '0000-00-00', '', NULL, 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `ChildID` int(11) DEFAULT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vaccineschedule`
--

CREATE TABLE `vaccineschedule` (
  `VaccineId` int(11) NOT NULL,
  `VaccineName` varchar(50) DEFAULT NULL,
  `Age` varchar(50) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vaccineschedule`
--

INSERT INTO `vaccineschedule` (`VaccineId`, `VaccineName`, `Age`, `Description`) VALUES
(1, 'B.C.C', 'At birth', ''),
(2, 'B.C.C 2nd dose', '', ''),
(3, 'Pentavalent 1', '2 Months', ''),
(4, 'OPV 1', '2 Months', ''),
(5, 'Pentavalent 2', '4 Months', ''),
(6, 'OPV 2', '4 Months', '');

-- --------------------------------------------------------

--
-- Table structure for table `weightf`
--

CREATE TABLE `weightf` (
  `Month` int(11) DEFAULT NULL,
  `SD-3` double DEFAULT NULL,
  `SD-2` double DEFAULT NULL,
  `SD-1` double DEFAULT NULL,
  `SD0` double DEFAULT NULL,
  `SD1` double DEFAULT NULL,
  `SD2` double DEFAULT NULL,
  `SD3` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weightf`
--

INSERT INTO `weightf` (`Month`, `SD-3`, `SD-2`, `SD-1`, `SD0`, `SD1`, `SD2`, `SD3`) VALUES
(0, 2, 2.4, 2.8, 3.2, 3.7, 4.2, 4.8),
(1, 2.7, 3.2, 3.6, 4.2, 4.8, 5.5, 6.2),
(2, 3.4, 3.9, 4.5, 5.1, 5.8, 6.6, 7.5),
(3, 4, 4.5, 5.2, 5.8, 6.6, 7.5, 8.5),
(4, 4.4, 5, 5.7, 6.4, 7.3, 8.2, 9.3),
(5, 4.8, 5.4, 6.1, 6.9, 7.8, 8.8, 10),
(6, 5.1, 5.7, 6.5, 7.3, 8.2, 9.3, 10.6),
(7, 5.3, 6, 6.8, 7.6, 8.6, 9.8, 11.1),
(8, 5.6, 6.3, 7, 7.9, 9, 10.2, 11.6),
(9, 5.8, 6.5, 7.3, 8.2, 9.3, 10.5, 12),
(10, 5.9, 6.7, 7.5, 8.5, 9.6, 10.9, 12.4),
(11, 6.1, 6.9, 7.7, 8.7, 9.9, 11.2, 12.8),
(12, 6.3, 7, 7.9, 8.9, 10.1, 11.5, 13.1),
(13, 6.4, 7.2, 8.1, 9.2, 10.4, 11.8, 13.5),
(14, 6.6, 7.4, 8.3, 9.4, 10.6, 12.1, 13.8),
(15, 6.7, 7.6, 8.5, 9.6, 10.9, 12.4, 14.1),
(16, 6.9, 7.7, 8.7, 9.8, 11.1, 12.6, 14.5),
(17, 7, 7.9, 8.9, 10, 11.4, 12.9, 14.8),
(18, 7.2, 8.1, 9.1, 10.2, 11.6, 13.2, 15.1),
(19, 7.3, 8.2, 9.2, 10.4, 11.8, 13.5, 15.4),
(20, 7.5, 8.4, 9.4, 10.6, 12.1, 13.7, 15.7),
(21, 7.6, 8.6, 9.6, 10.9, 12.3, 14, 16),
(22, 7.8, 8.7, 9.8, 11.1, 12.5, 14.3, 16.4),
(23, 7.9, 8.9, 10, 11.3, 12.8, 14.6, 16.7),
(24, 8.1, 9, 10.2, 11.5, 13, 14.8, 17),
(25, 8.2, 9.2, 10.3, 11.7, 13.3, 15.1, 17.3),
(26, 8.4, 9.4, 10.5, 11.9, 13.5, 15.4, 17.7),
(27, 8.5, 9.5, 10.7, 12.1, 13.7, 15.7, 18),
(28, 8.6, 9.7, 10.9, 12.3, 14, 16, 18.3),
(29, 8.8, 9.8, 11.1, 12.5, 14.2, 16.2, 18.7),
(30, 8.9, 10, 11.2, 12.7, 14.4, 16.5, 19),
(31, 9, 10.1, 11.4, 12.9, 14.7, 16.8, 19.3),
(32, 9.1, 10.3, 11.6, 13.1, 14.9, 17.1, 19.6),
(33, 9.3, 10.4, 11.7, 13.3, 15.1, 17.3, 20),
(34, 9.4, 10.5, 11.9, 13.5, 15.4, 17.6, 20.3),
(35, 9.5, 10.7, 12, 13.7, 15.6, 17.9, 20.6),
(36, 9.6, 10.8, 12.2, 13.9, 15.8, 18.1, 20.9),
(37, 9.7, 10.9, 12.4, 14, 16, 18.4, 21.3),
(38, 9.8, 11.1, 12.5, 14.2, 16.3, 18.7, 21.6),
(39, 9.9, 11.2, 12.7, 14.4, 16.5, 19, 22),
(40, 10.1, 11.3, 12.8, 14.6, 16.7, 19.2, 22.3),
(41, 10.2, 11.5, 13, 14.8, 16.9, 19.5, 22.7),
(42, 10.3, 11.6, 13.1, 15, 17.2, 19.8, 23),
(43, 10.4, 11.7, 13.3, 15.2, 17.4, 20.1, 23.4),
(44, 10.5, 11.8, 13.4, 15.3, 17.6, 20.4, 23.7),
(45, 10.6, 12, 13.6, 15.5, 17.8, 20.7, 24.1),
(46, 10.7, 12.1, 13.7, 15.7, 18.1, 20.9, 24.5),
(47, 10.8, 12.2, 13.9, 15.9, 18.3, 21.2, 24.8),
(48, 10.9, 12.3, 14, 16.1, 18.5, 21.5, 25.2),
(49, 11, 12.4, 14.2, 16.3, 18.8, 21.8, 25.5),
(50, 11.1, 12.6, 14.3, 16.4, 19, 22.1, 25.9),
(51, 11.2, 12.7, 14.5, 16.6, 19.2, 22.4, 26.3),
(52, 11.3, 12.8, 14.6, 16.8, 19.4, 22.6, 26.6),
(53, 11.4, 12.9, 14.8, 17, 19.7, 22.9, 27),
(54, 11.5, 13, 14.9, 17.2, 19.9, 23.2, 27.4),
(55, 11.6, 13.2, 15.1, 17.3, 20.1, 23.5, 27.7),
(56, 11.7, 13.3, 15.2, 17.5, 20.3, 23.8, 28.1),
(57, 11.8, 13.4, 15.3, 17.7, 20.6, 24.1, 28.5),
(58, 11.9, 13.5, 15.5, 17.9, 20.8, 24.4, 28.8),
(59, 12, 13.6, 15.6, 18, 21, 24.6, 29.2),
(60, 12.1, 13.7, 15.8, 18.2, 21.2, 24.9, 29.5);

-- --------------------------------------------------------

--
-- Table structure for table `weightm`
--

CREATE TABLE `weightm` (
  `Month` int(11) DEFAULT NULL,
  `SD-3` double DEFAULT NULL,
  `SD-2` double DEFAULT NULL,
  `SD-1` double DEFAULT NULL,
  `SD0` double DEFAULT NULL,
  `SD1` double DEFAULT NULL,
  `SD2` double DEFAULT NULL,
  `SD3` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weightm`
--

INSERT INTO `weightm` (`Month`, `SD-3`, `SD-2`, `SD-1`, `SD0`, `SD1`, `SD2`, `SD3`) VALUES
(0, 2.1, 2.5, 2.9, 3.3, 3.9, 4.4, 5),
(1, 2.9, 3.4, 3.9, 4.5, 5.1, 5.8, 6.6),
(2, 3.8, 4.3, 4.9, 5.6, 6.3, 7.1, 8),
(3, 4.4, 5, 5.7, 6.4, 7.2, 8, 9),
(4, 4.9, 5.6, 6.2, 7, 7.8, 8.7, 9.7),
(5, 5.3, 6, 6.7, 7.5, 8.4, 9.3, 10.4),
(6, 5.7, 6.4, 7.1, 7.9, 8.8, 9.8, 10.9),
(7, 5.9, 6.7, 7.4, 8.3, 9.2, 10.3, 11.4),
(8, 6.2, 6.9, 7.7, 8.6, 9.6, 10.7, 11.9),
(9, 6.4, 7.1, 8, 8.9, 9.9, 11, 12.3),
(10, 6.6, 7.4, 8.2, 9.2, 10.2, 11.4, 12.7),
(11, 6.8, 7.6, 8.4, 9.4, 10.5, 11.7, 13),
(12, 6.9, 7.7, 8.6, 9.6, 10.8, 12, 13.3),
(13, 7.1, 7.9, 8.8, 9.9, 11, 12.3, 13.7),
(14, 7.2, 8.1, 9, 10.1, 11.3, 12.6, 14),
(15, 7.4, 8.3, 9.2, 10.3, 11.5, 12.8, 14.3),
(16, 7.5, 8.4, 9.4, 10.5, 11.7, 13.1, 14.6),
(17, 7.7, 8.6, 9.6, 10.7, 12, 13.4, 14.9),
(18, 7.8, 8.8, 9.8, 10.9, 12.2, 13.7, 15.3),
(19, 8, 8.9, 10, 11.1, 12.5, 13.9, 15.6),
(20, 8.1, 9.1, 10.1, 11.3, 12.7, 14.2, 15.9),
(21, 8.2, 9.2, 10.3, 11.5, 12.9, 14.5, 16.2),
(22, 8.4, 9.4, 10.5, 11.8, 13.2, 14.7, 16.5),
(23, 8.5, 9.5, 10.7, 12, 13.4, 15, 16.8),
(24, 8.6, 9.7, 10.8, 12.2, 13.6, 15.3, 17.1),
(25, 8.8, 9.8, 11, 12.4, 13.9, 15.5, 17.5),
(26, 8.9, 10, 11.2, 12.5, 14.1, 15.8, 17.8),
(27, 9, 10.1, 11.3, 12.7, 14.3, 16.1, 18.1),
(28, 9.1, 10.2, 11.5, 12.9, 14.5, 16.3, 18.4),
(29, 9.2, 10.4, 11.7, 13.1, 14.8, 16.6, 18.7),
(30, 9.4, 10.5, 11.8, 13.3, 15, 16.9, 19),
(31, 9.5, 10.7, 12, 13.5, 15.2, 17.1, 19.3),
(32, 9.6, 10.8, 12.1, 13.7, 15.4, 17.4, 19.6),
(33, 9.7, 10.9, 12.3, 13.8, 15.6, 17.6, 19.9),
(34, 9.8, 11, 12.4, 14, 15.8, 17.8, 20.2),
(35, 9.9, 11.2, 12.6, 14.2, 16, 18.1, 20.4),
(36, 10, 11.3, 12.7, 14.3, 16.2, 18.3, 20.7),
(37, 10.1, 11.4, 12.9, 14.5, 16.4, 18.6, 21),
(38, 10.2, 11.5, 13, 14.7, 16.6, 18.8, 21.3),
(39, 10.3, 11.6, 13.1, 14.8, 16.8, 19, 21.6),
(40, 10.4, 11.8, 13.3, 15, 17, 19.3, 21.9),
(41, 10.5, 11.9, 13.4, 15.2, 17.2, 19.5, 22.1),
(42, 10.6, 12, 13.6, 15.3, 17.4, 19.7, 22.4),
(43, 10.7, 12.1, 13.7, 15.5, 17.6, 20, 22.7),
(44, 10.8, 12.2, 13.8, 15.7, 17.8, 20.2, 23),
(45, 10.9, 12.4, 14, 15.8, 18, 20.5, 23.3),
(46, 11, 12.5, 14.1, 16, 18.2, 20.7, 23.6),
(47, 11.1, 12.6, 14.3, 16.2, 18.4, 20.9, 23.9),
(48, 11.2, 12.7, 14.4, 16.3, 18.6, 21.2, 24.2),
(49, 11.3, 12.8, 14.5, 16.5, 18.8, 21.4, 24.5),
(50, 11.4, 12.9, 14.7, 16.7, 19, 21.7, 24.8),
(51, 11.5, 13.1, 14.8, 16.8, 19.2, 21.9, 25.1),
(52, 11.6, 13.2, 15, 17, 19.4, 22.2, 25.4),
(53, 11.7, 13.3, 15.1, 17.2, 19.6, 22.4, 25.7),
(54, 11.8, 13.4, 15.2, 17.3, 19.8, 22.7, 26),
(55, 11.9, 13.5, 15.4, 17.5, 20, 22.9, 26.3),
(56, 12, 13.6, 15.5, 17.7, 20.2, 23.2, 26.6),
(57, 12.1, 13.7, 15.6, 17.8, 20.4, 23.4, 26.9),
(58, 12.2, 13.8, 15.8, 18, 20.6, 23.7, 27.2),
(59, 12.3, 14, 15.9, 18.2, 20.8, 23.9, 27.6),
(60, 12.4, 14.1, 16, 18.3, 21, 24.2, 27.9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `childdetails`
--
ALTER TABLE `childdetails`
  ADD PRIMARY KEY (`ChildID`);

--
-- Indexes for table `childmonthlydetails`
--
ALTER TABLE `childmonthlydetails`
  ADD PRIMARY KEY (`ChildMonthlyID`),
  ADD KEY `FK_ChildMonthlyDetails_ChildID` (`ChildID`);

--
-- Indexes for table `immunization`
--
ALTER TABLE `immunization`
  ADD PRIMARY KEY (`ImmunizationId`),
  ADD KEY `ChildId` (`ChildId`),
  ADD KEY `VaccineId` (`VaccineId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_Users_ChildID` (`ChildID`);

--
-- Indexes for table `vaccineschedule`
--
ALTER TABLE `vaccineschedule`
  ADD PRIMARY KEY (`VaccineId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `childdetails`
--
ALTER TABLE `childdetails`
  MODIFY `ChildID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `childmonthlydetails`
--
ALTER TABLE `childmonthlydetails`
  MODIFY `ChildMonthlyID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `immunization`
--
ALTER TABLE `immunization`
  MODIFY `ImmunizationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vaccineschedule`
--
ALTER TABLE `vaccineschedule`
  MODIFY `VaccineId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `childmonthlydetails`
--
ALTER TABLE `childmonthlydetails`
  ADD CONSTRAINT `FK_ChildMonthlyDetails_ChildID` FOREIGN KEY (`ChildID`) REFERENCES `childdetails` (`ChildID`);

--
-- Constraints for table `immunization`
--
ALTER TABLE `immunization`
  ADD CONSTRAINT `immunization_ibfk_1` FOREIGN KEY (`ChildId`) REFERENCES `childdetails` (`ChildID`),
  ADD CONSTRAINT `immunization_ibfk_2` FOREIGN KEY (`VaccineId`) REFERENCES `vaccineschedule` (`VaccineId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
