import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>

      this is main page

    <Link href={"/login"}>Login</Link>
      
    </div>
  )
}

export default page
