import React from 'react'
import LoginUser from './login'
import { gql, useQuery } from '@apollo/client'






const signup = () => {

    const Mtoken = gql`
    query Query($email: String, $password: String) {
        getUserToken(email: $email, password: $password)
      }
  `;

  const {loading,data,error} = useQuery(Mtoken)

  
  return (
    <div>
        <h1>Signup</h1>
        
      
    </div>
  )
}

export default signup
