'use client'
import React, { useEffect } from 'react'
import useFaculty from '../../util/useFaculty'

const page = () => {

  const {Faculty,data} = useFaculty()

  useEffect(() => {

  },[])
  return (
    <div>
      <div>Faculty Profile</div>
      
    </div>
  )
}

export default page
