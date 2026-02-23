import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import {StoreProvider} from "../context/storeContext"
import CartSidebar from "./components/CartSidebar";
import {Poppins} from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight:["100", "200", "300", "400", "500"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col min-h-screen bg-white overflow-x-hidden`}
        suppressHydrationWarning
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
