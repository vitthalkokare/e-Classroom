import { RootState } from '@repo/ui/index';
import { useState } from 'react';
import { FaRegSquarePlus } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

const EnrolledSubject = () => {
    const CartItem = useSelector((state: RootState) => state.subslice.Cart);
    const dispatch = useDispatch();

  return (
    <div className='w-full h-[400px] justify-around  box-border p-4 flex '>
        {CartItem.length > 0? (
        <div className='flex flex-col scr overflow-y-scroll w-[60%]'>
        {CartItem.map((item,index)=>(
            <div className='flex justify-between w-full box-border p-3 my-2 rounded-2xl' key={index}>
                <h1>{item?.name}</h1>
                <h1>{item?.content}</h1>
                <h1>{item?.id}</h1>
                <h1>Price</h1>
            </div>
        ))}
        
        </div>) :(<>
            <h1>Enroll Subject to Continue</h1>
        
        </>)}

        <section className='border-2 p-4 w-[40%] rounded-xl  m-2'>Price</section>
      
    </div>
  )
}

export default EnrolledSubject
