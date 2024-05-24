/*
  Warnings:

  - You are about to drop the column `student_id` on the `Lectures` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lectures" DROP COLUMN "student_id",
ADD COLUMN     "student_info" JSONB[];
