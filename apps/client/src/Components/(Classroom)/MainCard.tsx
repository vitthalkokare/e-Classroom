import userUtil from '@/app/util/userUtil';
import { setCard } from '@repo/ui/index';
import {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'


 interface MainCardProps{
  btn:{name:string,onclick:() => void}[]
  note:string
  children:React.ReactNode
  Cart?:number


}

const MainCard = ({btn,note,children,Cart}:MainCardProps) => {
  const[isUser,setUser] = useState(true)
  const [Active,setActive] = useState(0)

  const dispatch = useDispatch();



  return (
    <div className='w-full  min-h-[500px] sticky top-5  z-30  rounded-xl py-2 px-0 sm:flex-col bg-slate-100 dark:bg-stone-600  shadow-xl    box-border  text-black'>
        <button onClick={()=>{dispatch(setCard(false))}} className='box-border  rounded-xl bg-black cursor-pointer text-white font-bold  py-0 px-2 top-0 absolute right-0 '>X</button>
              <h1 className={`text-2xl font-bold m-2 w-full`} >{note}</h1>
              <nav className='flex h-fit justify-evenly box-border p-1  dark:bg-stone-700 bg-pink-300'>
                {btn?.map((item,index)=>(
                  <button className={`${index === Active && `bg-white text-2xl text-black rounded-xl font-medium transition-all duration-200 flex `} box-border py-1 px-20  sm:px-3 flex justify-center items-center sm:w-full text-xl`} onClick={()=>{
                    item.onclick()
                    setActive(index)
                  }} key={index}>{index === 1 && (<span className='m-2 font-bold text-xl'>{Cart}</span>)}{item.name}</button>
                ))}

              </nav>
              
              <section className='w-full h-fit box-border  flex sm:flex-col relative '>
              {children}
              </section>
              
    
    </div>
  )
}

export default MainCard
