-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2023 at 07:36 PM
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
-- Database: `gampahabotnicalgarden`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(255) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  `admin_pass` varchar(255) NOT NULL,
  `role` enum('admin','manager','zookeeper') NOT NULL,
  `ad_archived` enum('false','true') NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_email`, `admin_pass`, `role`, `ad_archived`) VALUES
(1, 'Admin', 'admin@gmail.com', '$2y$10$7rLSvRVyTQORapkDOqmkhetjF6H9lJHngr4hJMSM2lHObJbW5EQh6', 'admin', 'false'),
(6, 'Chandima Sanjeewa Wishwajith', 'chandimasanjeewa12345@gmail.com', '$2y$10$onnv2MUKxrIcNwn5kkMhtuDdcUlxsSm8m6QlQz7btL92up8PvCkxe', 'admin', 'false'),
(7, 'Chandima Sanjeewa Wishwajith', 'iit19015@std.uwu.ac.lk', '$2y$10$RQXzQ8aBKZ37I8mWk3qG.u3rOvSGxHr2gV5RFCHMyc3aaMzKbe2tu', 'admin', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `animals`
--

CREATE TABLE `animals` (
  `animal_id` int(11) NOT NULL,
  `an_given_name` varchar(255) NOT NULL,
  `an_species_name` varchar(255) NOT NULL,
  `an_dob` date NOT NULL,
  `an_gender` enum('m','f') NOT NULL,
  `an_avg_lifespan` varchar(255) NOT NULL,
  `location_id` int(11) NOT NULL,
  `an_dietary_req` varchar(255) NOT NULL,
  `an_natural_habitat` varchar(255) NOT NULL,
  `an_pop_dist` varchar(255) NOT NULL,
  `an_joindate` date NOT NULL,
  `an_height` float NOT NULL,
  `an_weight` float NOT NULL,
  `an_description` longtext NOT NULL,
  `class_id` int(11) NOT NULL,
  `an_med_record` longtext NOT NULL,
  `an_transfer` varchar(255) NOT NULL,
  `an_transfer_reason` longtext NOT NULL,
  `an_death_date` date NOT NULL,
  `an_death_cause` longtext NOT NULL,
  `an_incineration` varchar(255) NOT NULL,
  `an_archived` enum('true','false') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `application_id` int(11) NOT NULL,
  `a_fullname` varchar(255) NOT NULL,
  `a_email` varchar(255) NOT NULL,
  `a_phone` bigint(12) NOT NULL,
  `a_cv` varchar(255) NOT NULL,
  `vacancy_id` int(11) NOT NULL,
  `a_status` enum('unreviewed','accepted','rejected') NOT NULL DEFAULT 'unreviewed'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`application_id`, `a_fullname`, `a_email`, `a_phone`, `a_cv`, `vacancy_id`, `a_status`) VALUES
(1, 'Isuru Sanjana', 'IsuruSanjana@gmail.com', 7410001010, 'sample.pdf', 2, 'accepted'),
(2, 'Janeesha De Silva', 'Janeesha@gmail.com', 4500002036, 'sample.pdf', 3, 'rejected'),
(3, 'Himesh Fernando', 'Himesh@gmail.com', 6578540126, 'sample.pdf', 3, 'accepted'),
(4, 'Githmi Sanajana', 'GithmiSanjana123@gmail.com', 7854785470, 'sample.pdf', 4, 'rejected'),
(5, 'Kasun Udayanga', 'Kasun@gmail.com', 3333225550, 'sample.pdf', 5, 'accepted'),
(6, 'Thisara Rathnayake', 'Thisara@gmail.com', 7854500010, 'sample_1645287029.pdf', 6, 'unreviewed'),
(7, 'Chandima Sanjeewa', 'chandimsasanjeewa12345@gmail.com', 714127171, 'sample_1645287029_1693102050.pdf', 7, 'accepted'),
(8, 'Chandima Sanjeewa', 'chandimsasanjeewa12345@gmail.com', 704127171, 'Sample_1700394481.pdf', 4, 'accepted'),
(9, 'Chandima Sanjeewa', 'chandimsasanjeewa12345@gmail.com', 5454, 'Sample_1700460804.pdf', 6, 'unreviewed'),
(10, 'Chandima Sanjeewa', 'chandimsasanjeewa12345@gmail.com', 7141227171, 'Sample_1702381853.pdf', 8, 'unreviewed'),
(11, 'Tahrindu', 'chandimsasanjeewa12345@gmail.com', 714127171, 'Sample_1702467313.pdf', 9, 'accepted');

-- --------------------------------------------------------

--
-- Table structure for table `classifications`
--

CREATE TABLE `classifications` (
  `class_id` int(11) NOT NULL,
  `class_display_name` varchar(255) NOT NULL,
  `class_table_name` varchar(255) NOT NULL,
  `class_archived` enum('true','false') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `e_id` int(11) NOT NULL,
  `application_id` int(11) NOT NULL,
  `vacancy_id` int(11) NOT NULL,
  `e_archived` enum('true','false') NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`e_id`, `application_id`, `vacancy_id`, `e_archived`) VALUES
(2, 1, 2, 'false'),
(3, 3, 3, 'true'),
(4, 5, 5, 'false'),
(5, 7, 7, 'false'),
(6, 8, 4, 'false'),
(7, 11, 9, 'false');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` int(11) NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `event_description` varchar(255) NOT NULL,
  `event_start_date` date NOT NULL,
  `event_image` varchar(255) NOT NULL,
  `event_duration` varchar(255) NOT NULL,
  `event_archived` enum('false','true') NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_name`, `event_description`, `event_start_date`, `event_image`, `event_duration`, `event_archived`) VALUES
(2, 'Garden Christmas Fair 2023 ', 'The year we will host over 100 of the finest independent suppliers within the beautiful surroundings of the Garden. Stalls will be selling everything from handmade gifts and decorations to Christmas', '2023-12-23', 'chrismast_1699803100.jpg', '23/24/25', 'false'),
(3, 'Botanical Art Exhibition', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', '2023-12-30', 'download_1699803558.jfif', '  One Week ', 'false'),
(4, 'Nature Walks and Guided Tours', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', '2023-11-20', 'download (1)_1699803722.jfif', 'November 20, 2023 @ 10:00 AM - December  02, 2023 @ 4:00 PM', 'false'),
(5, 'Lectures and Workshops', 'Botanical gardens often host lectures, workshops, and educational programs on topics such as gardening, botany, and conservation.', '2023-09-14', 'download_1693102638.jfif', '4 Hours Session', 'false'),
(6, 'Lectures and Workshops', 'This is a sample event', '2023-11-28', 'wallpaperflare.com_wallpaper_1700394896.jpg', '  One Week ', 'true');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(11) NOT NULL,
  `f_firstname` varchar(255) NOT NULL,
  `f_lastname` varchar(255) NOT NULL,
  `f_email` varchar(255) NOT NULL,
  `f_subject` varchar(255) NOT NULL,
  `f_message` longtext NOT NULL,
  `visitor_id` int(11) NOT NULL,
  `f_reviewed` enum('true','false') NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `f_firstname`, `f_lastname`, `f_email`, `f_subject`, `f_message`, `visitor_id`, `f_reviewed`) VALUES
(6, 'Chandima', 'Sanjeewa', 'chandimasanjeewa12345@gmail.com', 'plant identification', '\"I would like to book an appointment for a weekend day for research purposes and request to meet with Miss Wasana. Please inform me promptly as this is an urgent matter related to an agency', 9, 'false'),
(7, 'Chandima', 'Sanjeewa', 'chandimasanjeewa12345@gmail.com', 'cxc', 'sd', 9, 'true'),
(8, 'Chandima', 'Sanjeewa', 'chandimasanjeewa12345@gmail.com', 'plant identification', 'wedwdwdwd', 9, 'true'),
(9, 'Chandima', 'Sanjeewa', 'chandimasanjeewa12345@gmail.com', 'plant identification', ' I want plant identification booking appoitment', 9, 'true'),
(10, 'Chandima', 'Sanjeewa', 'chandimasanjeewa12345@gmail.com', 'plant identification', 'This is a sample booking appoitment', 9, 'true'),
(11, 'Chandima', 'Sanjeewa Wishwajith', 'chandimasanjeewa12345@gmail.com', 'plant identification', 'Sample', 9, 'false'),
(12, 'Chandima', 'Sanjeewa Wishwajithx', 'chandimasanjeewa12345@gmail.com', 'plant identification', 'wdwadd', 9, 'false');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `g_id` int(11) NOT NULL,
  `g_file_name` varchar(255) NOT NULL,
  `g_file_type` enum('image','video') NOT NULL,
  `g_archived` enum('true','false') NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`g_id`, `g_file_name`, `g_file_type`, `g_archived`) VALUES
(24, 'WhatsApp Image 2023-08-27 at 00.18.54 (4)_1693100282.jpeg', 'image', 'true'),
(25, 'WhatsApp Image 2023-08-27 at 00.18.54 (2)_1693100294.jpeg', 'image', 'false'),
(27, 'WhatsApp Image 2023-11-12 at 12.26.23 (2)_1699772935.jpeg', 'image', 'false'),
(28, 'WhatsApp Image 2023-11-12 at 12.26.24_1699772947.jpeg', 'image', 'false'),
(29, 'WhatsApp Image 2023-11-12 at 12.26.23 (1)_1699772956.jpeg', 'image', 'false'),
(30, 'WhatsApp Image 2023-11-12 at 12.26.22_1699772963.jpeg', 'image', 'false'),
(31, 'WhatsApp Image 2023-11-12 at 12.26.24 (1)_1699772973.jpeg', 'image', 'false'),
(32, 'WhatsApp Image 2023-11-12 at 12.26.22 (3)_1699772989.jpeg', 'image', 'false'),
(33, 'WhatsApp Image 2023-11-12 at 12.26.24 (4)_1699773000.jpeg', 'image', 'false'),
(34, 'WhatsApp Image 2023-11-12 at 12.26.24 (6)_1699773013.jpeg', 'image', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `location_id` int(11) NOT NULL,
  `location_name` varchar(255) NOT NULL,
  `location_archived` enum('true','false') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`location_id`, `location_name`, `location_archived`) VALUES
(2, 'The Hothouse', 'false'),
(3, 'The Aquarium', 'false'),
(4, 'The Cages/Compounds', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `sponsored_animals`
--

CREATE TABLE `sponsored_animals` (
  `sa_id` int(11) NOT NULL,
  `animal_id` int(11) NOT NULL,
  `sponsor_id` int(11) NOT NULL,
  `sponsor_band` varchar(1) NOT NULL,
  `total_price` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `signage_photo` varchar(255) NOT NULL,
  `s_url` varchar(255) NOT NULL,
  `s_status` enum('unreviewed','accepted','rejected') NOT NULL DEFAULT 'unreviewed'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sponsors`
--

CREATE TABLE `sponsors` (
  `sponsor_id` int(11) NOT NULL,
  `s_client_name` varchar(255) NOT NULL,
  `s_existing_customer` enum('yes','no') NOT NULL,
  `s_phone_number` bigint(15) NOT NULL,
  `s_client_address` varchar(255) NOT NULL,
  `s_yearly_revenue` int(11) NOT NULL,
  `s_email` varchar(255) NOT NULL,
  `s_password` varchar(255) NOT NULL,
  `s_business_type` varchar(255) NOT NULL,
  `s_approved` enum('true','false','rejected') NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `sponsors`
--

INSERT INTO `sponsors` (`sponsor_id`, `s_client_name`, `s_existing_customer`, `s_phone_number`, `s_client_address`, `s_yearly_revenue`, `s_email`, `s_password`, `s_business_type`, `s_approved`) VALUES
(1, 'Kasun Udayanaga', 'no', 1450000010, 'Horana', 69000, 'KasunUdayanga@gmail.com', '$2y$10$BnAhFmbCII4qbtdjEn5SJOgPR3fETUirjns3TK8ZLDeDjI.Htnkwm', 'Test', 'true'),
(4, 'Thilini Perera', 'yes', 4547777740, 'piliyandala', 123123, 'perera@gmail.com', '$2y$10$BnAhFmbCII4qbtdjEn5SJOgPR3fETUirjns3TK8ZLDeDjI.Htnkwm', 'Test', 'true'),
(5, 'Githmi sanjana', 'yes', 7410250000, 'Matara', 120000, 'Githmi@gmail.com', '$2y$10$BnAhFmbCII4qbtdjEn5SJOgPR3fETUirjns3TK8ZLDeDjI.Htnkwm', 'Test', 'true'),
(6, 'Nimesh Sanjeewa', 'no', 7148587171, 'Colombo', 55000, 'Nimesh@gmail.com', '$2y$10$IdJFjQsGWesFcIDeHHDLHOt7dc9SfhM4g4HFdO5cz5vXES.4aN2ci', 'Test', 'true'),
(7, 'Isuru', 'yes', 714127171, 'ahbdjwd wd djwdnwkd jdbwd', 1000, 'chandimasanjeewa12345@gmail.com', '$2y$10$09b.Ey310S6npGNtrbGm/eE0kwiz9iTcqD0u8csh6enCn3by1IT6e', 'Individual business', 'true'),
(8, 'Janeesha', 'yes', 715235456, '22/5 Kiribathgoda', 10000, 'janessha@gmail.com', '$2y$10$MVf6A0j.iRt23HjIDp2iS.Vdp0tiLGP1Es4sIXjXhdici.hcmZHYe', 'Student', 'true'),
(12, 'Himesh Fernando', 'yes', 775881421, 'Kalagedihena Ambasewana Road  ', 50000, 'iit19008@std.uwu.ac.lk', '$2y$10$36c.luSqM/3al86/gVUFD.Bkl4FVh4ic.UslyfkO34VcRFszYN5QW', 'normal', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `testimonial_id` int(11) NOT NULL,
  `sponsor_id` int(11) NOT NULL,
  `test_message` varchar(255) NOT NULL,
  `posted_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`testimonial_id`, `sponsor_id`, `test_message`, `posted_date`) VALUES
(1, 1, 'Sponsor lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, laborum.\r\n', '2020-04-20 15:20:03'),
(2, 1, 'This is a demo message!!', '2020-04-20 18:15:00'),
(3, 4, 'You guys are the best! Keep up the great work!', '2020-04-20 15:20:03'),
(4, 4, 'I just wanted to share a quick note and let you know that you guys do a really good job. Iâ€™m glad I decided to work with you.', '2020-04-20 15:22:04'),
(5, 1, 'This is a second demo testimonial', '2020-05-01 17:13:38'),
(6, 5, 'This is just a demo testimonial', '2020-05-02 06:46:53'),
(7, 5, 'This is my second Testimonial for testing purpose.', '2022-02-20 16:41:33'),
(8, 7, 'This is My sample test', '2023-08-27 13:14:39'),
(9, 7, ' Chandima sanjeewa Wishwajith', '2023-11-12 06:30:47'),
(10, 7, 'jksdnskfsjfknsfnwkfjnswf', '2023-11-12 06:31:10'),
(11, 7, 'Garden Officer ', '2023-11-12 18:10:25'),
(12, 7, 'Horticulturist', '2023-11-12 18:13:28'),
(13, 7, 'Visitor Services Manager', '2023-11-12 18:15:08');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `ticket_id` int(11) NOT NULL,
  `book_name` varchar(255) NOT NULL,
  `child_num` int(11) NOT NULL,
  `student_num` int(11) NOT NULL,
  `regular_num` int(11) NOT NULL,
  `t_date` date NOT NULL,
  `visitor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`ticket_id`, `book_name`, `child_num`, `student_num`, `regular_num`, `t_date`, `visitor_id`) VALUES
(2, 'Chandima Sanjeewa', 0, 0, 1, '2023-11-20', 2),
(3, 'Himesh Fernando', 1, 2, 1, '2023-11-23', 2),
(4, 'Thilini Perera', 0, 1, 1, '2023-11-30', 4),
(5, 'Isuru Walmilla', 0, 0, 2, '2023-11-23', 5),
(6, 'Janeesha De Silva', 1, 0, 4, '2023-11-22', 8),
(7, 'Githmi Pereara', 1, 1, 2, '2023-12-13', 7),
(8, 'Kasun Udayanga', 0, 0, 2, '2023-11-23', 6),
(9, 'Chandima Sanjeewa', 4, 1, 2, '2023-11-29', 9),
(10, 'Chandima Sanjeewa Wishwajith', 2, 3, 4, '2023-12-28', 9),
(11, 'Chandima Sanjeewa Wishwajithx', 5, 5, 20, '2023-12-30', 9);

-- --------------------------------------------------------

--
-- Table structure for table `vacancies`
--

CREATE TABLE `vacancies` (
  `vacancy_id` int(11) NOT NULL,
  `v_position` varchar(255) NOT NULL,
  `v_description` longtext NOT NULL,
  `v_type` enum('temporary','permanent') NOT NULL,
  `v_start_date` date NOT NULL,
  `v_end_date` date NOT NULL,
  `v_archived` enum('true','false') NOT NULL DEFAULT 'false',
  `v_status` enum('available','closed') NOT NULL DEFAULT 'available'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `vacancies`
--

INSERT INTO `vacancies` (`vacancy_id`, `v_position`, `v_description`, `v_type`, `v_start_date`, `v_end_date`, `v_archived`, `v_status`) VALUES
(2, 'Receptionist', 'To do paperwork', 'permanent', '2020-04-16', '0000-00-00', 'false', 'closed'),
(3, 'Officer', 'Officer for management', 'temporary', '2023-10-25', '2024-08-29', 'false', 'closed'),
(4, 'Horticulturist', 'A horticulturist is a professional who specializes in the science and art of cultivating and growing plants. Horticulture is a broad field that encompasses the cultivation of fruits, vegetables, nuts, seeds, herbs, sprouts, mushrooms, algae, seaweeds, non-food crops such as grass and ornamental trees and plants.', 'permanent', '2023-11-16', '2024-03-14', 'false', 'closed'),
(5, 'Marketing manager', 'example', 'temporary', '2023-05-18', '2023-05-31', 'false', 'closed'),
(6, 'Landscape Architect/Designer', 'Landscape Architect/Designer plays a crucial role in planning, designing, and enhancing the overall layout and aesthetic appeal of the garden. Their work involves creating outdoor spaces that showcase the diverse plant collections, provide educational opportunities, and offer a pleasant experience for visitors.', 'permanent', '2023-11-16', '0000-00-00', 'false', 'available'),
(7, 'Botanist', 'Botanists study plants, including their classification, growth, and behavior. They often work in botanical gardens to research and conserve rare or endangered plant species.  We want Requirement Minimum B.Sc. In this fields and 4 Years Working experience.', 'permanent', '2023-09-30', '0000-00-00', 'false', 'closed'),
(8, 'Events Coordinator', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'temporary', '2023-11-12', '2024-11-16', 'false', 'available'),
(9, 'Botanist', 'This is Sample Vacancy', 'temporary', '2023-11-22', '2023-11-29', 'false', 'closed'),
(10, 'Manager', 'Accounting department', 'temporary', '2023-12-21', '2023-12-28', 'true', 'available'),
(11, 'Security', 'Protect', 'permanent', '2023-12-23', '0000-00-00', 'true', 'available'),
(12, 'Acountant', 'Sample', 'temporary', '2023-12-21', '2023-12-29', 'false', 'available');

-- --------------------------------------------------------

--
-- Table structure for table `visitors`
--

CREATE TABLE `visitors` (
  `visitor_id` int(11) NOT NULL,
  `v_firstname` varchar(255) NOT NULL,
  `v_lastname` varchar(255) NOT NULL,
  `v_email` varchar(255) NOT NULL,
  `v_address` varchar(255) NOT NULL,
  `v_password` varchar(255) NOT NULL,
  `v_archived` enum('true','false') NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `visitors`
--

INSERT INTO `visitors` (`visitor_id`, `v_firstname`, `v_lastname`, `v_email`, `v_address`, `v_password`, `v_archived`) VALUES
(2, 'Kasun', 'udayanga', 'kasun@gmail.com', 'Horana', '$2y$10$awCV8VjOeP5ZnLodVJhsxOWztKO/AU4wHWkusBPnivwcxnsKVb.Pu', 'false'),
(3, 'Thilini ', 'Perera', 'Thiliniperera@gmail.com', 'piliyandala', '$2y$10$1hxw1tUmiN1JglFYEYv2BOll7yFuxEbjSHvXAKyiAmTRwGJ9ukeve', 'false'),
(4, 'Githmi', 'perera', 'Githmi@gmail.com', 'Matara', '$2y$10$5L6GH0j/SfbGm503f/YinuqVOFXbO90/w3ogQbtK.Z.4iBVuqA/SG', 'true'),
(5, 'Thisara', 'Rathnayake', 'Thisara@gmail.com', 'Matale', '$2y$10$Rj4zujky260NlcP6IG35/.vyz/T3S21ziF.3mihwWIyi1GyR1cJ9C', 'false'),
(6, 'NImesh', 'Sanjana', 'Nimesh@gmail.com', 'Colombo', '$2y$10$dwC5gTXZP4kL5Xtl8HdcduBfqvjWekCiSsnLQZENudm3aYhNTiBFu', 'false'),
(7, 'Vidakna', 'Thisuri', 'thisuri@gmail.com', 'Kadawatha', '$2y$10$Ux2o5ZWyQPdRcOCvit7D1OKXqtin6xTjFwulBL91Rf7qXlnYzENPO', 'false'),
(8, 'Danushka', 'Prasad', 'Prasad@gmail.com', 'Badulla', '$2y$10$wvD4HqnfsJxYchEwUz1JN.eFy5PwFMeSt1flyn78GPstLoPKNpV6q', 'false'),
(9, 'Chandima', 'Sanjeewa Wishwajith', 'chandimasanjeewa12345@gmail.com', 'ashokarama street alawwaththa alawwa', '$2y$10$hQFYtOswiUOkTnlbOuElPO7C.zuCj497Su2XYQVHZi7m0A3wKahfy', 'false'),
(10, 'Chandima', 'Sanjeewa', 'iit19015@std.uwu.ac.lk', 'ashokarama street alawwaththa alawwa', '$2y$10$h0OgO8fx0tf7YK6WSzs79OMveJEhBNAWfsZy6zEjG/uPYmm8sfTWi', 'false');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `admin_email` (`admin_email`);

--
-- Indexes for table `animals`
--
ALTER TABLE `animals`
  ADD PRIMARY KEY (`animal_id`),
  ADD KEY `class_id` (`class_id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`application_id`),
  ADD KEY `vacancy_id` (`vacancy_id`);

--
-- Indexes for table `classifications`
--
ALTER TABLE `classifications`
  ADD PRIMARY KEY (`class_id`),
  ADD UNIQUE KEY `class_table_name` (`class_table_name`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`e_id`),
  ADD KEY `application_id` (`application_id`),
  ADD KEY `vacancy_id` (`vacancy_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedback_id`),
  ADD KEY `visitor_id` (`visitor_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`g_id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `sponsored_animals`
--
ALTER TABLE `sponsored_animals`
  ADD PRIMARY KEY (`sa_id`),
  ADD KEY `animal_id` (`animal_id`),
  ADD KEY `sponsor_id` (`sponsor_id`);

--
-- Indexes for table `sponsors`
--
ALTER TABLE `sponsors`
  ADD PRIMARY KEY (`sponsor_id`),
  ADD UNIQUE KEY `s_email` (`s_email`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`testimonial_id`),
  ADD KEY `sponsor_id` (`sponsor_id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`ticket_id`),
  ADD KEY `visitor_id` (`visitor_id`);

--
-- Indexes for table `vacancies`
--
ALTER TABLE `vacancies`
  ADD PRIMARY KEY (`vacancy_id`);

--
-- Indexes for table `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`visitor_id`),
  ADD UNIQUE KEY `v_email` (`v_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `animals`
--
ALTER TABLE `animals`
  MODIFY `animal_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `application_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `classifications`
--
ALTER TABLE `classifications`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `e_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `g_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sponsored_animals`
--
ALTER TABLE `sponsored_animals`
  MODIFY `sa_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sponsors`
--
ALTER TABLE `sponsors`
  MODIFY `sponsor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `testimonial_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `ticket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `vacancies`
--
ALTER TABLE `vacancies`
  MODIFY `vacancy_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `visitors`
--
ALTER TABLE `visitors`
  MODIFY `visitor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `animals`
--
ALTER TABLE `animals`
  ADD CONSTRAINT `fk_a_classifications` FOREIGN KEY (`class_id`) REFERENCES `classifications` (`class_id`),
  ADD CONSTRAINT `fk_a_locations` FOREIGN KEY (`location_id`) REFERENCES `locations` (`location_id`);

--
-- Constraints for table `applications`
--
ALTER TABLE `applications`
  ADD CONSTRAINT `fk_app_vacancies` FOREIGN KEY (`vacancy_id`) REFERENCES `vacancies` (`vacancy_id`);

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `fk_e_applications` FOREIGN KEY (`application_id`) REFERENCES `applications` (`application_id`),
  ADD CONSTRAINT `fk_e_vacancies` FOREIGN KEY (`vacancy_id`) REFERENCES `vacancies` (`vacancy_id`);

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `fk_f_visitor` FOREIGN KEY (`visitor_id`) REFERENCES `visitors` (`visitor_id`);

--
-- Constraints for table `sponsored_animals`
--
ALTER TABLE `sponsored_animals`
  ADD CONSTRAINT `fk_sa_animals` FOREIGN KEY (`animal_id`) REFERENCES `animals` (`animal_id`),
  ADD CONSTRAINT `fk_sa_sponsors` FOREIGN KEY (`sponsor_id`) REFERENCES `sponsors` (`sponsor_id`);

--
-- Constraints for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD CONSTRAINT `fk_t_sponsors` FOREIGN KEY (`sponsor_id`) REFERENCES `sponsors` (`sponsor_id`);

--
-- Constraints for table `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `fk_t_visitors` FOREIGN KEY (`visitor_id`) REFERENCES `visitors` (`visitor_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
