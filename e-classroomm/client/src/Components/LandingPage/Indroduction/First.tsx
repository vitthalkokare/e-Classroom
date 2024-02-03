import React from 'react'

const im = '\public\pictures\Landingpage\top.mp4'

const First = () => {
  return (
    <main className='w-full h-screen  opacity-33 -z-30 absolute top-0'>
<video className='h-screen w-full  scale-100 transform'   autoPlay muted loop 
style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover', // This will make the video cover the entire container
  }}
>
<source  src="/pictures/Landingpage/top.mp4" type="video/mp4" />

</video>
        


    </main>

  )
}

export default First
