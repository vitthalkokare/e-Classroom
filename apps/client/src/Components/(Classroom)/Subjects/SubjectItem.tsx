import React, { useState ,useRef } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Cart from './Cart'
import SubjectInfo from './SubjectInfo'
import { FaBook } from "react-icons/fa";
import { RootState, subData } from '@repo/ui/index'


const SubjectItem = (props:any) => {
  const [State,setState] = useState ()
  const [Board,setBoard] = useState();
  const [Cartt,setCart] = useState(false)
  const [Close,setOpen] = useState(false);
  const [Bg,setBg] = useState<number[]>([]);

  const [notAdd,setAdd] = useState(false);



  const dispatch = useDispatch();
  const subject = useSelector((state:RootState)=> state.subslice.Subjects)
  const States = useSelector((state:RootState)=> state.subslice.item)
  const Boardlabel = useSelector((state:RootState)=> state.subslice.BoardLabel)
  const std = useSelector((state:RootState)=> state.subslice.Standards);
  const CartItem = useSelector((state:RootState)=> state.subslice.Cart);


const stylee = {
  backgroundColor:'purple'
}


  function StateHandler(event:any) {
    let st =  event.target.value;
    setState(st)
    dispatch(subData.StateSelect(st));
  }
  function BoardHandler(event:any){
    let bd = event.target.value;
    setBoard(bd)  
    dispatch(subData.BoardSelect(bd));



  }
  function changeHandler(event: React.ChangeEvent<HTMLSelectElement>): void {
    const dd = event.target.value;
    dispatch(subData.SetSuject([dd, Board]));

  }

  function closeButoonHadler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    
    Close == false ? setOpen(true) : setOpen(false);
}

  function Carthandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
   
    setCart(true);
  }

  function Subjecthandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setCart(false)
  }
  function SubjectAddHandler(index:number){

   setBg([index,...Bg]);
   console.log(Bg)

   
  
     
  }

  function AddItem(item: { name: string; content: string; id: number; img: string }): any {
    throw new Error('Function not implemented.')
  }

  return (
    <div className='  relative top-5   box-border items-center justify-center flex flex-col w-full overflow-y-hidden'>
      <div className=' flex justify-evenly box-border p-2  top-0 w-full '>
            <button onClick={Subjecthandler} className='w-full  rounded-xl font-bold text-2xl sm:text-xl bg-red-500'>
              Enroll Subject
            </button>
            <button onClick={Carthandler} className='bg-sky-500 font-bold text-2xl sm:text-xl rounded-xl w-full box-border p-2 justify-center items-center'><strong>{CartItem.length}</strong>  <span>Subject</span></button>
      </div>
     {
      Cartt == true ? (<Cart/>) :(
        <section className='w-full items-center content-center flex flex-col relative'>
     <span className=' box-border p-2 text-center w-full my-2'>
        <h1><strong>Please Enroll Subject to Continue</strong></h1>
        <span className='w-full border-sky-100 bg-white'></span>
      </span>
      <div className='grid grid-cols-2 w-[60%]  sm:w-full md:w-full gap-10 '>
        <select name="" id="" onChange={StateHandler} className='w-full box-border p-2 rounded-2xl'>
          {
            States.map((item:any,index)=>(
              <option key={index} value={State} >{item.StateName}</option>
            ))
          }
        </select>

        <select name="" id="" className='w-full box-border outline-none p-2 rounded-2xl focus:outline-green-500' value={Board} onChange={BoardHandler}>
          <option value="">Board</option>
         {
          Boardlabel.map((item:any,index)=>(
            <option value={item}>{item}</option>
          ))

         }
        </select>
      </div>
      <span className='w-full justify-center items-center   flex box-border p-3'>
        <select onChange={changeHandler} name="" id="" className='w-[60%] outline-none sm:w-[60%] box-border p-2 rounded-3xl focus:outline-green-400'>
          {
            std.map((item:any,index)=>(
              <option key={index} value={item}>{item}</option>
            ))
          }
        </select>
      </span>
   
    <div  className=' overflow-y-scroll box-border pb-4   max-h-[400px] scr flex  flex-col items-center w-full'>
    {
        subject.map((item,index)=>(
          <div    key={index} className={`card  afte  ${Bg.find((e)=>index === e )  ? '' : '' }  w-[70%] relative  sm:w-full  my-1 rounded-2xl  items-center box-border   py-1 flex justify-between  bg-base-100 shadow-xl`}
          >
           <span className='flex'>
         <span className='box-border text-[80px]  left-0
         '> <FaBook/></span>
           {/* <Image src={item.img} width={100} height={50}  alt="img" className='sepia' style={{filter:"drop-shadow(10px 10px 10px rgba(0,0,0,0.6))"}}/> */}
           <h1 className='font-bold text-xl '>{item.name}</h1>
           </span>
           <span>
             <button onClick={closeButoonHadler}>More</button>
           </span>
           <span>
             <button onMouseDown={()=> {SubjectAddHandler(index)} }  onClick={()=>{dispatch(AddItem(item))}} >{item.id}Enroll</button>
           </span>
          </div>
         
        ))
      }
    </div>
   
</section>
      )
     }
     {Close && (<SubjectInfo onClick={closeButoonHadler}/>)}
    </div>
  )
}

export default SubjectItem


