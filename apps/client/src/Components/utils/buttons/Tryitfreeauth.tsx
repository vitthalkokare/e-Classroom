'use client'
import {useState} from 'react'
import {useUser} from '@auth0/nextjs-auth0/client'
import UserValidate from '../../../app/api/Register/UserValidate'
import {useDispatch } from 'react-redux'
import { setCard } from '@repo/ui/index'
const Tryitfreeauth = () => {
    const [AuthCard,setAutCard] = useState(false)
    const dispatch = useDispatch();
    const {user} = useUser();
    const
     userHandler = ()=>{
        setAutCard(true); 
        dispatch(setCard(true));

    }

  return (
    <div className='wrap mt-4'>
    {!user ? (<button
            onClick={()=> userHandler()}
          className={`anibtn`}
        >
          <strong>Try it Free</strong>
        </button>):(<></>)}
      
    </div>
  )
}

export default Tryitfreeauth
