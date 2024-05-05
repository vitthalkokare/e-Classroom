/*
  Warnings:

  - You are about to drop the column `student_id` on the `Lectures` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Lectures" DROP CONSTRAINT "Lectures_student_id_fkey";

-- AlterTable
ALTER TABLE "Lectures" DROP COLUMN "student_id";

-- CreateTable
CREATE TABLE "_LecturesToStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LecturesToStudent_AB_unique" ON "_LecturesToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_LecturesToStudent_B_index" ON "_LecturesToStudent"("B");

-- AddForeignKey
ALTER TABLE "_LecturesToStudent" ADD CONSTRAINT "_LecturesToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Lectures"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LecturesToStudent" ADD CONSTRAINT "_LecturesToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
