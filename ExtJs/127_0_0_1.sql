-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 25, 2021 at 04:44 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grid`
--
DROP DATABASE IF EXISTS `grid`;
CREATE DATABASE IF NOT EXISTS `grid` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `grid`;

-- --------------------------------------------------------

--
-- Table structure for table `modelcars`
--
-- Creation: Nov 08, 2020 at 06:07 PM
-- Last update: Dec 04, 2020 at 09:10 AM
--

DROP TABLE IF EXISTS `modelcars`;
CREATE TABLE IF NOT EXISTS `modelcars` (
  `modelcarId` int(11) NOT NULL AUTO_INCREMENT,
  `modelcarCategory` varchar(100) DEFAULT NULL,
  `modelcarName` varchar(100) DEFAULT NULL,
  `vendorId` int(11) DEFAULT NULL,
  `vendorName` varchar(100) DEFAULT NULL,
  `hide` int(11) NOT NULL,
  PRIMARY KEY (`modelcarId`),
  KEY `vendorId` (`vendorId`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `modelcars`
--

INSERT INTO `modelcars` (`modelcarId`, `modelcarCategory`, `modelcarName`, `vendorId`, `vendorName`, `hide`) VALUES
(1, 'Trucks and Buses', '1940 Ford Pickup Truck', 4, 'Motor City Art Classics', 0),
(2, 'Trucks and Buses', '1957 Chevy Pickup', 2, 'Gearbox Collectibles', 0),
(3, 'Classic Cars', '1972 Alfa Romeo GTA', 2, 'Motor City Art Classics', 0),
(4, 'Motorcycles', '2003 Harley-Davidson Eagle Drag Bike', 4, 'Studio M Art Models', 0),
(5, 'Motorcycles', '1996 Moto Guzzi 1100i', 1, 'Motor City Art Classics', 0),
(6, 'Classic Cars', '1952 Alpine Renault 1300', 4, 'Studio M Art Models', 0),
(7, 'Classic Cars', '1993 Mazda RX-7', 1, 'Motor City Art Classics', 0),
(8, 'Classic Cars', '1965 Aston Martin DB5', 2, 'Motor City Art Classics', 0),
(9, 'Classic Cars', '1998 Chrysler Plymouth Prowler', 3, 'Unimax Art Galleries', 0),
(10, 'Trucks and Buses', '1926 Ford Fire Engine', 2, 'Studio M Art Models', 0),
(20, 'car', '2020 Camry', 1, NULL, 0),
(19, 'xcvcx', 'vxcvcx', 4, NULL, 0),
(18, 'czx', 'csx', 1, NULL, 0),
(17, 'cla', '2019 Toyota Vios', 1, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--
-- Creation: Nov 08, 2020 at 06:08 PM
-- Last update: Nov 08, 2020 at 06:08 PM
--

DROP TABLE IF EXISTS `vendors`;
CREATE TABLE IF NOT EXISTS `vendors` (
  `vendorId` int(11) NOT NULL,
  `vendorName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`vendorId`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`vendorId`, `vendorName`) VALUES
(1, 'Motor City Art Classics'),
(2, 'Gearbox Collectibles'),
(3, 'Unimax Art Galleries'),
(4, 'Studio M Art Models');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
