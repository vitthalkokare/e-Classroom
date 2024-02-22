-- CreateEnum
CREATE TYPE "Std" AS ENUM ('FirstStandard', 'SecondStandard', 'ThirdStandard', 'FourthStandard', 'FifthStandard', 'SixthStandard', 'SeventhStandard', 'EightStandard', 'NithStandard', 'tenthStandard');

-- CreateEnum
CREATE TYPE "Roll" AS ENUM ('STUDENT', 'FACULTY', 'ADMIN');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "headers" TEXT,
    "authToken" TEXT,
    "password" TEXT NOT NULL,
    "salt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studentId" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL,
    "roll" "Roll" NOT NULL DEFAULT 'STUDENT',
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "standard" "Std" NOT NULL,
    "salt" TEXT,
    "phone" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "sirname" TEXT NOT NULL,
    "imageUrl" TEXT,
    "dob" TIMESTAMP(3),
    "board_name" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "facultyId" TEXT,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "isPending" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "studentId" TEXT,
    "adminId" TEXT,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT,
    "isEnrolled" BOOLEAN NOT NULL DEFAULT false,
    "studentID" TEXT,
    "FacultyID" TEXT NOT NULL,
    "adminId" TEXT,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lectures" (
    "id" TEXT NOT NULL,
    "studentID" TEXT,
    "title" TEXT NOT NULL,
    "lectureUrl" TEXT NOT NULL,
    "notes" TEXT,
    "contents" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "facultyId" TEXT,
    "adminId" TEXT,

    CONSTRAINT "lectures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chats" (
    "id" TEXT NOT NULL,
    "studentMessage" TEXT,
    "facultyMessage" TEXT,
    "text" TEXT,
    "imageUrl" TEXT,
    "videoUrl" TEXT,
    "audioUrl" TEXT,
    "fileUrl" TEXT,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "isSend" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adminId" TEXT,

    CONSTRAINT "chats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "faculty" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sirname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "vision" TEXT NOT NULL,
    "exp" TEXT NOT NULL,
    "role" "Roll" NOT NULL DEFAULT 'FACULTY',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" TEXT,

    CONSTRAINT "faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "isSend" BOOLEAN NOT NULL DEFAULT false,
    "facultyId" TEXT,
    "adminId" TEXT,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roll" "Roll" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_studentId_idx" ON "user"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "student_email_key" ON "student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "student_phone_key" ON "student"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "subject_title_key" ON "subject"("title");

-- CreateIndex
CREATE INDEX "subject_studentID_idx" ON "subject"("studentID");

-- CreateIndex
CREATE INDEX "subject_FacultyID_idx" ON "subject"("FacultyID");

-- CreateIndex
CREATE INDEX "lectures_studentID_idx" ON "lectures"("studentID");

-- CreateIndex
CREATE INDEX "lectures_facultyId_idx" ON "lectures"("facultyId");

-- CreateIndex
CREATE INDEX "chats_studentMessage_idx" ON "chats"("studentMessage");

-- CreateIndex
CREATE INDEX "chats_facultyMessage_idx" ON "chats"("facultyMessage");

-- CreateIndex
CREATE UNIQUE INDEX "faculty_email_key" ON "faculty"("email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_FacultyID_fkey" FOREIGN KEY ("FacultyID") REFERENCES "faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lectures" ADD CONSTRAINT "lectures_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lectures" ADD CONSTRAINT "lectures_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lectures" ADD CONSTRAINT "lectures_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_facultyMessage_fkey" FOREIGN KEY ("facultyMessage") REFERENCES "faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_studentMessage_fkey" FOREIGN KEY ("studentMessage") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "faculty" ADD CONSTRAINT "faculty_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;
