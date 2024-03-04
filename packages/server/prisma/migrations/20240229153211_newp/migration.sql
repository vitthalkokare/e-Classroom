-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_studentId_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "studentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
