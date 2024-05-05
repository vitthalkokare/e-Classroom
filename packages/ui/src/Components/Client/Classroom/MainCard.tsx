import {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { RootState } from '@/lib/store'


const MainCard = (props:any) => {
  const[isUser,setUser] = useState(true)

  useEffect(()=>{

  },[])


  const subject = useSelector((state:RootState)=> state.querysubdata.Subjects)
  return (
    <div className='w-[80%] sm:w-[90%] md:w-[90%] sm:left-[5%] md:left-[5%] left-[10%] min-h-[80vh] sm:min-h-[400px] fixed overflow-y-hidden rounded-xl p-2 sm:flex-col bg-white   box-border  text-black'>
        <button onClick={props.onClick} className='box-border -z-10 rounded-xl bg-black text-white font-bold  py-0 px-2 top-0 absolute right-0 '>X</button>
              
              
              
    
    </div>
  )
}

export default MainCard
