/*
  Warnings:

  - The primary key for the `bird_scans` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "bird_scans_user_id_idx";

-- AlterTable
ALTER TABLE "bird_scans" DROP CONSTRAINT "bird_scans_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "image_url" SET DATA TYPE TEXT,
ALTER COLUMN "bird_name" SET DATA TYPE TEXT,
ALTER COLUMN "confidence" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "detected_at" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "bird_scans_pkey" PRIMARY KEY ("id");
