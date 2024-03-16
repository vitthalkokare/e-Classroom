import "./globals.css";
import { StoreProvider } from "@repo/ui/index";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import GqlProvider from "./api/GqlProvider";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GqlProvider>
      <UserProvider>

          <StoreProvider>

            <body className="scr">{children}
            <Toaster/>
            </body>
          </StoreProvider>
          </UserProvider>

      </GqlProvider>
    </html>
  );
}
