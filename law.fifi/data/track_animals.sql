-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 15, 2020 at 01:14 PM
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
-- Table structure for table `track_animals`
--

CREATE TABLE `track_animals` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `gender` varchar(64) NOT NULL,
  `breed` varchar(64) NOT NULL,
  `color` varchar(128) NOT NULL,
  `coat` varchar(128) NOT NULL,
  `size` varchar(128) NOT NULL,
  `neutered` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_animals`
--

INSERT INTO `track_animals` (`id`, `user_id`, `name`, `gender`, `breed`, `color`, `coat`, `size`, `neutered`, `description`, `img`, `date_create`) VALUES
(1, 5, 'Architax', 'Boy', 'Maine Coon', 'Black', 'Medium', 'Small', 'Yes', 'Ullamco officia id labore in duis minim dolor nulla adipisicing Lorem ad et non. Dolore tempor labore nisi officia sint ullamco laborum do nisi sit in voluptate.', 'https://via.placeholder.com/400/758/fff/?text=Architax', '2020-01-30 05:39:54'),
(2, 1, 'Accufarm', 'Boy', 'Maine Coon', 'Black', 'Short', 'Large', 'No', 'Quis culpa incididunt enim elit pariatur. Minim commodo dolore officia eiusmod ea deserunt sint ex adipisicing.', 'https://via.placeholder.com/400/894/fff/?text=Accufarm', '2020-03-31 07:23:13'),
(3, 10, 'Xeronk', 'Girl', 'Siamese', 'Black', 'Long', 'Medium', 'Yes', 'Tempor ex commodo minim laboris ex occaecat aute amet ullamco esse voluptate do est. Incididunt exercitation voluptate amet duis cupidatat.', 'https://via.placeholder.com/400/853/fff/?text=Xeronk', '2020-06-13 07:56:59'),
(4, 1, 'Earthplex', 'Boy', 'Maine Coon', 'Black', 'Medium', 'Medium', 'Yes', 'Non exercitation officia enim officia dolore laborum ex occaecat consectetur dolore dolor. Fugiat officia voluptate cupidatat esse esse ipsum laborum sit velit.', 'https://via.placeholder.com/400/879/fff/?text=Earthplex', '2020-09-24 05:40:25'),
(5, 10, 'Interloo', 'Boy', 'Maine Coon', 'Black', 'Short', 'Small', 'No', 'Sunt excepteur cillum eiusmod nulla velit qui laboris ex deserunt laborum proident incididunt. Eiusmod exercitation quis quis amet occaecat eu commodo Lorem.', 'https://via.placeholder.com/400/970/fff/?text=Interloo', '2020-06-08 09:58:22'),
(6, 1, 'Ultrimax', 'Boy', 'Maine Coon', 'Tri-color', 'Long', 'Small', 'Yes', 'Esse anim anim deserunt nostrud. Occaecat nostrud esse velit magna ut reprehenderit et ipsum pariatur consectetur occaecat mollit.', 'https://via.placeholder.com/400/710/fff/?text=Ultrimax', '2020-10-02 12:53:10'),
(7, 3, 'Digitalus', 'Boy', 'Tabby', 'Ginger', 'Long', 'Large', 'Yes', 'Pariatur magna aliqua mollit laboris nisi. Commodo cillum occaecat reprehenderit labore adipisicing sunt proident do aliqua in commodo cupidatat occaecat.', 'https://via.placeholder.com/400/878/fff/?text=Digitalus', '2020-06-22 07:45:54'),
(8, 4, 'Combot', 'Girl', 'Rag doll', 'Tri-color', 'Medium', 'Medium', 'Yes', 'Adipisicing ad commodo enim exercitation. Minim reprehenderit ullamco id tempor non non cupidatat laborum Lorem laborum officia.', 'https://via.placeholder.com/400/923/fff/?text=Combot', '2020-06-02 01:34:36'),
(9, 3, 'Sawy', 'Girl', 'Siamese', 'Tri-color', 'Long', 'Large', 'Yes', 'Duis ea consequat et qui nostrud occaecat minim. Magna ullamco fugiat eu consectetur laborum cillum enim et sint do nisi.', 'https://via.placeholder.com/400/841/fff/?text=Savvy', '2020-01-09 08:19:38'),
(10, 8, 'Isoswitch', 'Girl', 'Maine Coon', 'Tri-color', 'Short', 'Large', 'Yes', 'Nisi Lorem voluptate anim commodo ullamco officia dolore commodo ut quis tempor mollit. Magna adipisicing eiusmod proident nostrud in consectetur deserunt ex.', 'https://via.placeholder.com/400/838/fff/?text=Isoswitch', '2020-10-09 09:17:40'),
(11, 4, 'Extrawear', 'Girl', 'Siamese', 'Grey', 'Short', 'Small', 'Yes', 'Incididunt ea commodo dolor aliqua ullamco aute aliquip ut eiusmod. Quis id aliqua non commodo elit veniam incididunt officia.', 'https://via.placeholder.com/400/820/fff/?text=Extrawear', '2020-05-14 05:01:53'),
(12, 8, 'Andryx', 'Girl', 'Siamese', 'Ginger', 'Medium', 'Medium', 'No', 'Eiusmod non pariatur ad mollit amet ut cupidatat quis do amet minim excepteur. Aute sunt eu irure Lorem ut Lorem deserunt minim esse.', 'https://via.placeholder.com/400/748/fff/?text=Andryx', '2020-06-23 02:18:47'),
(13, 1, 'Venus', 'Girl', 'Tabby', 'Tri-color', 'Short', 'Small', 'Yes', 'Venus is a cute cat that loves to play.', 'uploads/1607494670.894_20180123_191714.jpg', '2020-06-17 01:46:00'),
(70, 1, 'Sweetie', 'Girl', 'tabby', 'grey and white', 'short', 'small', 'Yes', '', 'uploads/1607663505.7297_20190720_201224.jpg', '2020-12-10 22:11:57'),
(14, 9, 'Permadyne', 'Girl', 'Tabby', 'Tri-color', 'Long', 'Large', 'Yes', 'Eiusmod officia officia anim aute ullamco proident ex qui id id pariatur cupidatat amet. Nisi aliqua amet est aliqua incididunt deserunt.', 'https://via.placeholder.com/400/992/fff/?text=Permadyne', '2020-01-29 02:46:10'),
(15, 7, 'Entroflex', 'Boy', 'Tabby', 'Tri-color', 'Long', 'Medium', 'Yes', 'Veniam enim nulla elit nulla. Est sunt fugiat do nisi.', 'https://via.placeholder.com/400/984/fff/?text=Entroflex', '2020-06-12 08:47:24'),
(16, 2, 'Animalia', 'Boy', 'Rag doll', 'Black', 'Short', 'Medium', 'Yes', 'Laboris deserunt ad ex laboris laboris deserunt cillum tempor nostrud veniam do. Veniam nisi dolore deserunt ullamco amet eiusmod elit enim.', 'https://via.placeholder.com/400/905/fff/?text=Animalia', '2020-07-13 06:52:23'),
(17, 8, 'Automon', 'Boy', 'Tabby', 'Black', 'Short', 'Large', 'No', 'Sit deserunt veniam magna ipsum ipsum quis consectetur irure. Culpa in adipisicing qui eu ullamco consectetur esse tempor id id dolor.', 'https://via.placeholder.com/400/976/fff/?text=Automon', '2020-03-24 02:25:53'),
(18, 2, 'Pheast', 'Girl', 'Siamese', 'Grey', 'Long', 'Large', 'No', 'Nulla occaecat ut ut duis eu commodo velit cillum sint in do. Proident duis aliquip culpa dolore nisi nulla nisi.', 'https://via.placeholder.com/400/936/fff/?text=Pheast', '2020-01-25 05:51:03'),
(19, 8, 'Nimon', 'Girl', 'Tabby', 'Grey', 'Medium', 'Medium', 'Yes', 'Consequat ad amet nulla id sint ullamco irure ullamco aliquip velit laboris et. Veniam proident tempor nisi ipsum ex nostrud duis anim cillum incididunt nostrud irure.', 'https://via.placeholder.com/400/895/fff/?text=Nimon', '2020-08-22 06:20:51'),
(20, 8, 'Apextri', 'Girl', 'Tabby', 'Ginger', 'Long', 'Large', 'Yes', 'Ex do consectetur nulla nostrud sint consequat consequat. Tempor minim laboris anim enim consectetur sit culpa ea nulla est minim.', 'https://via.placeholder.com/400/821/fff/?text=Apextri', '2020-01-18 08:38:45'),
(21, 1, 'Imageflow', 'Boy', 'Tabby', 'Black', 'Medium', 'Medium', 'No', 'Nisi cillum eu dolore consequat nostrud duis aute deserunt officia dolor. Ad adipisicing elit esse ad duis dolore fugiat proident ea esse voluptate cillum ipsum quis.', 'https://via.placeholder.com/400/775/fff/?text=Imageflow', '2020-05-28 05:23:33'),
(22, 2, 'Geekola', 'Girl', 'Rag doll', 'Ginger', 'Long', 'Medium', 'Yes', 'Do anim tempor veniam reprehenderit qui tempor dolor nulla. Fugiat non et laborum ipsum voluptate ad aliquip ullamco dolore cillum.', 'https://via.placeholder.com/400/817/fff/?text=Geekola', '2020-08-25 08:58:46'),
(23, 4, 'Mangelica', 'Girl', 'Siamese', 'Black', 'Medium', 'Medium', 'No', 'Cupidatat veniam ad esse laboris tempor amet et aute qui eiusmod ad. Ut in minim pariatur irure laboris aliquip in consequat amet irure anim incididunt.', 'https://via.placeholder.com/400/862/fff/?text=Mangelica', '2020-09-10 11:54:30'),
(24, 7, 'Ultrasure', 'Girl', 'Siamese', 'Tri-color', 'Medium', 'Large', 'Yes', 'Irure deserunt consectetur qui in adipisicing irure reprehenderit laborum qui ad pariatur. Ut magna officia amet ex aute aliqua laboris Lorem mollit amet sit aliquip ut minim.', 'https://via.placeholder.com/400/850/fff/?text=Ultrasure', '2020-01-05 11:07:50'),
(25, 1, 'Yurture', 'Boy', 'Siamese', 'Ginger', 'Long', 'Medium', 'Yes', 'Exercitation consequat in officia enim duis irure pariatur amet non do adipisicing veniam. Minim veniam ullamco sint culpa pariatur cillum quis proident esse.', 'https://via.placeholder.com/400/821/fff/?text=Yurture', '2020-08-30 01:36:09'),
(26, 9, 'Centrexin', 'Girl', 'Rag doll', 'Ginger', 'Medium', 'Small', 'No', 'Proident excepteur id Lorem pariatur exercitation ex magna magna magna magna incididunt aute. Minim Lorem ad nulla magna magna ad.', 'https://via.placeholder.com/400/920/fff/?text=Centrexin', '2020-04-08 05:11:52'),
(27, 1, 'Homelux', 'Boy', 'Maine Coon', 'Tri-color', 'Medium', 'Small', 'No', 'Non veniam Lorem consequat pariatur laborum anim ipsum. Voluptate qui id aliqua eu ullamco sit.', 'https://via.placeholder.com/400/821/fff/?text=Homelux', '2020-02-10 07:31:44'),
(28, 9, 'Insurety', 'Girl', 'Tabby', 'Grey', 'Short', 'Small', 'Yes', 'In cillum aliqua velit voluptate voluptate Lorem. Sunt Lorem nulla ex nisi proident ut voluptate Lorem duis.', 'https://via.placeholder.com/400/863/fff/?text=Insurety', '2020-05-14 12:50:48'),
(29, 5, 'Rooforia', 'Boy', 'Tabby', 'Black', 'Long', 'Medium', 'Yes', 'Deserunt nisi pariatur nostrud in fugiat. Nostrud ipsum sit magna et labore commodo aliquip reprehenderit fugiat incididunt laboris sit est.', 'https://via.placeholder.com/400/750/fff/?text=Rooforia', '2020-04-02 12:39:22'),
(30, 4, 'Koffee', 'Girl', 'Tabby', 'Black', 'Long', 'Small', 'No', 'Enim id culpa dolore ut sit occaecat. Culpa incididunt aute mollit fugiat.', 'https://via.placeholder.com/400/764/fff/?text=Koffee', '2020-03-20 10:16:48'),
(119, 5, 'new cat', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607921792.9105_IMG_20171227_202108_257.jpg', '2020-12-13 21:56:37'),
(120, 5, 'Nemo', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607921828.5481_IMG_20171227_202108_257.jpg', '2020-12-13 21:57:13'),
(32, 9, 'Empirica', 'Boy', 'Siamese', 'Ginger', 'Long', 'Medium', 'Yes', 'Culpa nulla elit consectetur est ipsum. Incididunt culpa nulla duis culpa est anim reprehenderit commodo.', 'https://via.placeholder.com/400/937/fff/?text=Empirica', '2020-05-06 01:06:37'),
(33, 3, 'Xleen', 'Boy', 'Siamese', 'Black', 'Long', 'Small', 'Yes', 'Nostrud eiusmod ad nostrud consectetur elit nostrud. Aute ex non anim reprehenderit aliqua.', 'https://via.placeholder.com/400/960/fff/?text=Xleen', '2020-04-08 01:14:33'),
(34, 10, 'Incubus', 'Girl', 'Maine Coon', 'Tri-color', 'Long', 'Small', 'No', 'Cupidatat enim sit nulla nostrud. Ad veniam fugiat esse ipsum commodo ex.', 'https://via.placeholder.com/400/823/fff/?text=Incubus', '2020-02-28 12:14:01'),
(35, 2, 'Thredz', 'Boy', 'Tabby', 'Black', 'Medium', 'Large', 'No', 'Sunt adipisicing nulla nisi anim id anim proident amet irure. Quis irure occaecat dolore quis consectetur cupidatat laboris ex.', 'https://via.placeholder.com/400/977/fff/?text=Thredz', '2020-06-24 08:57:35'),
(36, 3, 'Apexia', 'Boy', 'Siamese', 'Grey', 'Short', 'Medium', 'Yes', 'Do fugiat exercitation labore esse ullamco mollit eiusmod do eu esse eiusmod ipsum nisi amet. Dolore velit dolore incididunt consequat nulla voluptate nulla laboris quis est adipisicing.', 'https://via.placeholder.com/400/905/fff/?text=Apexia', '2020-06-27 02:56:44'),
(37, 7, 'Opticon', 'Girl', 'Tabby', 'Grey', 'Long', 'Large', 'Yes', 'Cillum ut do do exercitation incididunt anim nostrud. Labore nulla minim quis minim consequat adipisicing.', 'https://via.placeholder.com/400/945/fff/?text=Opticon', '2020-09-10 07:26:00'),
(38, 10, 'Slumberia', 'Boy', 'Maine Coon', 'Tri-color', 'Short', 'Large', 'No', 'Proident ullamco aute ut laborum sunt fugiat anim enim nisi laboris duis anim. Non qui ut fugiat sit irure sint et quis nostrud aute velit consectetur voluptate.', 'https://via.placeholder.com/400/991/fff/?text=Slumberia', '2020-03-06 07:46:47'),
(39, 8, 'Polarium', 'Girl', 'Siamese', 'Black', 'Medium', 'Medium', 'No', 'Eu id consectetur aliquip consectetur tempor est nisi. Qui dolore incididunt quis ut Lorem laboris magna aliquip minim incididunt id.', 'https://via.placeholder.com/400/955/fff/?text=Polarium', '2020-08-27 05:45:36'),
(40, 8, 'Cubix', 'Girl', 'Rag doll', 'Grey', 'Long', 'Medium', 'No', 'In occaecat ipsum pariatur fugiat duis excepteur. Commodo sint sint ipsum magna aliquip est amet quis ea cupidatat cupidatat.', 'https://via.placeholder.com/400/946/fff/?text=Cubix', '2020-06-09 08:02:07'),
(41, 3, 'Bedlam', 'Boy', 'Maine Coon', 'Ginger', 'Medium', 'Small', 'Yes', 'Duis magna enim non ipsum in sit sit magna anim sunt. Nisi et magna do magna occaecat dolore enim qui.', 'https://via.placeholder.com/400/956/fff/?text=Bedlam', '2020-10-06 01:37:35'),
(42, 5, 'Canopoly', 'Girl', 'Tabby', 'Ginger', 'Long', 'Medium', 'Yes', 'Minim quis aliquip labore velit et. Officia voluptate in anim eu irure consectetur tempor deserunt nostrud veniam aliqua magna.', 'https://via.placeholder.com/400/712/fff/?text=Canopoly', '2020-01-14 09:40:31'),
(43, 6, 'Maineland', 'Girl', 'Siamese', 'Ginger', 'Long', 'Large', 'Yes', 'Ea dolore minim elit do cupidatat Lorem ad commodo officia veniam esse. Ad officia laborum id eu culpa ut nulla amet ullamco mollit anim.', 'https://via.placeholder.com/400/801/fff/?text=Maineland', '2020-07-24 08:49:19'),
(44, 3, 'Earwax', 'Boy', 'Maine Coon', 'Brown', 'Medium', 'Large', 'Yes', 'Magna aliquip aliquip quis voluptate veniam laborum consequat incididunt excepteur quis officia. Veniam voluptate pariatur nostrud amet amet ea sint irure excepteur ad fugiat.', 'https://via.placeholder.com/400/827/fff/?text=Earwax', '2020-03-10 02:20:52'),
(107, 2, 'Suju', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607918740.1823_IMG_20171227_202108_257.jpg', '2020-12-13 21:05:45'),
(108, 2, 'new cat', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919506.957_IMG_20171227_202108_257.jpg', '2020-12-13 21:18:30'),
(109, 2, 'new cat', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919506.957_IMG_20171227_202108_257.jpg', '2020-12-13 21:18:37'),
(46, 3, 'Digigen', 'Girl', 'Siamese', 'Tri-color', 'Medium', 'Small', 'Yes', 'Qui veniam culpa labore deserunt cupidatat est eu anim officia minim in proident qui. Dolor aliqua cupidatat tempor duis laboris nulla.', 'https://via.placeholder.com/400/884/fff/?text=Digigen', '2020-06-26 12:07:48'),
(47, 7, 'Endipine', 'Boy', 'Maine Coon', 'Ginger', 'Short', 'Medium', 'No', 'Do cillum sit Lorem reprehenderit ut aute sit aliqua elit est officia. Lorem sint velit aliquip in ullamco esse cillum proident fugiat esse magna pariatur.', 'https://via.placeholder.com/400/803/fff/?text=Endipine', '2020-03-13 07:52:22'),
(48, 9, 'Frolix', 'Girl', 'Rag doll', 'Ginger', 'Short', 'Medium', 'No', 'Voluptate tempor laboris in et sit aliquip amet voluptate. Cupidatat dolor nisi irure consequat aliquip consectetur esse aliquip quis ex nisi.', 'https://via.placeholder.com/400/847/fff/?text=Frolix', '2020-03-29 11:00:52'),
(49, 8, 'Magnina', 'Girl', 'Maine Coon', 'Grey', 'Medium', 'Small', 'Yes', 'Amet officia magna elit consectetur pariatur ad nisi veniam consequat excepteur. Qui esse mollit ad occaecat aute amet do sint excepteur ut incididunt mollit.', 'https://via.placeholder.com/400/913/fff/?text=Magnina', '2020-10-08 03:00:21'),
(50, 5, 'Comtent', 'Boy', 'Maine Coon', 'Tri-color', 'Short', 'Small', 'No', 'Lorem nulla dolore dolore ex nisi. Veniam ipsum culpa ea dolore est adipisicing aute aute aliqua aliquip anim ea ullamco.', 'https://via.placeholder.com/400/903/fff/?text=Comtent', '2020-01-13 06:21:29'),
(67, 1, 'Nemo', 'Boy', 'Panda', 'grey and white', 'short', 'small', 'Yes', '${o.description}', 'https://via.placeholder.com/400/?text=CAT', '2020-12-10 22:02:32'),
(53, 1, 'cat4', 'Girl', 'Tabby', 'white', 'long', 'small', 'Yes', 'ghgfhdg', 'uploads/1607494202.4646_20181124_090324.jpg', '2020-11-30 21:51:46'),
(59, 57, 'new cat', 'Girl', 'Tabby', '', '', '', '', '', 'https://via.placeholder.com/400/?text=CAT', '2020-12-01 15:05:46'),
(71, 1, 'new cat', 'Girl', 'vb', 'vbv', 'vbvc', 'small', 'Yes', '', 'uploads/1607663548.4205_add-cat.png', '2020-12-10 22:12:37'),
(146, 71, 'new cat', 'Girl', 'tabby', 'grey and white', 'Short', 'Small', 'Yes', 'hello cat', 'uploads/1608016006.9426_IMG_20171227_202108_257.jpg', '2020-12-15 00:06:59'),
(69, 1, 'Nemo', 'Boy', 'Panda', 'grey and white', 'short', 'small', 'Yes', '', 'uploads/1607663394.3592_20200509_133050.jpg', '2020-12-10 22:10:04'),
(72, 1, 'new cat', 'Girl', 'vcbn', 'ghgf', 'fghfg', 'gfhgfh', 'Yes', 'gfhfg', 'uploads/1607663713.4777_cat-journal.png', '2020-12-10 22:15:23'),
(73, 1, 'fdgd', 'Girl', 'fdgdf', '', '', '', 'Yes', '', 'uploads/1607663781.0752_20200509_133050.jpg', '2020-12-10 22:16:25'),
(137, 65, 'Nemo', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607923768.3057_IMG_20171227_202108_257.jpg', '2020-12-13 22:29:32'),
(75, 1, 'Nemo', 'Boy', 'vb', 'vbv', 'short', 'small', 'Yes', '', 'uploads/1607664023.991_20181217_183515.jpg', '2020-12-10 22:20:33'),
(87, 1, 'cat pillow', 'Girl', 'Panda', 'grey and white', 'Medium', 'Large', 'No', '', 'uploads/1607667947.5435_meow_paws_pillow.png', '2020-12-10 23:26:24'),
(77, 1, 'Nemo', 'Girl', 'vb', 'vbv', 'ghg', 'cvbv', 'Yes', '', 'uploads/1607664099.7932_20200509_133050.jpg', '2020-12-10 22:21:43'),
(110, 2, '', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919524.5891_IMG_20171227_202108_257.jpg', '2020-12-13 21:18:45'),
(84, 1, 'bwe catttt', 'Girl', '', '', '', '', 'Yes', '', 'uploads/1607665439.512_IMG-20191103-WA0012.jpg', '2020-12-10 22:44:07'),
(85, 1, 'Nemo', 'Girl', 'Tabby', '', 'Long', 'Large', 'Yes', '', 'uploads/1607667828.4468_iconic_meow_stickers.png', '2020-12-10 22:49:03'),
(143, 60, 'Brownie', 'Boy', 'American Shorthair', 'Brown and white', 'Long', 'Medium', 'Yes', 'Brownie is a beautiful cat that lives near the trail path in San Leandro. He likes to walk around near the lake and enjoys the breeze of the wind. ', 'uploads/1608010320.7035_20200730_200538.jpg', '2020-12-14 22:33:56'),
(88, 60, 'Panda', 'Boy', 'Tuxedo', 'Black and white', 'Short', 'Small', 'No', 'Panda is a tuxedo cat lives in Berkeley. He likes people and is very talkative .', 'uploads/1607671501.8763_20181124_090324.jpg', '2020-12-11 00:29:13'),
(89, 60, 'Fluffy', 'Boy', 'Rag doll', 'Multicolor', 'Long', 'Medium', 'Yes', 'Fluffy is a sweet boy lives in a Hayward apartment complex. He loves to talk and is not afraid of strangers.', 'uploads/1607673953.8437_20201128_202317.jpg', '2020-12-11 01:07:29'),
(92, 60, 'Brewery ', 'Boy', 'Tabby', 'Brown and black', 'Medium', 'Medium', 'No', 'Brewery is a street cat that lives near a brewery in Oakland, close to the Fruitvale Bart Station.', 'uploads/1607845401.5538_20201018_130246.jpg', '2020-12-13 00:07:04'),
(93, 60, 'Alex', 'Boy', 'American Shorthair', 'White, black and brown', 'Short', 'Medium', 'Yes', 'Alex is naughty cat that lives around the trail path of Mariner Park in San Leandro. He likes to eat and always yell for food. ', 'uploads/1607843482.0411_20200729_194819.jpg', '2020-12-13 00:13:00'),
(94, 60, 'Burton', 'Boy', 'Tuxedo', 'Black and White', 'Short', 'Medium', 'No', 'Burton is a cat lives near my neighborhood. He likes to hide under the bushes and walks around the fence.', 'uploads/1607845013.1656_20200906_192333.jpg', '2020-12-13 00:38:09'),
(111, 2, '', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919524.5891_IMG_20171227_202108_257.jpg', '2020-12-13 21:18:52'),
(112, 2, '', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919524.5891_IMG_20171227_202108_257.jpg', '2020-12-13 21:18:56'),
(113, 2, '', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919556.7648_IMG_1691.jpg', '2020-12-13 21:19:25'),
(114, 2, '', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919556.7648_IMG_1691.jpg', '2020-12-13 21:19:29'),
(115, 2, '', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919556.7648_IMG_1691.jpg', '2020-12-13 21:19:39'),
(116, 2, '', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919556.7648_IMG_1691.jpg', '2020-12-13 21:19:42'),
(117, 2, '', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919681.4996_IMG_20171227_202108_257.jpg', '2020-12-13 21:21:24'),
(118, 65, 'new cat', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607919999.1122_IMG_20171227_202108_257.jpg', '2020-12-13 21:26:43'),
(138, 5, 'new cat', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607925585.9952_IMG_20171227_202108_257.jpg', '2020-12-13 22:59:49'),
(142, 60, 'Jeff', 'Boy', 'Tabby', 'Ginger', 'Short', 'Medium', 'Yes', 'Jeff is a ginger cat that lives near the trail path in San Leandro. He is afraid of human and often run away if we don\'t maintain a certain distance from him.', 'uploads/1608010088.925_20200728_195005.jpg', '2020-12-14 22:29:00'),
(133, 5, 'Juju', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607922396.4691_IMG_20171227_202108_257.jpg', '2020-12-13 22:06:41'),
(134, 5, 'meow', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607922441.2276_IMG_20171227_202108_257.jpg', '2020-12-13 22:07:27'),
(140, 70, 'jjk;;\'', 'Girl', 'nkl;;', '', 'Medium', 'Medium', 'No', '', '', '2020-12-14 14:10:09'),
(139, 69, 'pastaq', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1607927912.2669_iltalian@2x.png', '2020-12-13 23:38:39'),
(141, 60, 'Dirty', 'Girl', 'American shorthair', 'White and brown', 'Short', 'Small', 'No', 'Dirty is a dirty cat and I found under a car close to my house. Looks thin and unhealthy.', 'uploads/1608008337.7292_IMG-20190521-WA0007.jpg', '2020-12-14 22:00:55'),
(144, 3, 'new cat', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1608015481.1117_IMG_20171227_202108_257.jpg', '2020-12-14 23:58:07'),
(145, 3, 'new cat2', 'Girl', '', '', 'Short', 'Small', 'Yes', '', 'uploads/1608015512.9638_IMG_20171227_202108_257.jpg', '2020-12-14 23:58:38'),
(147, 71, 'Suju', 'Boy', 'Tabby', 'grey and white', 'Short', 'Medium', 'Yes', 'Suju is fat', 'uploads/1608016212.4113_IMG_1691.jpg', '2020-12-15 00:07:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_animals`
--
ALTER TABLE `track_animals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_animals`
--
ALTER TABLE `track_animals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
