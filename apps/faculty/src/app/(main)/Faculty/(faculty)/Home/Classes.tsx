"use client";

import { GET_STUDETNS_BY_INFO } from "@/graphql/Faculty/Queris";
import { useQuery } from "@apollo/client";
import { RootState, commonUi, studentSlice } from "@repo/ui/index";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Countdown from "./Countdown";
import { useFacultyContext } from "../../contexts/useFaculty";

export interface clasesProps {
  width: number;
  display: string;
  c: boolean;
}

export interface QueryProps {
  state: string;
  boardlebel: string;
  standard: string;
  title: string;
  lectureTime?: string;
}
const Classes = () => {
  const [getData, setData] = useState(false);
  const [Query, setQuery] = useState<QueryProps | null>(null);
  const [ClassesCard, setClassesCard] = useState<clasesProps>({
    width: 0,
    display: "hidden",
    c: true,
  });
  const [getStudent, setStudent] = useState<any[]>();
  const dispatch = useDispatch();
  const { countEndTime, remainingTime } = Countdown();

  const { data: ddd, loading } = useQuery(GET_STUDETNS_BY_INFO, {
    variables: {
      standard: Query?.standard,
      boardName: Query?.boardlebel,
      state: Query?.state,
      title: Query?.title,
    },
    skip: !getData,
  });

  const { allotSubject } = useFacultyContext();

  async function queryHandler(index: number, val: any) {
    const { state, standard, boardName, title } = await val;
    setQuery({
      state: state,
      standard: standard,
      boardlebel: boardName,
      title: title,
    });

    setData(true);

    const d = await ddd;
    if (d && d.getStudentByInfo) {
      try {
        setStudent(d.getStudentByInfo);
        dispatch(studentSlice.allStudent(d.getStudentByInfo));
      } catch (err) {
        return err;
      }
    }

    return;
  }

  return (
    <div className="w-full  min-h-[400px] relative overflow-hidden h-[400px] justify-evenly bg-white shadow-2xl rounded-2xl  flex  z-40  left-0 top-0 box-border ">
      {allotSubject?.length !== 0 ? (
        <div
          className={`w-full transition-all p-2 overflow-y-scroll h-full min-h-fit flex flex-col  ease-in duration-400 scr  overflow-hidden `}
        >
          {allotSubject?.map((val, inx) => (
            <div
              onClick={() => {
                queryHandler(inx, val);
              }}
              key={inx}
              className="box-border p-2 border-[2px] bottom-1 bg-white my-1 rounded-xl "
            >
              <span className="w-full bg-blue-300 box-border p-3 flex justify-around">
                <span>Started In</span>

                {(countEndTime[inx] as number) === 0 ? (
                  <>Completed..</>
                ) : (
                  <>
                    {Math.floor((remainingTime[inx] as number) / 3600) === 0 &&
                    Math.floor((remainingTime[inx] as number) % 3600) / 60 ===
                      0 &&
                    (remainingTime[inx] as number) % 60 === 0 ? (
                      <div className="flex flex-col items-center justify-center gap-2">
                        <span className="flex">
                          <span>
                            {Math.floor((countEndTime[inx] as number) / 3600)}:
                          </span>
                          <span>
                            {Math.floor(
                              ((countEndTime[inx] as number) % 3600) / 60
                            )}
                            :
                          </span>

                          <span>{(countEndTime[inx] as number) % 60}</span>
                        </span>
                        <span>Running</span>
                        <button onClick={() => {}}>JOin</button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <span>Started In</span>
                        <span>
                          <span>
                            {Math.floor((remainingTime[inx] as number) / 3600)}:
                          </span>
                          <span>
                            {Math.floor(
                              ((remainingTime[inx] as number) % 3600) / 60
                            )}
                            :
                          </span>
                          <span>{(remainingTime[inx] as number) % 60}</span>
                        </span>
                      </div>
                    )}
                  </>
                )}
              </span>
              <form className="">
                <input readOnly name="state" value={val.state} />
                <input readOnly name="boardleble" value={val.boardName} />
                <input readOnly name="standard" value={val.standard} />
                <input readOnly name="title" value={val.title} />
              </form>
            </div>
          ))}
        </div>
      ) : (
        <>not found</>
      )}

      <section className=" w-full  box-border p-4 right-0 top-0">
        {loading ? (
          <commonUi.Loading />
        ) : ddd?.getStudentByInfo?.length > 0 ? (
          ddd?.getStudentByInfo?.map((val: any, index: number) => (
            <div
              key={index}
              className="box-border border-[2px] p-1 my-1 bg-white rounded-2xl"
            >
              <span>
                <img src={val.imageUrl} />
              </span>
              <h1>
                {val.name} {val.sirname}
              </h1>
              <span>{val.standard}</span>
            </div>
          ))
        ) : (
          <>No Student Enrolled Subject..</>
        )}
      </section>
    </div>
  );
};

export default Classes;
