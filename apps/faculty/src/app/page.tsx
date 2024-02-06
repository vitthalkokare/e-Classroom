'use client'
import { RootState } from '@repo/ui/index';
import {useDispatch,useSelector} from 'react-redux'


export default function Home() {
  const myitem = useSelector((state: RootState) => state.counterr.value);

  return (
   <div className="">
    <h1>{myitem}</h1>

   
   </div>
  );
}
