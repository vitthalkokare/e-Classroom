"use client";
import useAuth from "@/app/util/useAuth";
import React, { ReactNode, useState } from "react";
import ProfileCard from "./ProfileCard";
import StudentProgress from "./StudentProgress";
import EnrolledSubject from "./EnrolledSubject";
import SubjectEnrollCard from "@/Components/(Classroom)/Subjects/SubjectEnrollCard";
import userUtil from "../userUtil";

const page = () => {
  const { StudentData, userPCard, loading } = userUtil();
  const [StudentItem, setStudentItem] = useState<ReactNode | null>(
    <StudentProgress />
  );

  return (
    <div>
      {loading ? (
        <>loading....</>
      ) : (
        <>
          {StudentData ? (
            <>
              <ProfileCard
                name={StudentData?.name}
                sirname={StudentData?.sirname}
                profileUrl="/pictures/Landingpage//introimg3.jpg"
                Class="ok"
                city={StudentData?.city}
                boardname={StudentData?.boardName}
                children={StudentItem}
                state={StudentData.state}
                btn={[
                  {
                    btn: "Progress",
                    onclick() {
                      setStudentItem(<StudentProgress />);
                    },
                  },
                  {
                    btn: "Enrolled Subjects",
                    onclick() {
                      setStudentItem(<EnrolledSubject />);
                    },
                  },
                ]}
              />

              {false ? (<>{loading ? <>loading...</> : <SubjectEnrollCard />}</>) : <></>}
            </>
          ) : (
            <>Data is not avalable</>
          )}
        </>
      )}
    </div>
  );
};

export default page;
