import './globals.css'
import First from '@/Components/LandingPage/Indroduction/First'
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import StoreProvider from './StoreProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  




  return (
    <StoreProvider>

    <html lang="en">
               
     <body className='scr'>
      
                  {children}


        </body>
       

    </html>
    </StoreProvider>
  )
}