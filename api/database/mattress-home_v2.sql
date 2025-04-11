-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2025 at 02:37 PM
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

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('bihcharlesowusubih@gmail.com|127.0.0.1', 'i:3;', 1744242639),
('bihcharlesowusubih@gmail.com|127.0.0.1:timer', 'i:1744242639;', 1744242639),
('charlesowusubih@gmail.com|127.0.0.1', 'i:1;', 1743827922),
('charlesowusubih@gmail.com|127.0.0.1:timer', 'i:1743827922;', 1743827922);

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
(1, 'Royal Foam', '2024-06-28 06:06:33', '2024-06-28 06:06:33'),
(2, 'Latex Foam', '2024-06-28 06:06:33', '2024-06-28 06:06:33'),
(3, 'Ashfoam', '2024-06-28 06:06:33', '2024-06-28 06:06:33'),
(4, 'Foreign Brands', '2024-06-28 06:06:33', '2024-06-28 06:06:33');

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
(131, 30, 1, '5345.00', '2024-07-14 17:59:15', '2025-04-10 00:42:13'),
(132, 30, 2, '4475.00', '2024-07-14 17:59:15', '2025-04-10 00:42:13'),
(133, 30, 3, '3390.00', '2024-07-14 17:59:15', '2025-04-10 00:42:13'),
(134, 30, 4, '2685.00', '2024-07-14 17:59:16', '2025-04-10 00:42:13'),
(135, 30, 5, '2325.00', '2024-07-14 17:59:16', '2025-04-10 00:42:13'),
(136, 31, 1, '8015.00', '2024-07-14 18:07:07', '2025-04-10 00:39:36'),
(137, 31, 2, '6870.00', '2024-07-14 18:07:07', '2025-04-10 00:39:36'),
(138, 31, 3, '5175.00', '2024-07-14 18:07:07', '2025-04-10 00:39:36'),
(139, 31, 4, '4029.00', '2024-07-14 18:07:07', '2025-04-10 00:39:36'),
(140, 31, 5, '3470.00', '2024-07-14 18:07:07', '2025-04-10 00:39:36'),
(141, 32, 1, '12465.00', '2024-07-14 18:14:01', '2025-04-10 00:37:05'),
(142, 32, 2, '10685.00', '2024-07-14 18:14:01', '2025-04-10 00:37:05'),
(143, 32, 3, '8015.00', '2024-07-14 18:14:01', '2025-04-10 00:37:05'),
(144, 32, 4, '6235.00', '2024-07-14 18:14:01', '2025-04-10 00:37:05'),
(145, 32, 5, '5345.00', '2024-07-14 18:14:01', '2025-04-10 00:37:05'),
(146, 33, 1, '6565.00', '2024-07-14 18:20:12', '2025-04-10 00:33:30'),
(147, 33, 2, '5800.00', '2024-07-14 18:20:12', '2025-04-10 00:33:30'),
(148, 33, 3, '4240.00', '2024-07-14 18:20:12', '2025-04-10 00:33:30'),
(149, 33, 4, '3340.00', '2024-07-14 18:20:12', '2025-04-10 00:33:30'),
(150, 33, 5, '2913.00', '2024-07-14 18:20:12', '2025-04-10 00:33:30'),
(151, 34, 1, '9560.00', '2024-07-14 18:26:56', '2025-04-10 00:30:11'),
(152, 34, 2, '8215.00', '2024-07-14 18:26:56', '2025-04-10 00:30:11'),
(153, 34, 3, '6170.00', '2024-07-14 18:26:56', '2025-04-10 00:30:11'),
(154, 34, 4, '4795.00', '2024-07-14 18:26:56', '2025-04-10 00:30:11'),
(155, 34, 5, '4115.00', '2024-07-14 18:26:56', '2025-04-10 00:30:11'),
(156, 35, 1, '4719.00', '2024-07-14 19:11:42', '2025-04-07 07:27:41'),
(157, 35, 2, '4040.00', '2024-07-14 19:11:42', '2025-04-07 07:27:41'),
(158, 35, 3, '3033.00', '2024-07-14 19:11:42', '2025-04-07 07:27:41'),
(159, 35, 4, '2414.00', '2024-07-14 19:11:42', '2025-04-07 07:27:41'),
(160, 35, 5, '2026.00', '2024-07-14 19:11:42', '2025-04-07 07:27:41'),
(161, 36, 1, '2500.00', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(162, 36, 2, '2100.00', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(163, 36, 3, '1800.00', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(164, 36, 4, '1500.00', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(165, 36, 5, '1200.00', '2024-07-14 19:14:33', '2024-07-14 19:14:33'),
(166, 37, 1, '5345.00', '2024-07-14 19:17:49', '2025-04-07 07:24:19'),
(167, 37, 2, '4475.00', '2024-07-14 19:17:49', '2025-04-07 07:24:19'),
(168, 37, 3, '3390.00', '2024-07-14 19:17:49', '2025-04-07 07:24:19'),
(169, 37, 4, '2685.00', '2024-07-14 19:17:49', '2025-04-07 07:24:19'),
(170, 37, 5, '2325.00', '2024-07-14 19:17:49', '2025-04-07 07:24:19'),
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
(185, 40, 5, '1393.00', '2024-07-14 22:03:43', '2024-07-14 22:03:43'),
(186, 41, 1, '3674.00', '2024-07-16 16:46:03', '2024-07-16 16:46:03'),
(187, 41, 2, '3110.00', '2024-07-16 16:46:03', '2024-07-16 16:46:03'),
(188, 41, 3, '2363.00', '2024-07-16 16:46:03', '2024-07-16 16:46:03'),
(189, 41, 4, '1857.00', '2024-07-16 16:46:03', '2024-07-16 16:46:03'),
(190, 41, 5, '1645.00', '2024-07-16 16:46:03', '2024-07-16 16:46:03'),
(191, 42, 1, '12177.00', '2024-07-16 17:07:58', '2024-07-16 17:07:58'),
(192, 42, 2, '10436.00', '2024-07-16 17:07:59', '2024-07-16 17:07:59'),
(193, 42, 3, '7831.00', '2024-07-16 17:07:59', '2024-07-16 17:07:59'),
(194, 42, 4, '6093.00', '2024-07-16 17:07:59', '2024-07-16 17:07:59'),
(195, 42, 5, '5220.00', '2024-07-16 17:07:59', '2024-07-16 17:07:59'),
(196, 43, 1, '6805.00', '2024-07-16 17:36:22', '2024-07-16 17:36:22'),
(197, 43, 2, '5827.00', '2024-07-16 17:36:22', '2024-07-16 17:36:22'),
(198, 43, 3, '4374.00', '2024-07-16 17:36:22', '2024-07-16 17:36:22'),
(199, 43, 4, '3402.00', '2024-07-16 17:36:22', '2024-07-16 17:36:22'),
(200, 43, 5, '2918.00', '2024-07-16 17:36:22', '2024-07-16 17:36:22'),
(201, 44, 1, '3099.00', '2024-07-16 17:48:57', '2024-07-16 17:48:57'),
(202, 44, 2, '2660.00', '2024-07-16 17:48:57', '2024-07-16 17:48:57'),
(203, 44, 3, '2130.00', '2024-07-16 17:48:57', '2024-07-16 17:48:57'),
(204, 44, 4, '1699.00', '2024-07-16 17:48:57', '2024-07-16 17:48:57'),
(205, 44, 5, '1599.00', '2024-07-16 17:48:57', '2024-07-16 17:48:57'),
(206, 45, 1, '2733.00', '2024-07-16 17:57:18', '2024-07-16 17:57:18'),
(207, 45, 2, '2365.00', '2024-07-16 17:57:18', '2024-07-16 17:57:18'),
(208, 45, 3, '1723.00', '2024-07-16 17:57:18', '2024-07-16 17:57:18'),
(209, 45, 4, '1248.00', '2024-07-16 17:57:18', '2024-07-16 17:57:18'),
(210, 45, 5, '1058.00', '2024-07-16 17:57:18', '2024-07-16 17:57:18'),
(211, 46, 1, '4032.00', '2024-07-16 18:03:04', '2024-07-16 18:03:04'),
(212, 46, 2, '3688.00', '2024-07-16 18:03:04', '2024-07-16 18:03:04'),
(213, 46, 3, '2626.00', '2024-07-16 18:03:04', '2024-07-16 18:03:04'),
(214, 46, 4, '1944.00', '2024-07-16 18:03:04', '2024-07-16 18:03:04'),
(215, 46, 5, '1848.00', '2024-07-16 18:03:04', '2024-07-16 18:03:04'),
(216, 47, 1, '5040.00', '2024-07-16 18:25:08', '2024-07-16 18:25:08'),
(217, 47, 2, '4610.00', '2024-07-16 18:25:08', '2024-07-16 18:25:08'),
(218, 47, 3, '3270.00', '2024-07-16 18:25:08', '2024-07-16 18:25:08'),
(219, 47, 4, '2430.00', '2024-07-16 18:25:09', '2024-07-16 18:25:09'),
(220, 47, 5, '2310.00', '2024-07-16 18:25:09', '2024-07-16 18:25:09'),
(221, 48, 1, '25000.00', '2024-07-22 23:39:18', '2024-07-22 23:39:18'),
(222, 48, 2, '20500.00', '2024-07-22 23:39:18', '2024-07-22 23:39:18'),
(223, 48, 3, '19800.00', '2024-07-22 23:39:18', '2024-07-22 23:39:18'),
(224, 48, 4, '19800.00', '2024-07-22 23:39:18', '2024-07-22 23:39:18'),
(225, 48, 5, '18900.00', '2024-07-22 23:39:18', '2024-07-22 23:40:03'),
(226, 49, 1, '98634.00', '2024-07-22 23:50:45', '2024-07-22 23:50:45'),
(227, 49, 2, '98634.00', '2024-07-22 23:50:45', '2024-07-22 23:50:45'),
(228, 49, 3, '87784.00', '2024-07-22 23:50:45', '2024-07-22 23:50:45'),
(229, 49, 4, '80000.00', '2024-07-22 23:50:45', '2024-07-22 23:50:45'),
(230, 49, 5, '80000.00', '2024-07-22 23:50:45', '2024-07-22 23:50:45'),
(231, 50, 1, '38184.00', '2024-07-22 23:57:13', '2024-07-22 23:57:13'),
(232, 50, 2, '31990.00', '2024-07-22 23:57:13', '2024-07-22 23:57:13'),
(233, 50, 3, '30400.00', '2024-07-22 23:57:13', '2024-07-22 23:57:13'),
(234, 50, 4, '27400.00', '2024-07-22 23:57:13', '2024-07-22 23:57:13'),
(235, 50, 5, '27400.00', '2024-07-22 23:57:13', '2024-07-22 23:57:13'),
(236, 51, 1, '41200.00', '2024-07-23 00:01:03', '2024-07-23 00:01:03'),
(237, 51, 2, '35000.00', '2024-07-23 00:01:03', '2024-07-23 00:01:03'),
(238, 51, 3, '41200.00', '2024-07-23 00:01:03', '2024-07-23 00:01:03'),
(239, 51, 4, '33000.00', '2024-07-23 00:01:03', '2024-07-23 00:01:03'),
(240, 51, 5, '30300.00', '2024-07-23 00:01:03', '2024-07-23 00:01:03'),
(241, 52, 1, '31980.00', '2024-07-23 00:09:40', '2024-07-23 00:09:40'),
(242, 52, 2, '24200.00', '2024-07-23 00:09:41', '2024-07-23 00:09:41'),
(243, 52, 3, '22600.00', '2024-07-23 00:09:41', '2024-07-23 00:09:41'),
(244, 52, 4, '1800.00', '2024-07-23 00:09:41', '2024-07-23 00:09:41'),
(245, 52, 5, '16400.00', '2024-07-23 00:09:41', '2024-07-23 00:09:41'),
(246, 53, 1, '38000.00', '2024-07-23 00:16:17', '2024-07-23 00:16:17'),
(247, 53, 2, '30400.00', '2024-07-23 00:16:17', '2024-07-23 00:16:17'),
(248, 53, 3, '28800.00', '2024-07-23 00:16:17', '2024-07-23 00:16:17'),
(249, 53, 4, '25700.00', '2024-07-23 00:16:17', '2024-07-23 00:16:17'),
(250, 53, 5, '24200.00', '2024-07-23 00:16:17', '2024-07-23 00:16:17'),
(251, 54, 1, '13659.00', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(252, 54, 2, '10500.00', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(253, 54, 3, '9700.00', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(254, 54, 4, '9000.00', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(255, 54, 5, '6000.00', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(256, 55, 1, '17500.00', '2024-07-23 00:45:55', '2024-07-23 00:45:55'),
(257, 55, 2, '15200.00', '2024-07-23 00:45:55', '2024-07-23 00:45:55'),
(258, 55, 3, '14400.00', '2024-07-23 00:45:56', '2024-07-23 00:45:56'),
(259, 55, 4, '12100.00', '2024-07-23 00:45:56', '2024-07-23 00:45:56'),
(260, 55, 5, '9000.00', '2024-07-23 00:45:56', '2024-07-23 00:45:56'),
(261, 56, 1, '38000.00', '2024-07-23 00:54:09', '2024-07-23 00:54:09'),
(262, 56, 2, '28800.00', '2024-07-23 00:54:09', '2024-07-23 00:54:09'),
(263, 56, 3, '28000.00', '2024-07-23 00:54:09', '2024-07-23 00:54:09'),
(264, 56, 4, '27300.00', '2024-07-23 00:54:09', '2024-07-23 00:54:09'),
(265, 56, 5, '27300.00', '2024-07-23 00:54:09', '2024-07-23 00:54:09'),
(266, 57, 1, '47400.00', '2024-07-23 01:03:02', '2024-07-23 01:03:02'),
(267, 57, 2, '38100.00', '2024-07-23 01:03:02', '2024-07-23 01:03:02'),
(268, 57, 3, '37000.00', '2024-07-23 01:03:02', '2024-07-23 01:03:02'),
(269, 57, 4, '36500.00', '2024-07-23 01:03:02', '2024-07-23 01:03:02'),
(270, 57, 5, '36497.00', '2024-07-23 01:03:02', '2024-07-23 01:03:02'),
(271, 58, 1, '50000.00', '2024-07-23 01:36:53', '2024-07-23 01:36:53'),
(272, 58, 2, '40600.00', '2024-07-23 01:36:53', '2024-07-23 01:36:53'),
(273, 58, 3, '39810.00', '2024-07-23 01:36:53', '2024-07-23 01:36:53'),
(274, 58, 4, '39100.00', '2024-07-23 01:36:53', '2024-07-23 01:36:53'),
(275, 58, 5, '39100.00', '2024-07-23 01:36:53', '2024-07-23 01:36:53'),
(276, 59, 1, '3078.00', '2025-04-07 07:32:38', '2025-04-07 07:32:38'),
(277, 59, 2, '2642.00', '2025-04-07 07:32:38', '2025-04-07 07:32:38'),
(278, 59, 3, '1930.00', '2025-04-07 07:32:38', '2025-04-07 07:32:38'),
(279, 59, 4, '1478.00', '2025-04-07 07:32:38', '2025-04-07 07:32:38'),
(280, 59, 5, '1298.00', '2025-04-07 07:32:38', '2025-04-07 07:32:38'),
(281, 60, 1, '7146.00', '2025-04-07 07:39:39', '2025-04-07 07:39:39'),
(282, 60, 2, '6119.00', '2025-04-07 07:39:39', '2025-04-07 07:39:39'),
(283, 60, 3, '4593.00', '2025-04-07 07:39:39', '2025-04-07 07:39:39'),
(284, 60, 4, '3573.00', '2025-04-07 07:39:39', '2025-04-07 07:39:39'),
(285, 60, 5, '3064.00', '2025-04-07 07:39:39', '2025-04-07 07:39:39'),
(286, 61, 1, '4499.00', '2025-04-07 07:42:11', '2025-04-07 07:42:11'),
(287, 61, 2, '3869.00', '2025-04-07 07:42:11', '2025-04-07 07:42:11'),
(288, 61, 3, '2899.00', '2025-04-07 07:42:11', '2025-04-07 07:42:11'),
(289, 61, 4, '2259.00', '2025-04-07 07:42:11', '2025-04-07 07:42:11'),
(290, 61, 5, '1939.00', '2025-04-07 07:42:11', '2025-04-07 07:42:11'),
(291, 62, 1, '5759.00', '2025-04-07 07:44:32', '2025-04-07 07:44:32'),
(292, 62, 2, '4939.00', '2025-04-07 07:44:32', '2025-04-07 07:44:32'),
(293, 62, 3, '3699.00', '2025-04-07 07:44:32', '2025-04-07 07:44:32'),
(294, 62, 4, '2879.00', '2025-04-07 07:44:32', '2025-04-07 07:44:32'),
(295, 62, 5, '2469.00', '2025-04-07 07:44:32', '2025-04-07 07:44:32');

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
(37, 'Orthopaedic 10\' Mattress', 5, 3, 'Orthopaedic mattresses are highly recommended to people with back and joint problems. Fully supportive of your spine, our Orthopaedic Mattress is made of Bonnell spring coils, which are infused with high-density foam and trimmed. An extra sheet of foam is added to each side of the mattress for extra support and comfort, relieving you from aches and pains each morning. The quilted jacquard cover provides a luxurious experience for every sleeper.', '2024-07-14 19:17:48', '2024-07-16 16:27:38'),
(38, 'Polyester Covered 9inch High Density Foam Mattess', 5, 2, 'A complete foam mattress of high density foam covered with Belgium Jacquard Quilts for good sleeping comfort.', '2024-07-14 21:54:05', '2024-07-14 22:04:59'),
(39, 'Polyester  Covered 8inch High Density Foam Mattress', 5, 2, 'A complete 8inch foam mattress of high density foam covered with Belgium Jacquard Quilts for good sleeping comfort.', '2024-07-14 21:58:31', '2024-07-14 22:04:26'),
(40, 'Polyester Covered 10inch  High Density Foam Mattess', 5, 2, 'An 10 inch complete foam mattress of high density foam covered with Belgium Jacquard Quilts for good sleeping comfort.', '2024-07-14 22:03:43', '2024-07-14 22:03:43'),
(41, 'Sweet Dreams \'10 Mattress', 5, 3, 'This classic mattress is made from quality foam that provides all-over support to ensure a great night’s sleep for many years to come.', '2024-07-16 16:46:03', '2024-07-16 16:46:03'),
(42, 'Ashfoam Supreme Mattress', 5, 3, 'Experience unparalleled comfort and support with Supreme Mattresses, designed to provide a restful night\'s sleep. Crafted with premium materials, our mattresses ensure durability and a luxurious feel for years to come.\r\n\r\nSize	\r\nKing, Queen (72”x75”), Large (54”x75”), Medium (42”x75”), Small (36\"x75\")', '2024-07-16 17:07:58', '2024-07-16 17:07:58'),
(43, 'Poquet Spring Mattress', 5, 3, 'Discover the perfect blend of support and comfort with Poquet Spring Mattress, featuring high-quality pocket springs for individualized support. Sleep soundly with enhanced durability and breathability designed for a refreshing night\'s rest', '2024-07-16 17:36:22', '2024-07-16 17:36:22'),
(44, 'Adepa Mattress', 5, 3, 'Sleep in style with Adepa Mattress, crafted to offer exceptional comfort and support for a rejuvenating rest. Made with premium materials, Adepa Mattress ensures durability and a plush sleeping experience every night', '2024-07-16 17:48:57', '2024-07-16 17:48:57'),
(45, 'Adepa Mini Mattress', 5, 3, 'Enjoy compact comfort with the Adepa Mini Mattress, designed for small spaces without compromising on quality. Experience restful sleep with its durable construction and cozy feel', '2024-07-16 17:57:18', '2024-07-16 17:57:18'),
(46, 'Majesty 8\' Covered Mattress', 5, 3, '\"Enjoy unparalleled comfort with the Majesty 8\' Covered Mattress, offering a plush surface for a restful sleep. Its durable cover ensures long-lasting quality and superior support.', '2024-07-16 18:03:04', '2024-07-16 18:03:04'),
(47, 'Majestic 10\' Covered Mattress', 5, 3, 'Sleep in supreme comfort with the Majesty 10\' Covered Mattress, providing a soft and supportive surface. Its high-quality cover ensures lasting durability and a peaceful night\'s rest.', '2024-07-16 18:25:07', '2024-07-16 18:25:07'),
(48, 'Beautyrest Silver® BRS900 11.75\" Extra Firm Mattress', 5, 4, 'The Beautyrest Silver BRS900 11.75” medium firm mattress is engineered to maintain its shape and consistent comfort over the life of your mattress.Featuring 900 Series Beautyrest® Pocketed Coil® Technology that provides flexible support precisely where it is needed and isolates motion between two sleepers.\r\n\r\n\r\nThe DualCool™ Technology found in the Silver BRS900, is an antimicrobial performance layer that works to keep your mattress fresh and cool while moving heat and moisture away, so you sleep at your ideal sleeping temperature. Get support right where you need it most with Gel Memory Foam Lumbar Support.', '2024-07-22 23:39:18', '2024-07-22 23:44:08'),
(49, 'Tempur-Pedic TEMPUR-LuxeBreeze® Soft 13\" Mattress', 5, 4, 'Not a morning person? Careful—this comfy combination of proven cooling and advanced pressure relief could turn you into one. A step up from the TEMPUR-Adapt® Collection, the all-new Tempur-LuxeBreeze® feels up to 10 degrees cooler* all night long. And you feel it the moment you climb into bed. The cool-to-the-touch zip-off, washable cover works with Pure Cool® Plus material to absorb body heat and provide a cooling effect for more refreshing zzz’s. And the Ventilated Advanced Relief® layer increases airflow while helping ease discomfort of your shoulders, hips and back.', '2024-07-22 23:50:45', '2024-07-22 23:50:45'),
(50, 'Tempur-Pedic TEMPUR-Cloud® 10\" Medium Mattress', 5, 4, 'Made with a combination of soft and firm TEMPUR® Material for the perfect medium feel, our TEMPUR-Cloud® Medium features superior conforming comfort and motion isolation so you can sleep soundly and get more restorative rest.', '2024-07-22 23:57:13', '2024-07-22 23:57:13'),
(51, 'Tempur-Pedic TEMPUR-Cloud® 10\" Medium Hybrid Mattress', 5, 4, 'Our TEMPUR-Cloud® Medium Hybrid mattress features the same perfect medium feel with conforming comfort and motion isolation, but with the addition of premium spring coils for extra bounce for easier movement and more edge support.', '2024-07-23 00:01:03', '2024-07-23 00:01:03'),
(52, 'Purple Original Mattress', 5, 4, 'The Purple® Mattress® is the base model, offering the core Purple experience balancing comfort and support. The 2\" GelFlex Grid™ cradles pressure points, while the Comfort Core produces a less bouncy feel.\r\n\r\n\r\nThe comfort you crave. The 2\" GelFlex Grid works with the Comfort Core to create a medium feel, with the supportive comfort you want.\r\n\r\n\r\nAll-over support and pressure relief. The GelFlex Grid evenly supports your body shape and cradles pressure points, so you can fully relax and enjoy truly rejuvenating sleep.\r\n\r\n\r\nLess bounce, for less motion. Two layers of foam in the Comfort Core produce a more stable sleeping surface and help limit motion transfer between you and your sleep partner.\r\n\r\n\r\nDraws heat away. The air spaces in the GelFlex Grid help draw heat away from your body. The mattress doesn’t sleep hot, so you sleep more comfortably.', '2024-07-23 00:09:40', '2024-07-23 00:09:40'),
(53, 'Purple Plus™ Mattress', 5, 4, 'The Purple® Plus™ Mattress offers a comfort upgrade to our Purple Mattress, thanks to an extra layer of premium foam that provides better cushioning, responsiveness, and breathability. This improved foam base is topped with two inches of breathable GelFlex™ Grid to cradle pressure points like hips and shoulders while keeping the rest of your body fully aligned for amazing sleep', '2024-07-23 00:16:17', '2024-07-23 00:16:17'),
(54, 'Nectar Classic 12\" Memory Foam Mattress', 5, 4, 'Drift off into the zzz’s of your dreams and move around as much as you like without waking your partner. The Nectar Classic features gel-infused memory foam that cradles you as you sleep and keeps you in a snug body hug. Never sleep hot again—the cool-to-the-touch Quilted Cool Cover helps keep your body temp regulated and your sleep refreshing.', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(55, 'Nectar Premier 13\" Memory Foam Mattress', 5, 4, 'Doze off effortlessly without disturbing your partner thanks to more pressure-relieving memory foam and enhanced cooling. While the Nectar Classic features cooling materials in the cover, the Premier takes it to the next level with ActiveCool memory foam. So that means if you sleep hot, body heat will be absorbed and stored away, but if you sleep cool, it\'ll release stored body heat to warm you. On top, a cooling cover brings it all together to help you sleep soundly and wake up feeling refreshed.', '2024-07-23 00:45:55', '2024-07-23 00:45:55'),
(56, 'Stearns & Foster Studio 14\" Medium Mattress', 5, 4, 'A hand-crafted quality mattress that easily checks all the boxes. The combination of premium memory foam and encased innersprings provides comforting support across the bed surface. Plus, they provide welcome pressure relief for your shoulders, hips and back. To help regulate your body temperature, a system of ventilated coils and air vents removes excess heat for cooler sleep and more refreshing mornings.', '2024-07-23 00:54:08', '2024-07-23 00:54:08'),
(57, 'Stearns & Foster Estate® 13.5\" Extra Firm Mattress', 5, 4, 'The story of this collection is about comforting support and helping you sleep pain free. This luxurious, hand-crafted mattress delivers big on both with the highest quality TEMPUR-Indulge™ Memory Foam and an exclusive innerspring system to relieve your shoulders, hips and back of unwanted pressure. Plus, the cooling combination of ventilated coils, air vents and a cool-to-the-touch cover help you sleep deeper and longer.', '2024-07-23 01:03:02', '2024-07-23 01:03:02'),
(58, 'Stearns & Foster Estate® 15\" Plush Euro Pillow Top Mattress', 5, 4, 'The story of this collection is about comforting support and helping you sleep pain free. This luxurious, hand-crafted mattress delivers big on both with the highest quality TEMPUR-Indulge™ Memory Foam and an exclusive innerspring system to relieve your shoulders, hips and back of unwanted pressure. Plus, the cooling combination of ventilated coils, air vents and a cool-to-the-touch cover help you sleep deeper and longer.', '2024-07-23 01:36:53', '2024-07-23 01:36:53'),
(59, 'High Density Mattress', 5, 3, 'This classic mattress is made from quality foam that provides all-over support to ensure a great night’s sleep for many years to come. \r\n\r\nSuitable for use in hospitals as it enables easy lifting of the patient whilst supporting the back.\r\n\r\nMattress Thickness: 8\"\r\nAlso highly recommended for hotels.', '2025-04-07 07:32:38', '2025-04-07 07:32:38'),
(60, 'Comfy Mattress', 5, 3, 'With individual springs housed in pockets of fabric, the Comfy Mattress helps to distribute weight evenly. Extra sheets of foam on each side of the mattress makes it comfortable and supportive. It enables many hours of deep sleep. As each spring is individual, the mattress is so supportive that even if your partner tosses and turns, you will not feel a thing! \r\n\r\nDensity: 12 Inches', '2025-04-07 07:39:39', '2025-04-07 07:39:39'),
(61, 'Legacy Mattress', 5, 3, 'Introducing Ashfoam’s Legacy Mattress – engineered for full-body support and lasting comfort. Designed with high-quality foam, it provides unmatched durability and ensures a restful sleep experience night after night.\r\nWake up feeling refreshed and rejuvenated. Your best sleep starts here!', '2025-04-07 07:42:10', '2025-04-07 07:42:10'),
(62, 'Harmony Memory Foam Mattress', 5, 3, 'Introducing Ashfoam’s Harmony Mattress – the ultimate balance of comfort and support. A luxurious memory foam top layer adapts to your body, while a dense foam base ensures lasting durability and stability.\r\nWake up every morning in perfect harmony. Your best sleep starts here!', '2025-04-07 07:44:32', '2025-04-07 07:44:32');

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
(85, 40, 'images/1720994623_highdensityfoammattress.jpg', '2024-07-14 22:03:43', '2024-07-14 22:03:43'),
(86, 41, 'images/1721148363_sweetdreams.JPG', '2024-07-16 16:46:03', '2024-07-16 16:46:03'),
(87, 41, 'images/1721148363_sweetdreams1.JPG', '2024-07-16 16:46:03', '2024-07-16 16:46:03'),
(88, 41, 'images/1721148363_sweetdreams2.JPG', '2024-07-16 16:46:03', '2024-07-16 16:46:03'),
(89, 42, 'images/1721149679_Supreme.jpg', '2024-07-16 17:07:59', '2024-07-16 17:07:59'),
(90, 43, 'images/1721151382_poquet.jpg', '2024-07-16 17:36:22', '2024-07-16 17:36:22'),
(91, 43, 'images/1721151382_Bueno.jpg', '2024-07-16 17:36:22', '2024-07-16 17:36:22'),
(94, 44, 'images/1721152187_ORtho-1.jpg', '2024-07-16 17:49:47', '2024-07-16 17:49:47'),
(95, 45, 'images/1721152638_70647a_1.jpg', '2024-07-16 17:57:18', '2024-07-16 17:57:18'),
(96, 45, 'images/1721152638_mini adepa.jpg', '2024-07-16 17:57:18', '2024-07-16 17:57:18'),
(97, 46, 'images/1721152984_majesty.jpg', '2024-07-16 18:03:04', '2024-07-16 18:03:04'),
(98, 47, 'images/1721154309_Supreme.jpg', '2024-07-16 18:25:09', '2024-07-16 18:25:09'),
(99, 48, 'images/1721691558_beauty rest2.JPG', '2024-07-22 23:39:18', '2024-07-22 23:39:18'),
(100, 48, 'images/1721691558_Capture.JPG', '2024-07-22 23:39:18', '2024-07-22 23:39:18'),
(101, 48, 'images/1721691558_beauty rest.JPG', '2024-07-22 23:39:18', '2024-07-22 23:39:18'),
(102, 48, 'images/1721691558_beauty rest1.JPG', '2024-07-22 23:39:18', '2024-07-22 23:39:18'),
(103, 49, 'images/1721692245_tempur.JPG', '2024-07-22 23:50:45', '2024-07-22 23:50:45'),
(104, 49, 'images/1721692245_tempur1.JPG', '2024-07-22 23:50:45', '2024-07-22 23:50:45'),
(105, 49, 'images/1721692245_tempur3.JPG', '2024-07-22 23:50:45', '2024-07-22 23:50:45'),
(106, 49, 'images/1721692245_tempur4.JPG', '2024-07-22 23:50:45', '2024-07-22 23:50:45'),
(107, 50, 'images/1721692633_tempur medium.JPG', '2024-07-22 23:57:13', '2024-07-22 23:57:13'),
(108, 50, 'images/1721692633_tempur medium1.JPG', '2024-07-22 23:57:13', '2024-07-22 23:57:13'),
(109, 50, 'images/1721692633_tempur medium2.JPG', '2024-07-22 23:57:13', '2024-07-22 23:57:13'),
(110, 50, 'images/1721692633_tempur medium4.JPG', '2024-07-22 23:57:13', '2024-07-22 23:57:13'),
(111, 51, 'images/1721692863_tempur medium2.JPG', '2024-07-23 00:01:03', '2024-07-23 00:01:03'),
(112, 51, 'images/1721692863_tempur medium.JPG', '2024-07-23 00:01:03', '2024-07-23 00:01:03'),
(113, 51, 'images/1721692863_tempur medium1.JPG', '2024-07-23 00:01:03', '2024-07-23 00:01:03'),
(114, 51, 'images/1721692863_tempur medium4.JPG', '2024-07-23 00:01:03', '2024-07-23 00:01:03'),
(115, 52, 'images/1721693381_purple3.JPG', '2024-07-23 00:09:41', '2024-07-23 00:09:41'),
(116, 52, 'images/1721693381_purple.JPG', '2024-07-23 00:09:41', '2024-07-23 00:09:41'),
(117, 52, 'images/1721693381_purple1.JPG', '2024-07-23 00:09:41', '2024-07-23 00:09:41'),
(118, 52, 'images/1721693381_purple2.JPG', '2024-07-23 00:09:41', '2024-07-23 00:09:41'),
(129, 53, 'images/1721694118_purple y.JPG', '2024-07-23 00:21:58', '2024-07-23 00:21:58'),
(130, 54, 'images/1721695322_nector1.JPG', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(131, 54, 'images/1721695322_nector.JPG', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(132, 54, 'images/1721695322_nector5.JPG', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(133, 54, 'images/1721695322_nector4.JPG', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(134, 54, 'images/1721695322_nector3.JPG', '2024-07-23 00:42:02', '2024-07-23 00:42:02'),
(135, 55, 'images/1721695556_nectorpremier.JPG', '2024-07-23 00:45:56', '2024-07-23 00:45:56'),
(136, 55, 'images/1721695556_nector5.JPG', '2024-07-23 00:45:56', '2024-07-23 00:45:56'),
(137, 55, 'images/1721695556_nector3.JPG', '2024-07-23 00:45:56', '2024-07-23 00:45:56'),
(138, 56, 'images/1721696049_Stearns.JPG', '2024-07-23 00:54:09', '2024-07-23 00:54:09'),
(139, 56, 'images/1721696049_Stearns1.JPG', '2024-07-23 00:54:09', '2024-07-23 00:54:09'),
(140, 56, 'images/1721696049_Stearns2.JPG', '2024-07-23 00:54:09', '2024-07-23 00:54:09'),
(141, 56, 'images/1721696049_Stearns3.JPG', '2024-07-23 00:54:09', '2024-07-23 00:54:09'),
(142, 57, 'images/1721696582_estate extra firm.JPG', '2024-07-23 01:03:02', '2024-07-23 01:03:02'),
(143, 57, 'images/1721696582_Stearns1.JPG', '2024-07-23 01:03:02', '2024-07-23 01:03:02'),
(144, 57, 'images/1721696582_Stearns2.JPG', '2024-07-23 01:03:02', '2024-07-23 01:03:02'),
(145, 57, 'images/1721696582_Stearns3.JPG', '2024-07-23 01:03:02', '2024-07-23 01:03:02'),
(149, 58, 'images/1721698711_plush.JPG', '2024-07-23 01:38:31', '2024-07-23 01:38:31'),
(150, 58, 'images/1721698711_Stearns1.JPG', '2024-07-23 01:38:31', '2024-07-23 01:38:31'),
(151, 58, 'images/1721698711_Stearns2.JPG', '2024-07-23 01:38:31', '2024-07-23 01:38:31'),
(152, 59, 'images/1744011158_HD.jpg', '2025-04-07 07:32:38', '2025-04-07 07:32:38'),
(153, 60, 'images/1744011579_Comfy.jpg', '2025-04-07 07:39:39', '2025-04-07 07:39:39'),
(154, 61, 'images/1744011731_Legacy-1.png', '2025-04-07 07:42:11', '2025-04-07 07:42:11'),
(155, 62, 'images/1744011872_Harmony-2.png', '2025-04-07 07:44:32', '2025-04-07 07:44:32');

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
('LyY9jdLhg6EukqaGnJ3Kr2PuZAl4owO0Bw0vGcqo', 2, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoicnNHQWc3emVWMFdSM0REYVExRk5YSFVBTEJTYTV0UFZ2aDlodnMzRCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MjtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEyJGg2OWNldFQwLnJkWGdkVlA4UHJZQ080ZG1XNGxuaC4yblZHUlltTHRrQzhBdHp4c1k2Y1NlIjt9', 1744246014);

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
(2, 'Charles Bih', 'bihcharles2004@gmail.com', NULL, '$2y$12$h69cetT0.rdXgdVP8PrYCO4dmW4lnh.2nVGRYmLtkC8AtzxsY6cSe', 'OEySwjtvCUvF6ehfKM2O3MkX3x7euz2T2ESa6yKIcH9AwhDpvlVM0323IMWR', '2024-07-13 20:31:25', '2024-07-13 20:31:25'),
(4, 'Karl', 'charlesowusubih@gmail.com', NULL, '$2y$12$h69cetT0.rdXgdVP8PrYCO4dmW4lnh.2nVGRYmLtkC8AtzxsY6cSe', NULL, '2025-04-07 06:18:17', '2025-04-07 06:18:17');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=296;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `product_pictures`
--
ALTER TABLE `product_pictures`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
