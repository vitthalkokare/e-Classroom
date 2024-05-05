import React, { useState, useEffect, useMemo } from "react";
import { ClassesProps, useUserContext } from "@/app/contexts/UserContext";
import useMountedState from "@/Components/custom/UseMounted";

export interface countdownProps {
  lectData?: ClassesProps;
  countData?: { hour: number; minute: number; second: number };
}






const Countdown = () => {
  const [Mount,setMout] = useState(false);

  const [lectureTime, setLectureTime] = useState<number[]>([]);
  const [remainingTime, setRemainingTime] = useState<number[]>([]);
  const [countEndTime, setCountEndTime] = useState<number[]>([]);
  const [endTime, setEndTime] = useState<number[]>([]);

  
  const [FsTime,setFsTime] = useState<number[]>([]);
  const [FeTime,setFeTime] = useState<number[]>([]);
  const [Fcurrent,setFcurrent] = useState<number[]>([]);
  const [Frem,setFrem] = useState<number[]>([]);

  const [SinStime,setSinStime] = useState<number[]>([]);
  const [SinEtime,setSinEtime] = useState<number[]>([]);
  const [Sincurrent,setSincurrent] = useState<number[]>([]);
  const [Sinrem,setSinrem] = useState<number[]>([]);





  const {classData} = useUserContext();
  const {isMounted} = useMountedState(Mount);


  useEffect(() => {
    setMout(true);
    const timeIntervals = classData?.map((v: ClassesProps) => {
      return v.lectureTime.substring(9, 11).charAt(0) === "0"
        ? Number(v.lectureTime.substring(10, 11))
        : Number(v.lectureTime.substring(9, 11));
    });


    setEndTime(timeIntervals);

    const lecTime = classData?.map((v: ClassesProps) => {
      return v.lectureTime.substring(0, 2).charAt(0) === "0"
        ? Number(v.lectureTime.substring(1, 2))
        : Number(v.lectureTime.substring(0, 2));
    });


    setLectureTime(lecTime);


    

  }, [isMounted]);

 


 
  useEffect(() => {
    if (lectureTime?.length > 0) {

      setCountEndTime(
        endTime.map((time) => {
          const now = new Date();
          const scheduledTime = new Date();
          scheduledTime.setHours(time, 0, 0, 0);
          const diff = scheduledTime.getTime() - now.getTime();
          return Math.max(Math.floor(diff / 1000), 0);
        })
      );

      setRemainingTime(
        lectureTime.map((time) => {
          const now = new Date();
          const scheduledTime = new Date();
          scheduledTime.setHours(time, 0, 0, 0);
          const diff = scheduledTime.getTime() - now.getTime();
          return Math.max(Math.floor(diff / 1000), 0);
        })
      );



      const timer = setInterval(() => {
        setCountEndTime((prevTime) =>
        prevTime.map((time, index) => {
          if (time > 0) {
            return time - 1;
          } else {
            const now = new Date();
            const scheduledTime = new Date();
            if (endTime[index]) {
              
              scheduledTime.setHours(endTime[index] as number, 0, 0, 0);
            }
            const diff = scheduledTime.getTime() - now.getTime();
            return Math.max(Math.floor(diff / 1000), 0);
          }
        })
      );

        setRemainingTime((prevTime) =>
          prevTime.map((time, index) => {
            if (time > 0) {
              return time - 1;
            } else {
              const now = new Date();
              const scheduledTime = new Date();
              if (lectureTime[index]) {
                
                scheduledTime.setHours((lectureTime[index] as number), 0, 0, 0);
              }
              const diff = scheduledTime.getTime() - now.getTime();
              return Math.max(Math.floor(diff / 1000), 0);
            }
          })
        );


         
      
      }, 1000);
      

      return () => clearInterval(timer);
    }
  }, [lectureTime]);



  const filteredArray = classData?.filter((item, index) => {
    if(Math.floor((remainingTime[index] as number)/3600) === 0 && (Math.floor((remainingTime[index] as number) % 3600) / 60) === 0 && (remainingTime[index] as number) % 60 === 0 ){
          return countEndTime[index] !== 0

    }
});

const startIN = classData?.filter((item,index)=>(countEndTime[index] !== 0));




useEffect(() => {
  setMout(true);
  const fstemp:number[] = [];
  const fetemp:number[] = [];

  const farrTime = filteredArray?.map((v: ClassesProps) => {
    const fstime = v.lectureTime.substring(0, 2).charAt(0) === "0"
    ? Number(v.lectureTime.substring(1, 2))
    : Number(v.lectureTime.substring(0, 2));

    const fetime = v.lectureTime.substring(9, 11).charAt(0) === "0"
      ? Number(v.lectureTime.substring(10, 11))
      : Number(v.lectureTime.substring(9, 11));

      fstemp.push(fstime);
      fetemp.push(fetime);

  });


  setFsTime(fstemp);
  setFeTime(fetemp);


  const ssinTime:number[] = [];
  const seinTime:number[] = [];

  const FstartTime = startIN?.map((v: ClassesProps) => {

    

    const fstime = v.lectureTime.substring(0, 2).charAt(0) === "0"
    ? Number(v.lectureTime.substring(1, 2))
    : Number(v.lectureTime.substring(0, 2));

    const fetime = v.lectureTime.substring(9, 11).charAt(0) === "0"
      ? Number(v.lectureTime.substring(10, 11))
      : Number(v.lectureTime.substring(9, 11));

      ssinTime.push(fstime);
      seinTime.push(fetime);

  });
  
  setSinStime(ssinTime);
  setSinEtime(seinTime);


  

}, [isMounted]);


useEffect(() => {

    setFrem(
      FeTime.map((time) => {
        const now = new Date();
        const scheduledTime = new Date();
        scheduledTime.setHours(time, 0, 0, 0);
        const diff = scheduledTime.getTime() - now.getTime();
        return Math.max(Math.floor(diff / 1000), 0);
      })
    );

    setFcurrent(
      FsTime.map((time) => {
        const now = new Date();
        const scheduledTime = new Date();
        scheduledTime.setHours(time, 0, 0, 0);
        const diff = scheduledTime.getTime() - now.getTime();
        return Math.max(Math.floor(diff / 1000), 0);
      })
    );


    // Start In Aray
    setSincurrent(
      SinStime.map((time) => {
        const now = new Date();
        const scheduledTime = new Date();
        scheduledTime.setHours(time, 0, 0, 0);
        const diff = scheduledTime.getTime() - now.getTime();
        return Math.max(Math.floor(diff / 1000), 0);
      })
    );

    setSinrem(
      SinEtime.map((time) => {
        const now = new Date();
        const scheduledTime = new Date();
        scheduledTime.setHours(time, 0, 0, 0);
        const diff = scheduledTime.getTime() - now.getTime();
        return Math.max(Math.floor(diff / 1000), 0);
      })
    );




    const timer = setInterval(() => {
      setFrem((prevTime) =>
      prevTime.map((time, index) => {
        if (time > 0) {
          return time - 1;
        } else {
          const now = new Date();
          const scheduledTime = new Date();
          if (FeTime[index]) {
            
            scheduledTime.setHours(FeTime[index] as number, 0, 0, 0);
          }
          const diff = scheduledTime.getTime() - now.getTime();
          return Math.max(Math.floor(diff / 1000), 0);
        }
      })
    );

      setFcurrent((prevTime) =>
        prevTime.map((time, index) => {
          if (time > 0) {
            return time - 1;
          } else {
            const now = new Date();
            const scheduledTime = new Date();
            if (FsTime[index]) {
              
              scheduledTime.setHours((FsTime[index] as number), 0, 0, 0);
            }
            const diff = scheduledTime.getTime() - now.getTime();
            return Math.max(Math.floor(diff / 1000), 0);
          }
        })
      );

      setSincurrent((prevTime) =>
      prevTime.map((time, index) => {
        if (time > 0) {
          return time - 1;
        } else {
          const now = new Date();
          const scheduledTime = new Date();
          if (SinStime[index]) {
            
            scheduledTime.setHours(SinStime[index] as number, 0, 0, 0);
          }
          const diff = scheduledTime.getTime() - now.getTime();
          return Math.max(Math.floor(diff / 1000), 0);
        }
      })
    );

    setSinrem((prevTime) =>
    prevTime.map((time, index) => {
      if (time > 0) {
        return time - 1;
      } else {
        const now = new Date();
        const scheduledTime = new Date();
        if (SinEtime[index]) {
          
          scheduledTime.setHours(SinEtime[index] as number, 0, 0, 0);
        }
        const diff = scheduledTime.getTime() - now.getTime();
        return Math.max(Math.floor(diff / 1000), 0);
      }
    })
  );


       
    
    }, 1000);
    

    return () => clearInterval(timer);
  
}, [lectureTime]);



   
  return (

    {remainingTime,countEndTime , filteredArray,startIN,Fcurrent,Frem,Sincurrent,Sinrem}
  );
};

export default Countdown;
