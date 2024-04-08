import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='w-full top-0 left-0 h-full absolute  bg-white  flex justify-center items-center'>

<ClipLoader color="#000000" loading={true} size={100} />
    </div>
  )
}

export default Loading
