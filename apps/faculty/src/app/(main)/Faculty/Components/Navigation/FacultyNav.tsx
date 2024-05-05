import { USER_LOG_out } from '@/graphql/Admin/Mutations/input';
import { useMutation } from '@apollo/client';
import { Navigate, RootState ,commonSlice} from '@repo/ui/index';
import React, { useState } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaHouse, FaPlus, FaUsersGear } from 'react-icons/fa6';
import {toast} from 'react-hot-toast'
import {useSelector,useDispatch} from 'react-redux'
import Classes from '../../(faculty)/Home/Classes';


export interface MainNavProps{
    label:string,icon:React.ReactNode,path:string
}[]
const FacultyNav = () => {

    const [Active, setActive] = useState(0)
    const [orgLogut,{loading,error,data}] = useMutation(USER_LOG_out);
    const [Tog,setTog] = useState({display:'block',text:'20',width:'10%'})
    const [Tmode,setTmode] = useState(false);
    const [Dmode,setDmode] = useState(false);



    const mobnav:string = useSelector((state:RootState)=>state.commonUtil.mobNav.display);

      const ThemeMode = useSelector((state:RootState)=>state.commonUtil.themeMode);
      const dispatch = useDispatch();

        const menu:MainNavProps[] = [
            {label:"Home",icon:<FaHouse/>,path:'/Faculty'},
            {label:"Student",icon:<FaUsersGear />,path:'/Faculty/student'},
            {label:"Tasks",icon:<FaPlus/>,path:'/Faculty/tasks'},

            {label:"Profile",icon:<FaChalkboardTeacher />,path:'/Faculty/profile'},




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


        

  return ( 
      <main className="w-fit h-[80%] sm:hidden z-50 sm:fixed sm:left-0 sm:top-10 ">


          {Dmode && (<div className='  top-5 mx-[20%] sm:mx-[5%] sm:min-w-[600px] absolute box-border p-2 w-[70%] sm:w-[90%]'>
            <button onClick={(()=>{setDmode(false)})} className='box-border px-1 rounded-full z-50 bg-black text-white absolute right-2 top-0'>X</button>
            <Classes/>
            </div>)}

        <Navigate toplabel='Classes' navItem={menu} drawerhandler={()=>{drawerHandler()}} logouthandler={()=>{orgLogut()}} navHandler={()=>{dispatch(commonSlice.mobNavHandler('hidden'))}} themeHandler={()=>{themeHandler()}} mobnav={'hidden'} Tmode={Tmode}/>
        
          
     </main>
   
  )
}

export default FacultyNav;

