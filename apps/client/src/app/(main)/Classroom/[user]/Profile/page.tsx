"use client";
import useAuth from "@/app/util/useAuth";
import React, { ReactNode, useState } from "react";
import ProfileCard from "./ProfileCard";
import StudentProgress from "./StudentProgress";
import EnrolledSubject from "./EnrolledSubject";
import { useQuery } from "@apollo/client";
import { AUTH_USER } from "@/graphql/user/queries";
import { setCard } from "@repo/ui/index";
import { useDispatch } from "react-redux";

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
                      if(SubjectData.length <= 0){
                        dispatch(setCard(true))
                      }
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
