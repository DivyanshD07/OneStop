import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className=" bg-black">
        <Navbar />
        <div className="flex justify-center items-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}