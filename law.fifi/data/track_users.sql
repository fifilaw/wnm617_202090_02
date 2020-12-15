-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 15, 2020 at 01:16 PM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aauwnm_fifi`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_users`
--

CREATE TABLE `track_users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(64) NOT NULL,
  `lastname` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `gender` varchar(64) NOT NULL,
  `password` varchar(32) NOT NULL,
  `location` varchar(256) NOT NULL,
  `bio` text NOT NULL,
  `initial` varchar(64) NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_users`
--

INSERT INTO `track_users` (`id`, `firstname`, `lastname`, `username`, `email`, `gender`, `password`, `location`, `bio`, `initial`, `img`, `date_create`) VALUES
(1, 'Theresa', 'Lindsay', 'user1', 'user1@gmail.com', 'Female', '1a1dc91c907325c69271ddf0c944bc72', 'San Francisco ', 'Aute velit excepteur aute dolor qui ut eu ad consectetur. In dolore irure id et cupidatat labore.Aute velit excepteur aute dolor qui ut eu ad consectetur. In dolore irure id et cupidatat labore.Aute velit excepteur aute dolor qui ut eu ad consectetur. Blah blah blah', 'TL', 'uploads/1607667755.1726_meow_paws_phonecase.png', '2020-02-18 06:56:45'),
(2, 'Holden', 'Duncan', 'user2', 'user2@gmail.com', 'male', '1a1dc91c907325c69271ddf0c944bc72', 'Driftwood, North Dorkara', 'Hello this i', 'HD', 'uploads/1607837228.7955_bootsandcats.jpg', '2020-09-13 05:43:35'),
(54, '', '', 'hello', 'hello@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-01 00:22:58'),
(3, 'Terry', 'Potter', 'user3', 'user3@gmail.com', 'male', '1a1dc91c907325c69271ddf0c944bc72', 'Cresaptown', 'Et nisi ipsum excepteur in consequat do voluptate cupidatat sit tempor nostrud irure duis. Culpa cupidatat veniam ipsum nisi eu occaecat amet elit amet.', 'TP', 'https://via.placeholder.com/400/792/fff/?text=TP', '2020-01-11 10:43:57'),
(4, 'Juliana', 'Sandoval', 'user4', 'user4@gmail.com', 'female', '1a1dc91c907325c69271ddf0c944bc72', 'Holtville, North Carolina', 'Aliquip ex consectetur consequat pariatur ad reprehenderit reprehenderit non mollit exercitation nisi sunt. Sunt duis commodo eu consectetur irure exercitation.', 'JS', 'https://via.placeholder.com/400/829/fff/?text=JS', '2020-06-17 02:33:06'),
(5, 'Baird', 'Wynn', 'user5', 'user5@gmail.com', 'male', '1a1dc91c907325c69271ddf0c944bc72', 'Trexlertown, New Hampshire', 'Tempor voluptate sint id est officia nostrud elit aliqua. Mollit et magna proident reprehenderit dolore culpa ex cillum excepteur anim adipisicing.', 'BW', 'https://via.placeholder.com/400/708/fff/?text=BW', '2020-06-25 01:42:23'),
(6, 'Rasmussen', 'Kelley', 'user6', 'user6@gmail.com', 'male', '1a1dc91c907325c69271ddf0c944bc72', 'Edgar, West Virginia', 'Sint mollit consequat Lorem irure incididunt consequat Lorem nulla dolor velit aute laboris qui pariatur. Sint veniam esse proident ex id laboris adipisicing pariatur consectetur incididunt nulla laborum id.', 'RK', 'https://via.placeholder.com/400/916/fff/?text=RK', '2020-06-28 03:23:05'),
(7, 'Mattie', 'Dudley', 'user7', 'user7@gmail.com', 'female', '1a1dc91c907325c69271ddf0c944bc72', 'Accoville, Arkansas', 'Sint tempor aliqua sunt dolore in quis exercitation amet culpa aliquip dolor. Irure qui sint exercitation occaecat ea aute deserunt esse et velit magna ad aliquip ipsum.', 'MD', 'https://via.placeholder.com/400/915/fff/?text=MD', '2020-04-15 06:15:01'),
(8, 'Roberson', 'Haynes', 'user8', 'user8@gmail.com', 'male', '1a1dc91c907325c69271ddf0c944bc72', 'Jugtown, Vermont', 'Irure cillum est consectetur eiusmod pariatur amet. Anim culpa tempor ipsum mollit laboris id exercitation dolore sunt commodo esse pariatur.', 'RH', 'https://via.placeholder.com/400/910/fff/?text=RH', '2020-02-12 02:51:28'),
(9, 'Bates', 'Hicks', 'user9', 'user9@gmail.com', 'male', '1a1dc91c907325c69271ddf0c944bc72', 'Blairstown, Alabama', 'Commodo tempor dolor incididunt consequat laborum enim laboris voluptate ipsum. Culpa ad ipsum velit est nostrud labore aute occaecat.', 'BH', 'https://via.placeholder.com/400/826/fff/?text=BH', '2020-07-23 08:36:46'),
(10, 'Hatfield', 'Rollins', 'user10', 'user10@gmail.com', 'male', '1a1dc91c907325c69271ddf0c944bc72', 'Joes, Indiana', 'Do amet aute pariatur minim. Sit aliquip dolor pariatur veniam occaecat sunt occaecat anim anim do.', 'HR', 'https://via.placeholder.com/400/918/fff/?text=HR', '2020-06-05 01:29:01'),
(29, '', '', 'ggqw', 'dsfd@gamil.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 19:15:28'),
(31, '', '', 'fdgfd', 'fgfg@gmail.com', '', '81dc9bdb52d04dc20036dbd8313ed055', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 19:20:03'),
(28, '', '', 'fifilaw', 'fif@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 19:12:55'),
(33, '', '', 'fdghkjer', 'gdrtrsfs@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 19:24:40'),
(34, '', '', 'jkjhk', 'ghjg@gmail.cpm', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 19:59:50'),
(35, '', '', 'trytry', 'trytry@gmail.xom', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 20:01:26'),
(36, '', '', 'yiuyi', 'fgtyht@gmail.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 20:03:46'),
(37, '', '', 'tyt', 'rftyrytr@gmail.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 20:04:36'),
(38, '', '', 'tytere', 'rferetyrytr@gmail.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 20:06:43'),
(39, '', '', 'trytr', 'tryi65@gmail.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 20:41:21'),
(40, '', '', 'ujytiui', 'gfdf@gmail.xcom', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 20:43:19'),
(41, '', '', 'ythgh', 'gfhg@gmail.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 20:45:35'),
(42, '', '', 'fgfdg213', 'erte@gmail.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 20:48:21'),
(43, '', '', 'opopw', 'qweop@gmial.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 21:02:48'),
(44, '', '', 'ttuyu', 'tewe@gmial.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 21:06:24'),
(45, '', '', 'ghgfh', 'gf@gmal.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 21:09:05'),
(46, '', '', 'hgjhg', 'fgf@gmail.cxom', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 21:10:43'),
(47, '', '', 'test23', '23@gaml.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 22:38:27'),
(48, '', '', 'uiyu', 'ere@gmial.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 22:39:59'),
(61, '', '', 'abs', 'abs@gamil.com', 'female', '1a1dc91c907325c69271ddf0c944bc72', 'San Francisco ', 'gdfgldg', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-11 00:33:36'),
(50, '', '', 'tyt23', 'tytry@gmail.com', '', '202cb962ac59075b964b07152d234b70', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 22:42:27'),
(51, 'fdgdf', 'ghgh', 'ghggjg', 'ghg@gmail.com', 'female', '202cb962ac59075b964b07152d234b70', 'San Francisco ', 'ghgjhgj', '', 'https://via.placeholder.com/400/?text=USER', '2020-11-30 22:46:05'),
(62, 'Ho', 'Lau', 'hoho', 'ho@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-11 12:26:33'),
(63, 'Fifi00', 'Lawy', 'gg', 'ghg1@gmail.com', 'ghjhg', '1a1dc91c907325c69271ddf0c944bc72', 'yuy', 'hgjhgjh', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-11 12:33:47'),
(60, 'Fifi', 'Law', 'user0', 'user0@gmail.com', 'Female', '1a1dc91c907325c69271ddf0c944bc72', 'San Leandro, CA', 'This is Fifi, who likes cats and food. ', '', 'uploads/1607671908.2996_IMG_20171227_202108_257 (1).jpg', '2020-12-10 23:38:21'),
(55, 'Hello', 'Law', 'hello2', 'hello2@gamil.com', 'female', '1a1dc91c907325c69271ddf0c944bc72', 'San Francisco ', 'this is hello', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-01 00:24:31'),
(56, 'New', 'Test', 'New', 'new@gmail.com', 'Female', '1a1dc91c907325c69271ddf0c944bc72', 'San Francisco ', 'Hi this is a new test.', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-01 09:52:17'),
(64, 'jkj', 'jkh', 'jkjkj', 'jk@gmail', 'female', '1a1dc91c907325c69271ddf0c944bc72', 'San Francisco ', 'fghgfhghjgjkjkjkjkjk', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-11 12:35:46'),
(58, 'ghgj', 'hgjhg', 'erkewj', 'fifiawedqw@gmail.com', 'hjhg', '1a1dc91c907325c69271ddf0c944bc72', 'hgjhg', 'fgjhjg', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-02 14:01:20'),
(65, 'fgfgf', 'fgdgdfh', 'ggwp', 'ggwp@gmai.com', '', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-11 18:21:24'),
(66, 'ggwp1', 'lad', 'ggwp2', 'ggwp2@gamilc.om', '', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-11 18:22:20'),
(67, 'Jony', 'Saw', 'jonysaw', 'jonysa@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-13 14:27:20'),
(68, 'test112', 'test112', 'test112', 'test112@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-13 14:36:29'),
(69, 'Chu', 'chu', 'chu', 'chu@gmail.com', 'female', '1a1dc91c907325c69271ddf0c944bc72', 'San Francisco ', 'hello', '', 'images/user-icon.svg', '2020-12-13 23:38:05'),
(70, 'grey', 'grtey', 'grey', 'grey@gmail.com', '', 'ca50000a180a293de0b27acb67a695cb', '', '', '', 'images/user-icon.svg', '2020-12-14 14:08:55'),
(71, 'bye', 'bye', 'bye3', 'bye2@gmail.com', 'female', '1a1dc91c907325c69271ddf0c944bc72', 'San Francisco ', 'byebye', '', 'uploads/1608016078.926_IMG_20171227_202108_257.jpg', '2020-12-15 00:06:20'),
(72, 'Karl', 'Karl', 'Kale', 'kale@gmail.com', '', '1a1dc91c907325c69271ddf0c944bc72', '', '', '', 'images/user-icon.svg', '2020-12-15 01:56:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_users`
--
ALTER TABLE `track_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_users`
--
ALTER TABLE `track_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
