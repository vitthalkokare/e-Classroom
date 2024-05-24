/*
  Warnings:

  - You are about to drop the column `studnetInfo` on the `Lectures` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lectures" DROP COLUMN "studnetInfo",
ADD COLUMN     "student_info" TEXT[];
