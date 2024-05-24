/*
  Warnings:

  - The `student_info` column on the `Lectures` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Lectures" DROP COLUMN "student_info",
ADD COLUMN     "student_info" JSONB[];
