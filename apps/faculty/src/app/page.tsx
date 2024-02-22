'use client'
import { RootState } from '@repo/ui/index';
import {useDispatch,useSelector} from 'react-redux'
import {gql,useQuery,useLazyQuery} from '@apollo/client'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { useState } from 'react';




export default function Home() {
  const [D,setD] = useState('')
  const [ss,setss] = useState()


  const myitem = useSelector((state: RootState) => state.counterr.value);
  

  

  const GET_USER = gql`
      query User{
          currentStudent{
            name
          }
        
      }
      
  
  `  
  // const [getu,{loading,error,data}] = useLazyQuery(GET_USER);
  const {loading,error,data} = useQuery(GET_USER);



   async function hello(){
    console.log(data)
    console.log(D)
   
   }

  
  

  function gett(event: React.ChangeEvent<HTMLInputElement>) {
    setD(event.target.value)
  }

  return (

   <div className="">
    <h1>{myitem}</h1>

    

    <button onClick={hello}>clicke me</button>
    <input type="text" value={D} onChange={(e)=>setD(e.target.value)}/>

    
     
    
    

   
   </div>
  );
}
