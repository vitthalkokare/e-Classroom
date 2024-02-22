import "./globals.css";
import First from "@/Components/LandingPage/Indroduction/First";
import { Provider } from "react-redux";
import {StoreProvider} from "@repo/ui/index";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import {GqlProvider} from '@repo/ui/index'


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
          <body className="scr">{children}</body>
        </StoreProvider>
      </UserProvider>
    </GqlProvider>

    </html>
  );
}
