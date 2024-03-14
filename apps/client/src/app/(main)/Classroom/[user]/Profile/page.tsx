'use client'
import useAuth from '@/app/util/useAuth'
import React, { useEffect } from 'react'

const page = () => {
  const {isAuthenticated,data,user,loading,error} = useAuth();
 

  
  return (
    <div>
      {loading ? (<>loading....</>):(<>
      
            <h1>this is profile</h1>
            {data && data.authUser?.studentData ? (<>
                <div>
                  <h1>{data.authUser.studentData.email}</h1>
                </div>
            </>):(<>Data is not avalable</>)}

      
      </>)}
      
    </div>
  )
}

export default page
