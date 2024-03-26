import React, { ReactNode } from 'react'

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
    <div className='w-full gap-2 overflow-y-scroll   relative box-border p-2  sm:justify-between  sm:flex-col flex h-screen min-h-screen bg-red-300'>
        <nav className={`${navClass}   bg-yellow-500 rounded-xl w-[20%] sm:hidden`}>{mainNav}</nav>

        <main className={`${mainClass} w-[80%] h-full  sm:w-full sm:bg-purple-600  rounded-xl`}>
            {children}
        </main>

        <nav className={`${mobnavClass} hidden  w-full bg-white rounded-xl box-border p-4   sm:flex`} style={{}}>{mobNav}</nav>
      
    </div>
  )
}

export default Dashboard
