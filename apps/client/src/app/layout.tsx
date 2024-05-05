'use client'
import "./globals.css";
import { StoreProvider} from "@repo/ui/index";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import GqlProvider from "./api/GqlProvider";
import { Toaster } from "react-hot-toast";
import {CommonContextProvider  } from "./contexts/common";
import { UserContextProvider } from "./contexts/UserContext";



export default function RootLayout({ children,}: { children: React.ReactNode;}) {


  return (
    <html lang="en">
      <GqlProvider>
      <UserProvider>

          <StoreProvider>
            <CommonContextProvider>
            <UserContextProvider>

            <body className={` dark:bg-darkmode  bg-slate-50`}>{children}
            <Toaster/>
            </body>
            </UserContextProvider>

            </CommonContextProvider>

          </StoreProvider>
          </UserProvider>

      </GqlProvider>
    </html>
  );
}


