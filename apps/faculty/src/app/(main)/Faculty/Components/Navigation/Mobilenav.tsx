
'use client'
import { RootState, commonSlice } from '@repo/ui/index';
import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'

const Mobilenav = () => {
    const [toggle,setToggle] = useState(0);

    const mobnav = useSelector((state:RootState)=>state.commonUtil.mobNav);
      const dispatch = useDispatch();

    const toggleHandler =()=>{
        if(mobnav.display === 'hidden'){
            dispatch(commonSlice.mobNavHandler('flex'))
        }
        else{
            dispatch(commonSlice.mobNavHandler('hidden'));
        }
    }


  return (
    <div className='fixed bottom-4 left-0 hidden sm:flex '>
        
        <span onClick={()=>{toggleHandler()}} className='box-border p-4 border-[2px] font-bold text-2xl'>+</span>
      
    </div>
   
  )
}

export default Mobilenav
