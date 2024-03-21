"use client";
import useAuth from "@/app/util/useAuth";
import React, { ReactNode, useState } from "react";
import ProfileCard from "./ProfileCard";
import StudentProgress from "./StudentProgress";
import EnrolledSubject from "./EnrolledSubject";
import SubjectEnrollCard from "@/Components/(Classroom)/Subjects/SubjectEnrollCard";
import userUtil from "../../../../util/userUtil";

const page = () => {
  const { StudentData,isAuthenticated,user,data,loading, userPCard,SubjectData ,} = userUtil();
  const [StudentItem, setStudentItem] = useState<ReactNode | null>(
    <StudentProgress />
  );


  return (
    <div>
      {loading ? (
        <>loading....</>
      ) : (
        <>
          {isAuthenticated && data?.authUser?.studentData ? (
            <>
              <ProfileCard
                name={StudentData?.name}
                sirname={StudentData?.sirname}
                profileUrl="/pictures/Landingpage//introimg3.jpg"
                Class={StudentData?.standard}
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

              {userPCard ? (<>{loading ? <>loading...</> : <SubjectEnrollCard />}</>) : <></>}
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
