/*
  Warnings:

  - You are about to drop the column `student_info` on the `Lectures` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lectures" DROP COLUMN "student_info",
ADD COLUMN     "socketid" TEXT[];
