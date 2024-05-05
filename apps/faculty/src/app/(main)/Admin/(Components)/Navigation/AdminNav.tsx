import { USER_LOG_out } from '@/graphql/Admin/Mutations/input';
import { useMutation } from '@apollo/client';
import { Navigate, RootState, commonSlice } from '@repo/ui/index';
import {useSelector,useDispatch} from 'react-redux'
import React, { useState } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaHouse, FaPlus, FaUsersGear } from 'react-icons/fa6';
import {toast} from 'react-hot-toast'


export interface MainNavProps{
    label:string,icon:React.ReactNode,path:string
}[]
const AdminNav = () => {

    const [Active, setActive] = useState(0)
    const [Tog,setTog] = useState({display:'block',text:'25',width:'10%'})
    const [orgLogut,{loading,error,data}] = useMutation(USER_LOG_out);
    const [Tmode,setTmode] = useState(false);
    const [Dmode,setDmode] = useState(false);



    const mobnav:string = useSelector((state:RootState)=>state.commonUtil.mobNav.display);

      const ThemeMode = useSelector((state:RootState)=>state.commonUtil.themeMode);
      const dispatch = useDispatch();


        const menu:MainNavProps[] = [
            {label:"Home",icon:<FaHouse/>,path:'/Admin'},
            {label:"Add",icon:<FaPlus/>,path:'/Admin/add'},
            {label:"Student",icon:<FaUsersGear />,path:'/Admin/student'},
            {label:"Faculty",icon:<FaChalkboardTeacher />,path:'/Admin/faculty'},




        ];
        const themeHandler = ()=>{

          
          setTmode((pre)=>!pre)
          if(ThemeMode === false){ 

            dispatch(commonSlice.ThemeMode(true));
          }else{
            dispatch(commonSlice.ThemeMode(false));
          }

        }

        const drawerHandler = () =>{
          setDmode((pre)=> pre === false ? true : false);

        }


        
        const logoutHandler = async()=>{
            try{
              await orgLogut();
               toast.success("Logged out successfully..")
               return window.location.href="/"
  
            }catch(err:any){
              toast.error(err.message)
  
            }
           
          }

          return (
          
            <main className="w-fit h-[80%] sm:hidden z-50 sm:fixed sm:left-0 sm:top-10 ">
  
          <Navigate  navItem={menu} drawerhandler={()=>{drawerHandler()}} logouthandler={()=>{orgLogut()}} navHandler={()=>{dispatch(commonSlice.mobNavHandler('hidden'))}} themeHandler={()=>{themeHandler()}} mobnav={'hidden'} Tmode={Tmode}/>
          
            
       </main>
          )
}

export default AdminNav
