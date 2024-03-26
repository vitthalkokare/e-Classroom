"use client";
import useAuth from "@/app/util/useAuth";
import React, { ReactNode, useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import StudentProgress from "./StudentProgress";
import EnrolledSubject from "./EnrolledSubject";
import SubjectEnrollCard from "@/Components/(Classroom)/Subjects/SubjectEnrollCard";
import userUtil from "../../../../util/userUtil";
import { useQuery } from "@apollo/client";
import { AUTH_USER } from "@/graphql/user/queries";
import { setCard } from "@repo/ui/index";
import { useDispatch } from "react-redux";
import EnrollHandler from "@/Components/(Classroom)/Subjects/EnrollHandler";

const page = () => {
  const [StudentItem, setStudentItem] = useState<ReactNode | null>(
    <StudentProgress />
  );

    const {data,error,loading} = useQuery(AUTH_USER)
    const {isAuthenticated,StudentInfo,SubjectData} = useAuth();
    
    const dispatch = useDispatch();

 
  return (
    <div>
     
      {loading ? (
        <>loading....</>
      ) : (
        <>
          {data && data.authUser ? (
           
            <>
              <ProfileCard
                name={data.authUser.studentData?.name}
                sirname={data.authUser.studentData?.sirname}
                profileUrl="/pictures/Landingpage//introimg3.jpg"
                Class={data.authUser.studentData?.standard}
                city={data.authUser.studentData?.city}
                boardname={data.authUser.studentData?.boardName}
                children={StudentItem}
                state={data.authUser.studentData?.state}
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
                      dispatch(setCard(true))
                    },
                  },
                ]}
              />

          
           
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
