'use client'
import React, { useEffect, useState } from 'react'
import { FaCirclePlus, FaRegSquarePlus } from 'react-icons/fa6';
import Card from '../Card';
import { RootState, setCard ,commonUi, subData} from '@repo/ui/index';
import {useSelector,useDispatch} from 'react-redux'
import { useMutation, useQuery } from '@apollo/client';
import { ADD_NEW_SUBJECT_DATA } from '@/graphql/Admin/Mutations/input';
import { SUBJECT_DATA } from '@/graphql/Admin/Queries/input';



export interface subjectProps{
   title: string
   about:string
   price:string
   state:string
   boardName:string
   standard:string
   info?:string
   fname:string
   vision:string
   exp:string

}
enum Board{ 

}
interface InputPros{
    state?:string
    boardName?:string
} 


const Dashboard = () => {
    const [Inputval,setInputval] = useState<InputPros>();
    const [Inputstate,setInputstate] = useState<any[]>([]);
    const [Inputboard,setInputboard] = useState<any[]>([]); 
    
    const [Subdata,setSubData] = useState<subjectProps>({
        title:"",
        about:"",
        standard:"",
        exp:"",
        vision:"",
        fname:"",
        price:"",
        boardName:"",
        state:"",
    

    })
   
    

    const [NewState,setNewState] = useState({c:false,name:''});
   
    const popcard = useSelector((state:RootState)=> state.AuthCard.isUser)

    const [addNewsubject,{loading}] = useMutation(ADD_NEW_SUBJECT_DATA)
    
    const {data} = useQuery(SUBJECT_DATA)


    useEffect(()=>{
        const serverData = async()=>{

            const ss = await data?.subjectData

            console.log(ss)

                try{
                    if(data && ss?.length > 0){
                        ss.map((item:any)=>{
                        
                         setInputstate((pre)=>[
                             ...pre,item?.state
                         ])

                         setInputboard((pre)=>[
                            ...pre,item?.boardName
                         ])
         
                        })
         
                        
                     }
                }catch(err){
                    console.log(err)
                }
        }

        serverData();

    },[data])
    const standard = [
        { key: "Class1", val: "1st Class" },
        { key: "Class2", val: "2nd Class" },
        { key: "Class3", val: "3rd Class" },
        { key: "Class4", val: "4th Class" },
        { key: "Class5", val: "5th Class" },
        { key: "Class6", val: "6th Class" },
        { key: "Class7", val: "7th Class" },
        { key: "Class8", val: "8th Class" },
        { key: "Class9", val: "9th Class" },
        { key: "Class10", val: "10th Class" },
      ];


  
    function subItemChanger(event: React.ChangeEvent<HTMLInputElement>){
        const {name,value} = event.target
        if(name === 'state'){
           setInputval({state:value})
        }

        if(name === 'boardName'){
            setInputval({boardName:value})
        }
        

        
        
    }
    async function subItemHandler(){
        
        if(Inputval?.state){
            setInputstate((pre)=>(
                [...pre, Inputval?.state]
            ))
        }
        if(Inputval?.boardName){
            setInputboard((pre)=>(
                [...pre, Inputval?.boardName]
            ))
        }


        
        setNewState({c:false,name:''})
    }

    function changeHandler(event: any) {
        const {name,value} = event.target
        if (name === 'price') {
            setSubData(prevState => ({
              ...prevState,
              [name]: value === '' ? null : Number(value),
            }));
          } else {
            setSubData(prevState => ({
              ...prevState,
              [name]: value,
            }));

        }

        
        
    }

    async function addSubjectHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {

        event.preventDefault();
       try{
        await addNewsubject({variables:{input:Subdata}})
       }catch(err){
        return err;
       }

    }

  return (
        <main className='relative bg-gray-300 rounded-2xl  p-4   box-border flex flex-col items-center  '>
            <section className='flex justify-evenly bg-pink-500 items-center w-full'>
                <div className='flex gap-2 bg-red-400 w-full  box-border p-2 '>
                <select name="state" onChange={changeHandler} id="" value={Subdata.state}>
                    <option className='read-only:'>State</option>

                {Inputstate.map((item,index)=>(
                        <option value={item} key={index} >{item}</option>
                    ))}
                    
                </select>
                <button className='text-2xl' onClick={()=>{setNewState({c:true,name:'state'})}}><FaCirclePlus />
 </button>
                </div>

                
                <div className='flex gap-2 w-full box-border p-2 '>
                <select name="boardName" id="" onChange={changeHandler} value={Subdata.boardName}>
                <option className='read-only:'>Board</option>

                {Inputboard.map((item,index)=>(
                        <option value={item} key={index} >{item}</option>
                    ))}
                    
                </select>
                <button className='text-2xl' onClick={()=>{setNewState({c:true,name:'boardName'})}}><FaCirclePlus />
 </button>
                </div>
                <div className='flex w-full box-border p-2 '>
                <select name="standard" onChange={changeHandler} value={Subdata.standard} id="">Class

                    <option className='read-only:'>Class</option>
                    {standard.map((item,index)=>(
                        <option key={index} value={item.key}>{item.val}</option>
                    ))}

                    
                </select>
               
                </div>


               
                
                
            </section>
            <section>
                <section className='flex gap-2'>
                    <commonUi.Common.InputField
                    label='Title'
                    id='title'
                    name='title'
                    value={Subdata.title}
                    type='text'
                    onChange={changeHandler}

                    
                    
                    />
                    <commonUi.Common.InputField
                    label='about'
                    id='about'
                    name='about'
                    value={Subdata.about}
                    type='text'
                    onChange={changeHandler}


                    
                    
                    />
                    <commonUi.Common.InputField
                    label='Price'
                    id='price'
                    name='price'
                    type='number'
                    value={Subdata.price}
                    onChange={changeHandler}


                    
                    
                    />
                    
                    
                </section>
            </section>

            <section className='flex gap-2'>
            <commonUi.Common.InputField
                    label='Faculty'
                    id='Name'
                    name='fname'
                    value={Subdata.fname}
                    type='text'
                    onChange={changeHandler}


                    
                    
                    />
                     <commonUi.Common.InputField
                    label='Experience'
                    id='Experience'
                    name='exp'
                    value={Subdata.exp}
                    type='text'
                    onChange={changeHandler}


                    
                    
                    />
                     <commonUi.Common.InputField
                    label='Vision'
                    id='Vision'
                    name='vision'
                    value={Subdata.vision}
                    type='text'
                    onChange={changeHandler}


                    
                    
                    />
            </section>
            <div>
                <button className='bg-black text-white p-2 rounded-xl m-2' onClick={addSubjectHandler}>Add Subject</button>
            </div>



            {NewState.c && <Card btn={()=>{setNewState({c:false,name:''})}} children={<><input className='border-2 box-border p-4' type='text' name={NewState.name} onChange={subItemChanger} placeholder='Add new State'/><button className='bg-black text-white box-border p-4' onClick={subItemHandler} >Add</button></>}/>}

        </main>

      
  )
}

export default Dashboard
