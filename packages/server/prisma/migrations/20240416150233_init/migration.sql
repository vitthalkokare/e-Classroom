-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('DebitCard', 'CreditCard', 'NetBanking', 'UPI');

-- CreateEnum
CREATE TYPE "Class" AS ENUM ('1st_Class', '2nd_Class', '3rd_Class', '4th_Class', '5th_Class', '6th_Class', '7th_Class', '8th_Class', '9th_Class', '10th_Class');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "Roll" AS ENUM ('STUDENT', 'FACULTY', 'ADMIN', 'USER', 'AUTH0');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Successful', 'Pending', 'Cancelled');

-- CreateEnum
CREATE TYPE "Enrollstatus" AS ENUM ('Success', 'Pending');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "sid" TEXT,
    "sub" TEXT,
    "role" "Roll" NOT NULL,
    "salt" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "roll" "Roll" NOT NULL DEFAULT 'STUDENT',
    "email" TEXT NOT NULL,
    "standard" "Class" NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "sirname" TEXT NOT NULL,
    "image_url" TEXT,
    "dob" TIMESTAMP(3),
    "board_name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "info" JSONB,
    "sid" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "class_label" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "faculty_id" TEXT,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "pay_status" BOOLEAN NOT NULL DEFAULT false,
    "paid_status" "PaymentStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "info" TEXT,
    "payment_method" "PaymentType" NOT NULL,
    "student_id" TEXT,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "about" TEXT,
    "img" TEXT,
    "state" TEXT NOT NULL,
    "board_lebel" TEXT NOT NULL,
    "is_enroll" "Enrollstatus" NOT NULL,
    "subject_data_id" TEXT NOT NULL,
    "student_id" TEXT,
    "payment_id" TEXT,
    "admin_id" TEXT,
    "classlebel" TEXT NOT NULL,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lectures" (
    "id" TEXT NOT NULL,
    "student_id" TEXT,
    "title" TEXT NOT NULL,
    "lecture_url" TEXT NOT NULL,
    "notes" TEXT,
    "contents" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "faculty_id" TEXT,
    "admin_id" TEXT,

    CONSTRAINT "Lectures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chats" (
    "id" TEXT NOT NULL,
    "student_message" TEXT,
    "faculty_message" TEXT,
    "text" TEXT,
    "image_url" TEXT,
    "video_url" TEXT,
    "audio_url" TEXT,
    "file_url" TEXT,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "is_send" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "admin_id" TEXT,

    CONSTRAINT "Chats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faculty" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sirname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "secret_key" TEXT,
    "salt" TEXT NOT NULL,
    "role" "Roll" NOT NULL DEFAULT 'FACULTY',
    "exp" TEXT,
    "vision" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "admin_id" TEXT,
    "classlabel" TEXT,

    CONSTRAINT "Faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "is_send" BOOLEAN NOT NULL DEFAULT false,
    "faculty_id" TEXT,
    "admin_id" TEXT,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "secret_key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "roll" "Roll" NOT NULL DEFAULT 'ADMIN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subject_data" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "board_name" TEXT NOT NULL,
    "standard" "Class" NOT NULL,
    "title" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "info" JSONB,
    "img" TEXT,
    "vision" TEXT,
    "exp" TEXT,
    "fname" TEXT,
    "faculty_email" TEXT NOT NULL,
    "classlabel" TEXT NOT NULL,
    "admin_id" TEXT,
    "lecture_time" TEXT NOT NULL,

    CONSTRAINT "subject_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classroom" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_phone_key" ON "Student"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Student_user_id_key" ON "Student"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_id_key" ON "Payment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "subject_id_key" ON "subject"("id");

-- CreateIndex
CREATE UNIQUE INDEX "subject_title_student_id_key" ON "subject"("title", "student_id");

-- CreateIndex
CREATE UNIQUE INDEX "Faculty_email_key" ON "Faculty"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "subject_data_title_classlabel_board_name_state_key" ON "subject_data"("title", "classlabel", "board_name", "state");

-- CreateIndex
CREATE UNIQUE INDEX "Classroom_label_key" ON "Classroom"("label");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_class_label_fkey" FOREIGN KEY ("class_label") REFERENCES "Classroom"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "Faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "Payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lectures" ADD CONSTRAINT "Lectures_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lectures" ADD CONSTRAINT "Lectures_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "Faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lectures" ADD CONSTRAINT "Lectures_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_faculty_message_fkey" FOREIGN KEY ("faculty_message") REFERENCES "Faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_student_message_fkey" FOREIGN KEY ("student_message") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Faculty" ADD CONSTRAINT "Faculty_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Faculty" ADD CONSTRAINT "Faculty_classlabel_fkey" FOREIGN KEY ("classlabel") REFERENCES "Classroom"("label") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_faculty_id_fkey" FOREIGN KEY ("faculty_id") REFERENCES "Faculty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject_data" ADD CONSTRAINT "subject_data_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject_data" ADD CONSTRAINT "subject_data_classlabel_fkey" FOREIGN KEY ("classlabel") REFERENCES "Classroom"("label") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subject_data" ADD CONSTRAINT "subject_data_faculty_email_fkey" FOREIGN KEY ("faculty_email") REFERENCES "Faculty"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
