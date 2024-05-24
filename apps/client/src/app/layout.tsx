'use client'
import "./globals.css";
import { StoreProvider} from "@repo/ui/index";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import GqlProvider from "./api/GqlProvider";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "./contexts/UserContext";
import { CommonContextProvider } from "./contexts/common";



export default function RootLayout({ children,}: { children: React.ReactNode;}) {


  return (
    <html lang="en">
      <GqlProvider>
      <UserProvider>

          <StoreProvider>
            <UserContextProvider>
            <CommonContextProvider>
            <body className={` dark:bg-darkmode  bg-slate-50`}>{children}
            <Toaster/>
            </body>
            </CommonContextProvider>
            </UserContextProvider>


          </StoreProvider>
          </UserProvider>

      </GqlProvider>
    </html>
  );
}


