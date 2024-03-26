import { Dashboard} from '@repo/ui/index'
import React, { ReactNode } from 'react'


const Layout = ({children}:{children:ReactNode}) => {
  return (
    <section className='relative  w-full h-screen min-h-screen  flex'>
      
        <nav className='h-full sm:hidden w-[20%] bg-purple-600 box-border p-2 rounded-xl'>nav</nav>
        <main className='w-full flex justify-center'>
        {children}
        </main>
      
        
    </section>
  )
}

export default Layout
