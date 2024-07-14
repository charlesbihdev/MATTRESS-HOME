-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2024 at 05:09 PM
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
(61, 16, 1, '276.00', '2024-06-28 09:53:55', '2024-06-28 09:53:55'),
(62, 16, 2, '605.00', '2024-06-28 09:53:55', '2024-06-28 09:53:55'),
(63, 16, 3, '921.00', '2024-06-28 09:53:55', '2024-06-28 09:53:55'),
(64, 16, 4, '351.00', '2024-06-28 09:53:55', '2024-06-28 09:53:55'),
(65, 16, 5, '61.00', '2024-06-28 09:53:55', '2024-06-28 09:53:55'),
(66, 17, 1, '276.00', '2024-06-28 09:54:52', '2024-06-28 09:54:52'),
(67, 17, 2, '605.00', '2024-06-28 09:54:52', '2024-06-28 09:54:52'),
(68, 17, 3, '921.00', '2024-06-28 09:54:52', '2024-06-28 09:54:52'),
(69, 17, 4, '351.00', '2024-06-28 09:54:52', '2024-06-28 09:54:52'),
(70, 17, 5, '61.00', '2024-06-28 09:54:52', '2024-06-28 09:54:52'),
(71, 18, 1, '362.00', '2024-06-28 10:06:43', '2024-06-28 10:06:43'),
(72, 18, 2, '14.00', '2024-06-28 10:06:43', '2024-06-28 10:06:43'),
(73, 18, 3, '776.00', '2024-06-28 10:06:43', '2024-06-28 10:06:43'),
(74, 18, 4, '196.00', '2024-06-28 10:06:43', '2024-06-28 10:06:43'),
(75, 18, 5, '703.00', '2024-06-28 10:06:43', '2024-06-28 10:06:43'),
(76, 19, 1, '362.00', '2024-06-28 10:10:48', '2024-06-28 10:10:48'),
(77, 19, 2, '14.00', '2024-06-28 10:10:48', '2024-06-28 10:10:48'),
(78, 19, 3, '776.00', '2024-06-28 10:10:48', '2024-06-28 10:10:48'),
(79, 19, 4, '196.00', '2024-06-28 10:10:48', '2024-06-28 10:10:48'),
(80, 19, 5, '703.00', '2024-06-28 10:10:48', '2024-06-28 10:10:48'),
(121, 28, 1, '859.30', '2024-07-13 22:24:17', '2024-07-14 15:08:38'),
(122, 28, 2, '730.00', '2024-07-13 22:24:17', '2024-07-14 15:06:02'),
(123, 28, 3, '621.00', '2024-07-13 22:24:17', '2024-07-14 15:06:02'),
(124, 28, 4, '573.00', '2024-07-13 22:24:17', '2024-07-14 15:06:02'),
(125, 28, 5, '411.00', '2024-07-13 22:24:17', '2024-07-14 15:06:02');

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
(16, 'Benedict Morgan', 5, 1, 'Qui quam maxime eius', '2024-06-28 09:53:55', '2024-06-28 09:53:55'),
(17, 'Benedict Morgan', 5, 1, 'Qui quam maxime eius', '2024-06-28 09:54:52', '2024-06-28 09:54:52'),
(18, 'Justin Malonekk', 1, 3, 'Perferendis beatae f', '2024-06-28 10:06:43', '2024-06-28 10:06:43'),
(19, 'Justin Malonekk', 1, 3, 'Perferendis beatae f', '2024-06-28 10:10:48', '2024-06-28 10:10:48'),
(28, 'Charles Baah Bih', 3, 2, 'Description of a product', '2024-07-13 22:24:17', '2024-07-14 15:08:38');

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
(27, 16, 'images/1719568435_Background image.png', '2024-06-28 09:53:55', '2024-06-28 09:53:55'),
(28, 17, 'images/1719568492_Background image.png', '2024-06-28 09:54:52', '2024-06-28 09:54:52'),
(29, 18, 'images/1719569203_eid.jpg', '2024-06-28 10:06:43', '2024-06-28 10:06:43'),
(30, 19, 'images/1719569448_eid.jpg', '2024-06-28 10:10:48', '2024-06-28 10:10:48'),
(46, 28, 'images/1720969562_WhatsApp Image 2023-01-19 at 23.13.45.jpg', '2024-07-14 15:06:02', '2024-07-14 15:06:02'),
(47, 28, 'images/1720969562_WhatsApp Image 2023-07-06 at 17.19.14.jpg', '2024-07-14 15:06:02', '2024-07-14 15:06:02'),
(48, 28, 'images/1720969562_WhatsApp_Image_2023-05-18_at_03.47.25-removebg-preview.png', '2024-07-14 15:06:02', '2024-07-14 15:06:02');

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
('GxzBM2r88l1G1oYDGS9VM0YHsLEH2emUEUbQTyCF', 2, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoicXk2eU0wbFRSN1ltVTBTdEpJWVlWWEFPemxBbXRaV0xQdnFwODFZVCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MjtzOjE3OiJwYXNzd29yZF9oYXNoX3dlYiI7czo2MDoiJDJ5JDEyJG8uS1NydFJTSkFla0xNS0wyTHFMME93TThUU0FjYm5jU1p4bHAyblZSVUJ0SllPNjFnb1U2Ijt9', 1720969753),
('iSakUsP4e6b2yB3RQSbq5Wp1zJDScJoSMlPpKKCO', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiUEQ4bnV3bUpkSms1TGhRcXJwRm1FWFhodEZWR2xRWGk3dzM4M3NuciI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1720964891),
('kVKOu7JDR3ZBomxHJWUpW0tryELRsJIub9KX3lJI', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiTnBoenF4anZGQW5XYXVOZlpsdmQxcTVzUXh0M3F2Sjc4TUlDU3hBcyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1720964893),
('SqQGRDJMeh2cEZipbQfkmWz2AdSHzfTTYzfkGxJF', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoicE40UDBIM29XaFg1NXRpMEtjcTdPU1BkcTlDNEtrT1BSYjN3OWlDRCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1720964889),
('wI4mFGquDiyZz1xsDvEdd68goY1O3p9vMmcvBNbi', NULL, '127.0.0.1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiS1ViTzdQeXZ3NW9NbDVkamFsSGhDUWJKUUZsQTdvZ0JRaEtCd3FwZiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1720964892);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `product_pictures`
--
ALTER TABLE `product_pictures`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

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
