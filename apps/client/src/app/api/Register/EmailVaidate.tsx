import React, { useState } from 'react'
import { FaBackward } from 'react-icons/fa6'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setCard } from '@repo/ui/index'

const EmailVaidate = (props:any) => {
  type UserCreatePayload = {
    email:string,
    password:string
  }

  const [EmailPayload,setEmailPayload] = useState('');
  const [PasswordPayload,setPasswordPayload] = useState('');

  const dispatch = useDispatch();



  const CreateUser = gql`
  mutation saveUser($email: String, $password: String) {
    saveUser(email: $email, password: $password)
  }
  
  
  `
  const VaryFiyemail = gql`

  query Query($email: String) {
    varyfyEmail(email: $email)
  }

  
  `


  const {loading:vfl,error:vfe,data:vfd} = useQuery(VaryFiyemail,{
    variables:{email:EmailPayload}
  })

  const clickme = () =>{
   

    
  }

    const [saveUser , {loading,error}] = useMutation(CreateUser,{
      variables:{email:EmailPayload,password:PasswordPayload},
      
    });


 async function createUser(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
      await saveUser({variables:{EmailPayload,PasswordPayload}})
      console.log('user created successfully')
      dispatch(setCard(false));
      console.log(vfd)
   
    setEmailPayload('')
    setPasswordPayload('')

   

    
  }

  return (
    <div className='w-full h-full bg-white rounded-3xl flex flex-col  box-border p-4 items-center absolute left-0 top-0'>
        <h1>Validate Emaile</h1>
        <div className='w-full box-border relative p-2 flex flex-col'>
           <form  onSubmit={createUser}>
           <div className='flex flex-col'>
           <label htmlFor="">Email/Phone</label>
            <input type="email" value={EmailPayload} onChange={(e)=>setEmailPayload(e.target.value)} required placeholder='xyz@gmail.com' className='box-border p-3 my-2 drop-shadow-xl border rounded-2xl'/>
           </div>
           <div className='flex flex-col'>
           <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password' value={PasswordPayload} onChange={(e)=>setPasswordPayload(e.target.value)} required  className='box-border p-3 my-2 drop-shadow-xl border rounded-2xl'/>
           </div>
            <button type='submit'>Continue</button>
            {error  && <p>{error.message}</p>}

</form>
      <button onClick={clickme}>clickemmme</button>
        </div>


        <button onClick={props.onClick} className='box-border absolute text-2xl px-2 py-1  left-0 top-0  rounded-full'><FaBackward/></button>
      
      
    </div>
  )
}

export default EmailVaidate
function ssetCard(arg0: boolean): any {
  throw new Error('Function not implemented.')
}

