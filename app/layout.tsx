import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import {StoreProvider} from "../context/storeContext"
import CartSidebar from "./components/CartSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen bg-white overflow-x-hidden"
      >
        <StoreProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
