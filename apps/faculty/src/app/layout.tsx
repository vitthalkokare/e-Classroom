'use client'

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { StoreProvider } from "@repo/ui/index";
import { GqlProvider } from "@repo/ui/index";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 

  

  return (
    <html lang="en">
      <GqlProvider>
        <StoreProvider>
      
          <body className=" dark:bg-darkmode bg-slate-50">
            <Toaster />

            {children}
          </body>         

        </StoreProvider>
      </GqlProvider>
    </html>
  );
}
