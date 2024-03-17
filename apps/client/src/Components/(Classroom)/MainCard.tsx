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

  useEffect(()=>{

  },[])


  return (
    <div className='w-[70%] overflow-hidden  sm:w-[90%] md:w-[90%] sm:left-[5%] md:left-[5%] left-[15%] h-[500px]  top-10 absolute  rounded-xl p-2 sm:flex-col bg-white   box-border  text-black'>
        <button onClick={()=>{dispatch(setCard(false))}} className='box-border  rounded-xl bg-black cursor-pointer text-white font-bold  py-0 px-2 top-0 absolute right-0 '>X</button>
              <h1 className={`text-2xl font-bold m-2 w-full`} >{note}</h1>
              <nav className='flex justify-evenly box-border p-1  bg-green-400'>
                {btn?.map((item,index)=>(
                  <button className={`${index === Active && `bg-white text-2xl rounded-xl font-medium transition-all duration-200 flex `} box-border py-1 px-20  sm:px-3 flex justify-center items-center sm:w-full text-xl`} onClick={()=>{
                    item.onclick()
                    setActive(index)
                  }} key={index}>{index === 1 && (<span className='m-2 font-bold text-xl'>{Cart}</span>)}{item.name}</button>
                ))}

              </nav>
              
              <section className='w-full  h-full'>
              {children}
              </section>
              
    
    </div>
  )
}

export default MainCard
