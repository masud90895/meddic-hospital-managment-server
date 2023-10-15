/*
  Warnings:

  - You are about to drop the column `profilId` on the `blogs` table. All the data in the column will be lost.
  - You are about to drop the column `specialization_id` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `profiles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `doctors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[startTime]` on the table `time_slots` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[endTime]` on the table `time_slots` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profileId` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `doctors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specializationId` to the `doctors` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `startTime` on the `time_slots` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endTime` on the `time_slots` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "blogs" DROP CONSTRAINT "blogs_profilId_fkey";

-- DropForeignKey
ALTER TABLE "doctors" DROP CONSTRAINT "doctors_specialization_id_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_doctorId_fkey";

-- DropIndex
DROP INDEX "profiles_doctorId_key";

-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "profilId",
ADD COLUMN     "profileId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "specialization_id",
ADD COLUMN     "profileId" TEXT NOT NULL,
ADD COLUMN     "specializationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "doctorId";

-- AlterTable
ALTER TABLE "time_slots" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "doctors_profileId_key" ON "doctors"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "time_slots_startTime_key" ON "time_slots"("startTime");

-- CreateIndex
CREATE UNIQUE INDEX "time_slots_endTime_key" ON "time_slots"("endTime");

-- AddForeignKey
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("profileId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_specializationId_fkey" FOREIGN KEY ("specializationId") REFERENCES "specializations"("specializationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("profileId") ON DELETE RESTRICT ON UPDATE CASCADE;
