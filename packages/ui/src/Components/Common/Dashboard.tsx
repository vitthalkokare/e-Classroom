import React, { ReactNode } from 'react'
import MobileNav from '../(Componets)/Classroom/Navigation/MobileNav'




export interface DashboardProps{
  children: React.ReactNode
  navClass?:string
  mobnavClass?:string
  mainClass?:string
  mobNav:React.ReactNode
  mainNav:React.ReactNode

}

const Dashboard = ({children,mainNav,mobNav,navClass,mobnavClass,mainClass}:DashboardProps) => {
  return (
   <main className={`flex w-full h-screen  p-80 bg-blue-400`}>
        <aside className={`min-w-[10%] box-border p-2 flex items-center mr-7`}>
          {mainNav}

        </aside>
        <section>
          {children}

        </section>
        <aside className={`hidden bg-yellow-500 sm:flex`}>
          {mobNav}

        </aside>
   </main>
  )
}

export default Dashboard
