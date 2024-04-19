import React, { useState, useEffect } from 'react';
import { ClassesProps } from '../../page';
import useMountedState from '@/Components/custom/UseMounted';


export interface countdownProps{
  lectData?:ClassesProps
  countData?:{hour:number, minute:number, second:number}
}


const Countdown = (props:any) => {
    const [lectureTime, setLectureTime] = useState<number[]>([]);
    const [remainingTime, setRemainingTime] = useState<number[]>([]);
    const [LecData,setLecData] = useState<countdownProps[]>([]);
    const [endTime, setEndTime] = useState<number[]>([]);



    useEffect(()=>{
        
       
        props.ccdata.map((val:ClassesProps)=>{
            const ss = val.lectureTime.substring(8,11).replace(/:/g, '');
            const s = val.lectureTime

            console.log(ss);

        })
        
    },[props.ccdata])



    useEffect(()=>{
      setLectureTime(props.cdata)
    })

    useEffect(() => {
        

        if (lectureTime.length > 0) {
            setRemainingTime(lectureTime.map((time) => {
                const now = new Date();
                const scheduledTime = new Date();
                scheduledTime.setHours(time, 0, 0, 0);
                const diff = scheduledTime.getTime() - now.getTime();
                return Math.max(Math.floor(diff / 1000), 0); 
            }));

            const timer = setInterval(() => {
                setRemainingTime(prevTime =>
                    prevTime.map((time, index) => {
                        if (time > 0) {
                            return time - 1;
                        } else {
                            const now = new Date();
                            const scheduledTime = new Date();
                            if (lectureTime[index]) {
                              // @ts-ignore
                                scheduledTime.setHours(lectureTime[index], 0, 0, 0);
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


    

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='flex w-full  items-center'>
            {remainingTime.map((time, index) => (
                <div key={index} className='w-full shrink-0 flex flex-col justify-center items-center'>
                    <div className='flex gap-2 box-border p-2'>
                        <span>{props.ccdata[index].standard}</span>
                        <span>{props.ccdata[index].title}</span>
                        <span>{props.ccdata[index].lectureTime}</span>

                    </div>
                    <div className='flex box-border p-1'>
                        <span>{Math.floor(time/3600)}:</span>
                        <span>{Math.floor((time % 3600) / 60)}:</span>
                        <span>{time %60}</span>

                    </div>
                   
                   
                </div>
            ))}
        </div>
    );
};

export default Countdown;
