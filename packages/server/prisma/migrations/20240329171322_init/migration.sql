-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('DebitCard', 'CreditCard', 'NetBanking', 'UPI');

-- CreateEnum
CREATE TYPE "Class" AS ENUM ('1st Class', '2nd Class', '3rd Class', '4th Class', '5th Class', '6th Class', '7th Class', '8th Class', '9th Class', '10th Class');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "Roll" AS ENUM ('STUDENT', 'FACULTY', 'ADMIN', 'USER', 'AUTH0');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Successful', 'Pending', 'Cancelled');

-- CreateEnum
CREATE TYPE "Enrollstatus" AS ENUM ('Success', 'Pending');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "sid" TEXT,
    "sub" TEXT,
    "role" "Roll" NOT NULL,
    "salt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" TEXT NOT NULL,
    "roll" "Roll" NOT NULL DEFAULT 'STUDENT',
    "email" TEXT NOT NULL,
    "standard" "Class" NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "sirname" TEXT NOT NULL,
    "imageUrl" TEXT,
    "dob" TIMESTAMP(3),
    "boardName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "sid" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "classlabel" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "facultyId" TEXT,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "Paystatus" BOOLEAN NOT NULL DEFAULT false,
    "Paidstatus" "PaymentStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "info" TEXT,
    "paymentMethod" "PaymentType" NOT NULL,
    "studentId" TEXT,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "about" TEXT,
    "isEnroll" "Enrollstatus" NOT NULL,
    "studentId" TEXT,
    "PaymentId" TEXT,
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
    "secretKey" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "role" "Roll" NOT NULL DEFAULT 'FACULTY',
    "exp" TEXT NOT NULL,
    "vision" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" TEXT,
    "classlabel" TEXT,

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
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "secretKey" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roll" "Roll" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject_data" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "boardName" TEXT NOT NULL,
    "standard" "Class" NOT NULL,
    "title" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "info" TEXT,
    "facultyEmail" TEXT,
    "classlabel" TEXT,
    "adminId" TEXT,

    CONSTRAINT "subject_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classroom" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "student_email_key" ON "student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "student_phone_key" ON "student"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "student_userId_key" ON "student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "payment_id_key" ON "payment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "subject_id_key" ON "subject"("id");

-- CreateIndex
CREATE UNIQUE INDEX "subject_title_studentId_key" ON "subject"("title", "studentId");

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

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "subject_data_title_facultyEmail_classlabel_key" ON "subject_data"("title", "facultyEmail", "classlabel");

-- CreateIndex
CREATE UNIQUE INDEX "Classroom_label_key" ON "Classroom"("label");

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_classlabel_fkey" FOREIGN KEY ("classlabel") REFERENCES "Classroom"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_PaymentId_fkey" FOREIGN KEY ("PaymentId") REFERENCES "payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lectures" ADD CONSTRAINT "lectures_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lectures" ADD CONSTRAINT "lectures_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lectures" ADD CONSTRAINT "lectures_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_facultyMessage_fkey" FOREIGN KEY ("facultyMessage") REFERENCES "faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_studentMessage_fkey" FOREIGN KEY ("studentMessage") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "faculty" ADD CONSTRAINT "faculty_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "faculty" ADD CONSTRAINT "faculty_classlabel_fkey" FOREIGN KEY ("classlabel") REFERENCES "Classroom"("label") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject_data" ADD CONSTRAINT "subject_data_facultyEmail_fkey" FOREIGN KEY ("facultyEmail") REFERENCES "faculty"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject_data" ADD CONSTRAINT "subject_data_classlabel_fkey" FOREIGN KEY ("classlabel") REFERENCES "Classroom"("label") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject_data" ADD CONSTRAINT "subject_data_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
