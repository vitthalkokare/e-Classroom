'use client'
import React, { useState } from 'react'
import { FaRegSquarePlus } from 'react-icons/fa6';
import Card from '../Card';
import { RootState, setCard ,commonUi} from '@repo/ui/index';
import {useSelector,useDispatch} from 'react-redux'



export interface dashboardPorps{
    State:{name:""}[]

}
enum Board{

}


const Dashboard = () => {
    const [NewState,setNewState] = useState(false);
    const popcard = useSelector((state:RootState)=> state.AuthCard.isUser)


    const StateHandler = ()=>{
        NewState === false ? setNewState(true) : setNewState(false);

    }
  return (
        <main className='relative bg-yellow-400 w-full  box-border p-2 '>
            <section className='flex   w-full'>
                <div className='flex w-full box-border p-2 '>
                <select name="" id="">State
                    <option value="">Maharashtra</option>
                    
                </select>
                <button className='text-2xl' onClick={StateHandler}><FaRegSquarePlus/> </button>
                </div>

                
                <div className='flex w-full box-border p-2 '>
                <select name="" id="">Board
                    <option value="">Board</option>
                    
                </select>
                <button className='text-2xl' onClick={StateHandler}><FaRegSquarePlus/> </button>
                </div>
                <div className='flex w-full box-border p-2 '>
                <select name="" id="">Class
                    <option value="">Class</option>
                    
                </select>
                <button className='text-2xl' onClick={StateHandler}><FaRegSquarePlus/> </button>
                </div>


               
                
                
            </section>
            <section>
                <section className='flex gap-2'>
                    <commonUi.Common.InputField
                    label='Title'
                    id='title'
                    name='title'
                    value=''
                    type='text'

                    
                    
                    />
                    <commonUi.Common.InputField
                    label='about'
                    id='about'
                    name='about'
                    value=''
                    type='text'

                    
                    
                    />
                    <commonUi.Common.InputField
                    label='Price'
                    id='price'
                    name='price'
                    value=''
                    type='number'

                    
                    
                    />
                    
                    
                </section>
            </section>

            <section className='flex'>
            <commonUi.Common.InputField
                    label='Name'
                    id='Name'
                    name='name'
                    value=''
                    type='text'

                    
                    
                    />
                    <textarea name="" id="" className='' placeholder='Experience'  ></textarea>
            </section>



            {NewState && <Card btn={StateHandler} children={<><input type='text' placeholder='Add new State'/></>}/>}

        </main>

      
  )
}

export default Dashboard
