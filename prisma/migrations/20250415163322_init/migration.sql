/*
  Warnings:

  - The primary key for the `bird_scans` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_id` on the `bird_scans` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `image_url` on the `bird_scans` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2048)`.
  - You are about to alter the column `bird_name` on the `bird_scans` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `confidence` on the `bird_scans` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Real`.
  - Changed the type of `id` on the `bird_scans` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "bird_scans" DROP CONSTRAINT "bird_scans_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "user_id" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "image_url" SET DATA TYPE VARCHAR(2048),
ALTER COLUMN "bird_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "confidence" SET DATA TYPE REAL,
ALTER COLUMN "detected_at" SET DATA TYPE TIMESTAMPTZ(6),
ADD CONSTRAINT "bird_scans_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE INDEX "bird_scans_user_id_idx" ON "bird_scans"("user_id");
