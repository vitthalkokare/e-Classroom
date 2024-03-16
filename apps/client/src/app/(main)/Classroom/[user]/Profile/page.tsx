"use client";
import useAuth from "@/app/util/useAuth";
import React, { ReactNode, useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { FaAccessibleIcon, FaAddressCard } from "react-icons/fa";
import StudentProgress from "./StudentProgress";
import EnrolledSubject from "./EnrolledSubject";

const page = () => {
  const { isAuthenticated, data, user, loading, error } = useAuth();
  const [StudentItem, setStudentItem] = useState<ReactNode | null>(
    <StudentProgress />
  );

  const [sData, setStudentData] = useState<any | null>(null);
  useEffect(() => {
    if (data?.authUser?.studentData) {
      setStudentData(data.authUser.studentData);
    }
  }, [data]);

  return (
    <div>
      {loading ? (
        <>loading....</>
      ) : (
        <>
          {sData ? (
            <>
              <ProfileCard
                name={sData?.name}
                sirname={sData?.sirname}
                profileUrl="/pictures/Landingpage//introimg3.jpg"
                standard="ok"
                children={StudentItem}
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
