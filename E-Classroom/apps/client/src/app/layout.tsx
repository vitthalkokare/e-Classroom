import "./globals.css";
import First from "@/Components/LandingPage/Indroduction/First";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import StoreProvider from "./StoreProvider";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <StoreProvider>
          <body className="scr">{children}</body>
        </StoreProvider>
      </UserProvider>
    </html>
  );
}
