/*
  Warnings:

  - You are about to drop the column `admin_id` on the `Lectures` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[room_name]` on the table `Lectures` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `room_name` to the `Lectures` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lectures" DROP CONSTRAINT "Lectures_admin_id_fkey";

-- AlterTable
ALTER TABLE "Chats" ADD COLUMN     "lecture_chats" TEXT;

-- AlterTable
ALTER TABLE "Lectures" DROP COLUMN "admin_id",
ADD COLUMN     "adminId" TEXT,
ADD COLUMN     "room_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Lectures_room_name_key" ON "Lectures"("room_name");

-- AddForeignKey
ALTER TABLE "Lectures" ADD CONSTRAINT "Lectures_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_lecture_chats_fkey" FOREIGN KEY ("lecture_chats") REFERENCES "Lectures"("id") ON DELETE SET NULL ON UPDATE CASCADE;
