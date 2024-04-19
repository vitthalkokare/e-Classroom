'use client'
import React, { useEffect, useState } from 'react'
import { useMutation} from '@apollo/client';
import { CREATE_USER } from '@/graphql/user/mutation';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useAuth from '@/app/util/useAuth';
import { commonUi, setCard } from '@repo/ui/index';
import LoginPage from '../login/page';




const SignupPage = (props:any) => {
  const [Hidepass,setPass] = useState('password')

  const [Lpage,setLpage] = useState(false)
  const [SignupData,setLoginData] = useState({
    email:'',
    password:''
  });

  const {isAuthenticated,loading} = useAuth();
  const router = useRouter()

  useEffect(()=>{

    if(isAuthenticated == true){
      router.push('/Classroom')

    }

  },[isAuthenticated]);

  const [createUser,{loading:cloading,error,data}] = useMutation(CREATE_USER)

    
  function changeHandler(e:React.ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target;
      setLoginData((prev) => ({
        ...prev,
        [name]: value
      }))
      
    
  }
  const LoginHandler = async(e:any)=>{
    e.preventDefault();
		try{
       const user = await createUser({variables:{email:SignupData.email, password:SignupData.password}});

        toast.success("User created successfully..!")
        return window.location.href = '/login';

  }catch(err:any){
    try{
      if(error){
      
        const d = JSON.parse(error.message)
        for(let key of d){
         return toast.error(key.message)

        }

           toast.error(err.message)

        }
    }catch(err){
      

    }
    toast.error(err.message)
 

  }
  }

 

  return (
 <>
 <commonUi.AuthCard 
      title={'SignUp'}

         children={(
      <form action="" className='flex flex-col items-center' onSubmit={LoginHandler}>
      <commonUi.InputField
        label='email'
        id='email'
        type='email'
        name='email'
        onChange={changeHandler}
        value={SignupData.email}
        
      />
      <commonUi.InputField
        label='password'
        id='password'
        type={Hidepass}
        name='password'
        value={SignupData.password}
        onChange={changeHandler}
        btnNode={<commonUi.PassShowHide hideShow={setPass}/>}


      />


<commonUi.Button type="submit" label="SignUp" />

    </form>


    
    
    )} 

    refbtn={{lebel:"Already have Account..!",children:(<LoginPage/>), set:Lpage,onclick:()=>{
      props.onClick
      setLpage(true);
    }}}
 />

 </>
  )
  

    


   
  
}

export default SignupPage


