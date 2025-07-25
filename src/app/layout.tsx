import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header&footer/Header";
import CircularScrollProgress from "@/components/main/CircularScrollProgress";
import Footer from "@/components/header&footer/Footer";
import CursorPointer from "@/components/main/CursorPointer";
import { ToastContainer } from "react-toastify";
import PopupOnLoad from "@/components/main/PopupOnLoad";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${notoSans.className} font-notoSans  antialiased overflow-x-hidden !bg-[#f3f6ec]`}
        className={`  antialiased overflow-x-hidden !bg-[#f3f6ec]`}
      >
          <Header/>
        <div className="w-full h-full relative overflow-x-hidden">
          <ToastContainer/>
          {children}
          <CursorPointer/>
          <Footer/>
          <PopupOnLoad/>
          <CircularScrollProgress/>
        </div>
      </body>
    </html>
  );
}
