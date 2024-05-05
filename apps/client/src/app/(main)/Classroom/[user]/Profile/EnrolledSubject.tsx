import React, { useEffect } from "react";
import userUtil from "../../../../util/userUtil";
import { useDispatch } from "react-redux";
import { setCard } from "@repo/ui/index";
import useAuth from "@/app/util/useAuth";
import SubjectEnrollCard from "@/Components/(Classroom)/Subjects/SubjectEnrollCard";

const EnrolledSubject = () => {
  const dispatch = useDispatch();
  const { StudentInfo, loading, SubjectData, isAuthCard, refetch } = useAuth();

  useEffect(() => {
    refetch();
    if (SubjectData.length < 0) {
      dispatch(setCard(true));
    }
  }, []);

  return (
    <div className="relative w-[90%] box-border p-4 bg-lightmode dark:bg-darkmodes1 dark:text-gray-200 rounded-xl shadow-xl justify-center gap-2 flex mx-auto sm:w-[95%] h-full ">
      <span className="box-border fixed bg-black text-white  left-[15%] sm:top-[23%]  top-[37%] sm:left-[2%] h-fit py-2 px-4 rounded-xl">
        <button
          className=""
          onClick={() => {
            dispatch(setCard(true));
          }}
        >
          Enroll
        </button>
      </span>

      {SubjectData.length <= 0 ? (
        <></>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-1   box-border sm:w-[80%]  w-[70%] ">
          {SubjectData && (
            <>
              {SubjectData.map((item: any, index: number) => (
                <div
                  className={`flex justify-between box-border hover:scale-105 hover:transition-all duration-200 items-center h-[100px] ${item.isEnroll === 'Pending' ? `bg-red-400` : `bg-green-400 dark:bg-darkmodes1 shadow-lg`}  rounded-xl my-2`}
                  key={index}
                >
                  <span className="flex flex-col gap-2">
                    <span>{item.state}</span>
                    <span>{item.boardName}</span>
                    <span>{item.standard}</span>


                  </span>
                  <span className="flex flex-col gap-2">
                    <span>{item.title}</span>
                    <span>{item.boardName}</span>


                  </span>

                  <span>
                    {item.isEnroll === "Pending" ? (
                      <>
                        <button
                          className="h-full flex items-center box-border p-2 bg-red-100"
                          onClick={() => {
                            window.location.href = "/api/auth/payment";
                          }}
                        >
                          <strong>
                            {item.isEnroll} <span>Enroll</span>
                          </strong>
                        </button>
                      </>
                    ) : (
                      <>
                        <span className="h-[80px] rounded-xl box-border items-center flex px-4 dark:bg-neutral-800  bg-green-200">
                          {item.isEnroll}
                        </span>
                      </>
                    )}
                  </span>
                </div>
              ))}
            </>
          )}
        </section>
      )}
    </div>
  );
};

export default EnrolledSubject;
