import './globals.css'
import First from '@/Components/LandingPage/Indroduction/First'
import { Provider } from 'react-redux';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  




  return (
    <html lang="en">
        
      <body className='scr'>
        
        {children}</body>
    </html>
  )
}