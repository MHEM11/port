-- CreateTable
CREATE TABLE `Exercise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `weight` INTEGER NOT NULL,
    `progression` ENUM('NEW_WHEIGHT', 'STANDARD', 'NEXT_TIME_UP') NOT NULL DEFAULT 'NEW_WHEIGHT',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
