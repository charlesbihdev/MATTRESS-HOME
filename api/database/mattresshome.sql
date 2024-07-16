-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2024 at 03:32 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mattress-home`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Latex Foam', '2024-06-28 06:06:33', '2024-06-28 06:06:33'),
(2, 'Latex Foam', '2024-06-28 06:06:33', '2024-06-28 06:06:33'),
(3, 'Ashfoam', '2024-06-28 06:06:33', '2024-06-28 06:06:33'),
(4, 'Foreign Brand', '2024-06-28 06:06:33', '2024-06-28 06:06:33');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_06_13_012334_create_personal_access_tokens_table', 1),
(5, '2024_06_23_074916_create_categories_table', 1),
(6, '2024_06_24_022636_create_products_table', 1),
(7, '2024_06_24_022752_create_sizes_table', 1),
(8, '2024_06_25_021842_create_prices_table', 1),
(9, '2024_06_25_034930_create_product_pictures_table', 1),
(10, '2024_07_02_140732_create_payments_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `reference` varchar(255) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_phone` varchar(255) DEFAULT NULL,
  `customer_address` varchar(255) DEFAULT NULL,
  `customer_region` varchar(255) DEFAULT NULL,
  `customer_city` varchar(255) DEFAULT NULL,
  `currency` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `prices`
--

CREATE TABLE `prices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `size_id` bigint(20) UNSIGNED NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prices`
--

INSERT INTO `prices` (`id`, `product_id`, `size_id`, `price`, `created_at`, `updated_at`) VALUES
(131, 30, 1, '5090.00', '2024-07-14 17:59:15', '2024-07-14 21:39:56'),
(132, 30, 2, '4260.00', '2024-07-14 17:59:15', '2024-07-14 21:39:56'),
(133, 30, 3, '3230.00', '2024-07-14 17:59:15', '2024-07-14 21:39:56'),
(134, 30, 4, '2555.00', '2024-07-14 17:59:16', '2024-07-14 21:39:56'),
(135, 30, 5, '2211.00', '2024-07-14 17:59:16', '2024-07-14 21:39:56'),
(136, 31, 1, '7635.00', '2024-07-14 18:07:07', '2024-07-14 21:42:42'),
(137, 31, 2, '6545.00', '2024-07-14 18:07:07', '2024-07-14 21:42:42'),
(138, 31, 3, '4930.00', '2024-07-14 18:07:07', '2024-07-14 21:42:42'),
(139, 31, 4, '3830.00', '2024-07-14 18:07:07', '2024-07-14 21:42:42'),
(140, 31, 5, '3302.00', '2024-07-14 18:07:07', '2024-07-14 21:42:42'),
(141, 32, 1, '11870.00', '2024-07-14 18:14:01', '2024-07-14 21:44:14'),
(142, 32, 2, '10175.00', '2024-07-14 18:14:01', '2024-07-14 21:44:14'),
(143, 32, 3, '7635.00', '2024-07-14 18:14:01', '2024-07-14 21:44:14'),
(144, 32, 4, '5940.00', '2024-07-14 18:14:01', '2024-07-14 21:44:14'),
(145, 32, 5, '5085.00', '2024-07-14 18:14:01', '2024-07-14 21:44:14'),
(146, 33, 1, '6250.00', '2024-07-14 18:20:12', '2024-07-14 21:46:18'),
(147, 33, 2, '5525.00', '2024-07-14 18:20:12', '2024-07-14 21:46:18'),
(148, 33, 3, '4040.00', '2024-07-14 18:20:12', '2024-07-14 21:46:18'),
(149, 33, 4, '3180.00', '2024-07-14 18:20:12', '2024-07-14 21:46:18'),
(150, 33, 5, '2775.00', '2024-07-14 18:20:12', '2024-07-14 21:46:18'),
(151, 34, 1, '9105.00', '2024-07-14 18:26:56', '2024-07-14 21:48:22'),
(152, 34, 2, '7825.00', '2024-07-14 18:26:56', '2024-07-14 21:48:22'),
(153, 34, 3, '5875.00', '2024-07-14 18:26:56', '2024-07-14 21:48:22'),
(154, 34, 4, '4565.00', '2024-07-14 18:26:56', '2024-07-14 21:48:22'),
(155, 34, 5, '3920.00', '2024-07-14 18:26:56', '2024-07-14 21:48:23'),
(156, 35, 1, '4494.00', '2024-07-14 19:11:42', '2024-07-14 19:11:42'),
(157, 35, 2, '3847.00', '2024-07-14 19:11:42', '2024-07-14 19:11:42'),
(158, 35, 3, '2888.00', '2024-07-14 19:11:42', '2024-07-14 19:11:42'),
(159, 35, 4, '2299.00', '2024-07-14 19:11:42', '2024-07-14 19:11:42'),
(160, 35, 5, '1929.00', '2024-07-14 19:11:42', '2024-07-14 19:11:42'),
(161, 36, 1, '2500.00', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(162, 36, 2, '2100.00', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(163, 36, 3, '1800.00', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(164, 36, 4, '1500.00', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(165, 36, 5, '1200.00', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(166, 37, 1, '5090.00', '2024-07-14 19:17:49', '2024-07-14 19:17:49'),
(167, 37, 2, '4260.00', '2024-07-14 19:17:49', '2024-07-14 19:17:49'),
(168, 37, 3, '3230.00', '2024-07-14 19:17:49', '2024-07-14 19:17:49'),
(169, 37, 4, '2555.00', '2024-07-14 19:17:49', '2024-07-14 19:17:49'),
(170, 37, 5, '2213.00', '2024-07-14 19:17:49', '2024-07-14 19:17:49'),
(171, 38, 1, '2886.00', '2024-07-14 21:54:05', '2024-07-14 21:54:05'),
(172, 38, 2, '2470.00', '2024-07-14 21:54:05', '2024-07-14 21:54:05'),
(173, 38, 3, '1884.00', '2024-07-14 21:54:05', '2024-07-14 21:54:05'),
(174, 38, 4, '1482.00', '2024-07-14 21:54:05', '2024-07-14 21:54:05'),
(175, 38, 5, '1260.00', '2024-07-14 21:54:05', '2024-07-14 21:54:05'),
(176, 39, 1, '2646.00', '2024-07-14 21:58:31', '2024-07-14 21:58:31'),
(177, 39, 2, '2269.00', '2024-07-14 21:58:31', '2024-07-14 21:58:31'),
(178, 39, 3, '1699.00', '2024-07-14 21:58:31', '2024-07-14 21:58:31'),
(179, 39, 4, '1331.00', '2024-07-14 21:58:31', '2024-07-14 21:58:31'),
(180, 39, 5, '1136.00', '2024-07-14 21:58:31', '2024-07-14 21:58:31'),
(181, 40, 1, '3241.00', '2024-07-14 22:03:43', '2024-07-14 22:03:43'),
(182, 40, 2, '2757.00', '2024-07-14 22:03:43', '2024-07-14 22:03:43'),
(183, 40, 3, '2069.00', '2024-07-14 22:03:43', '2024-07-14 22:03:43'),
(184, 40, 4, '1602.00', '2024-07-14 22:03:43', '2024-07-14 22:03:43'),
(185, 40, 5, '1393.00', '2024-07-14 22:03:43', '2024-07-14 22:03:43');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `stars` int(10) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `stars`, `category_id`, `description`, `created_at`, `updated_at`) VALUES
(30, 'Orthopaedic honeymoon mattress', 5, 2, 'A composite mattress made up of heat-treated spring coils completely filled and wrapped with High Density Foam and covered with Belgium Jacquard Quilts, it is ideal for back pain', '2024-07-14 17:59:15', '2024-07-14 17:59:15'),
(31, 'Princess honeymoon spring mattress', 5, 2, 'A composite mattress made up of heat-treated spring coils completely filled with High Density Foam and wrapped with High Resilient Foam and covered with Jacquard Quilts. It is ideal for back pain.', '2024-07-14 18:07:07', '2024-07-14 18:07:07'),
(32, 'Prestige pocketed mattress', 5, 2, 'Over 1,500 nested Pocket Springs (in a standard double size), each protected in its own individual pocket, compress and expand individually complying with your body shape. This mattress is divided in 5 zones, each of a different type of spring, providing health support while sleeping. In addition, a layer of High Resilient foam is fitted at the surface, enabling the mattress to mold to your body at the highest precision, hence providing you with truly healthy recuperative sleep', '2024-07-14 18:14:01', '2024-07-14 18:14:01'),
(33, 'Ultraflex 8 foam mattress', 4, 2, 'An ultra flexible, High Resilience Polyurethane foam mattress covered with Belgium Jacquard Quilts that provides excellent relaxation and body support.', '2024-07-14 18:20:12', '2024-07-14 18:20:12'),
(34, 'Anti-stress \'10 memory foam mattress', 5, 2, 'Latex Foam Anti-Stress pressure reducing memory foam mattresses are made of advanced hypo-allergenic fungi and anti-microbial Visco-Elastic foam. This technology was originally developed by NASA space program and was used on space shuttles, to relieve pressure on astronauts caused by G-Force during takeoff. Today, Latex Foam is using this technology in manufacturing the new Anti-Stress mattress, to provide the perfect amount of support over an extended period of time.', '2024-07-14 18:26:55', '2024-07-14 18:26:55'),
(35, 'Memory Foam Flex mattress', 5, 3, 'Introducing our Memory Foam Flex mattress for the best sleep of your life!\r\n– 🌟 Affordable memory foam technology for ultimate comfort.\r\n– 🙌 Say goodbye to joint pain and pressure points.\r\n– 🛌 Enjoy motion isolation for undisturbed sleep.\r\n– ☁️ Experience a cloud-like feel with a firm base.\r\n– 💤 Ideal for all sleep positions.\r\n– 💰 Get the benefits of memory foam at an affordable price.\r\n😴 Don’t miss out on the sleep upgrade you deserve!', '2024-07-14 19:11:41', '2024-07-14 19:11:41'),
(36, 'Bueno Mattress', 5, 3, 'Perfect for side and back sleepers. Individually foam-wrapped springs evenly distribute body weight for a restful night’s sleep.', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(37, 'Orthopaedic Mattress', 5, 3, 'Orthopaedic mattresses are highly recommended to people with back and joint problems. Fully supportive of your spine, our Orthopaedic Mattress is made of Bonnell spring coils, which are infused with high-density foam and trimmed. An extra sheet of foam is added to each side of the mattress for extra support and comfort, relieving you from aches and pains each morning. The quilted jacquard cover provides a luxurious experience for every sleeper.', '2024-07-14 19:17:48', '2024-07-14 19:17:48'),
(38, 'Polyester Covered 9inch High Density Foam Mattess', 5, 2, 'A complete foam mattress of high density foam covered with Belgium Jacquard Quilts for good sleeping comfort.', '2024-07-14 21:54:05', '2024-07-14 22:04:59'),
(39, 'Polyester  Covered 8inch High Density Foam Mattress', 5, 2, 'A complete 8inch foam mattress of high density foam covered with Belgium Jacquard Quilts for good sleeping comfort.', '2024-07-14 21:58:31', '2024-07-14 22:04:26'),
(40, 'Polyester Covered 10inch  High Density Foam Mattess', 5, 2, 'An 10 inch complete foam mattress of high density foam covered with Belgium Jacquard Quilts for good sleeping comfort.', '2024-07-14 22:03:43', '2024-07-14 22:03:43');

-- --------------------------------------------------------

--
-- Table structure for table `product_pictures`
--

CREATE TABLE `product_pictures` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_pictures`
--

INSERT INTO `product_pictures` (`id`, `product_id`, `image_path`, `created_at`, `updated_at`) VALUES
(49, 30, 'images/1720979956_orthopedicspringmattress.jpg', '2024-07-14 17:59:16', '2024-07-14 17:59:16'),
(50, 30, 'images/1720979956_orthopedicspringmattress02.jpg', '2024-07-14 17:59:16', '2024-07-14 17:59:16'),
(51, 30, 'images/1720979956_orthopedicspringmattress03.jpg', '2024-07-14 17:59:16', '2024-07-14 17:59:16'),
(52, 31, 'images/1720980427_princessspring.jpg', '2024-07-14 18:07:07', '2024-07-14 18:07:07'),
(53, 31, 'images/1720980427_princessspring02.jpg', '2024-07-14 18:07:07', '2024-07-14 18:07:07'),
(54, 31, 'images/1720980427_princessspring03.jpg', '2024-07-14 18:07:07', '2024-07-14 18:07:07'),
(55, 31, 'images/1720980427_princessspring05.jpg', '2024-07-14 18:07:07', '2024-07-14 18:07:07'),
(56, 31, 'images/1720980427_princessspring07.jpg', '2024-07-14 18:07:07', '2024-07-14 18:07:07'),
(57, 32, 'images/1720980841_prestigespringmattress.jpg', '2024-07-14 18:14:01', '2024-07-14 18:14:01'),
(58, 32, 'images/1720980841_prestigespringmattress02.jpg', '2024-07-14 18:14:01', '2024-07-14 18:14:01'),
(59, 32, 'images/1720980841_prestigespringmattress03.jpg', '2024-07-14 18:14:01', '2024-07-14 18:14:01'),
(60, 32, 'images/1720980841_prestigespringmattress05.jpg', '2024-07-14 18:14:01', '2024-07-14 18:14:01'),
(61, 32, 'images/1720980841_prestigespringmattress06.jpg', '2024-07-14 18:14:01', '2024-07-14 18:14:01'),
(62, 32, 'images/1720980841_prestigespringmattress08.jpg', '2024-07-14 18:14:01', '2024-07-14 18:14:01'),
(63, 32, 'images/1720980841_prestigespringmattress10.jpg', '2024-07-14 18:14:01', '2024-07-14 18:14:01'),
(64, 32, 'images/1720980841_prestigespringmattress11.jpg', '2024-07-14 18:14:01', '2024-07-14 18:14:01'),
(65, 33, 'images/1720981212_ultraflexfoammattress.jpg', '2024-07-14 18:20:12', '2024-07-14 18:20:12'),
(66, 33, 'images/1720981212_ultraflexfoammattress03.jpg', '2024-07-14 18:20:12', '2024-07-14 18:20:12'),
(67, 33, 'images/1720981212_ultraflexfoammattress02.jpg', '2024-07-14 18:20:12', '2024-07-14 18:20:12'),
(68, 34, 'images/1720981616_antistressfoammattress.jpg', '2024-07-14 18:26:56', '2024-07-14 18:26:56'),
(69, 34, 'images/1720981616_antistressfoammattress05.jpg', '2024-07-14 18:26:56', '2024-07-14 18:26:56'),
(70, 34, 'images/1720981616_antistressfoammattress02.jpg', '2024-07-14 18:26:56', '2024-07-14 18:26:56'),
(71, 34, 'images/1720981616_antistressfoammattress03.jpg', '2024-07-14 18:26:56', '2024-07-14 18:26:56'),
(72, 34, 'images/1720981616_antistressfoammattress04.jpg', '2024-07-14 18:26:56', '2024-07-14 18:26:56'),
(73, 35, 'images/1720984302_WhatsApp-Image-2023-10-11-at-1.28.34-PM.jpeg', '2024-07-14 19:11:42', '2024-07-14 19:11:42'),
(74, 36, 'images/1720984473_Bueno.jpg', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(75, 36, 'images/1720984473_BUeno-1-600x600.jpg', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(76, 36, 'images/1720984473_BUeno-2-600x600.jpg', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(77, 37, 'images/1720984669_Ortho-600x600.jpg', '2024-07-14 19:17:49', '2024-07-14 19:17:49'),
(78, 37, 'images/1720984669_ORtho-1.jpg', '2024-07-14 19:17:49', '2024-07-14 19:17:49'),
(79, 38, 'images/1720994046_WhatsApp Image 2024-07-14 at 21.48.18_cd620d99.jpg', '2024-07-14 21:54:06', '2024-07-14 21:54:06'),
(80, 38, 'images/1720994046_highdensityfoammattress04.jpg', '2024-07-14 21:54:06', '2024-07-14 21:54:06'),
(81, 39, 'images/1720994311_highdensityfoammattress07.jpg', '2024-07-14 21:58:31', '2024-07-14 21:58:31'),
(82, 39, 'images/1720994311_highdensityfoammattress08.jpg', '2024-07-14 21:58:31', '2024-07-14 21:58:31'),
(83, 40, 'images/1720994623_highdensityfoammattress03.jpg', '2024-07-14 22:03:43', '2024-07-14 22:03:43'),
(84, 40, 'images/1720994623_highdensityfoammattress04.jpg', '2024-07-14 22:03:43', '2024-07-14 22:03:43'),
(85, 40, 'images/1720994623_highdensityfoammattress.jpg', '2024-07-14 22:03:43', '2024-07-14 22:03:43');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('O4OeupAsr1SfVsqvOHRaR2TEvGQDrjomC4l28UZ7', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiM0pQQXVudXFuNTdmeHBLUXcwVjE5dG1adElzeEhZNllJa3JLSXFHMyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1721006810);

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'K/S', '2024-06-28 06:06:33', '2024-06-28 06:06:33'),
(2, 'Q/S', '2024-06-28 06:06:33', '2024-06-28 06:06:33'),
(3, 'L/S', '2024-06-28 06:06:33', '2024-06-28 06:06:33'),
(4, 'M/S', '2024-06-28 06:06:33', '2024-06-28 06:06:33'),
(5, 'S/S', '2024-06-28 06:06:33', '2024-06-28 06:06:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Charles Bih', 'bihcharles2004@gmail.com', NULL, '$2y$12$o.KSrtRSJAekLMKL2LqL0OwM8TSAcbncSZxlp2nVRUBtJYO61goU6', NULL, '2024-07-13 20:31:25', '2024-07-13 20:31:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `prices_product_id_size_id_unique` (`product_id`,`size_id`),
  ADD KEY `prices_size_id_foreign` (`size_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `product_pictures`
--
ALTER TABLE `product_pictures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_pictures_product_id_foreign` (`product_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `prices`
--
ALTER TABLE `prices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=186;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `product_pictures`
--
ALTER TABLE `product_pictures`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `prices`
--
ALTER TABLE `prices`
  ADD CONSTRAINT `prices_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `prices_size_id_foreign` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_pictures`
--
ALTER TABLE `product_pictures`
  ADD CONSTRAINT `product_pictures_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
