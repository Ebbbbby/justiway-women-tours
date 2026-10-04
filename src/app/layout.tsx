import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import GlobalLoader from "@/components/GlobalLoader";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justiway Travel & Tours | Women-Only Tours",
  description:
    "Safe, women-first travel. Justiway Travel & Tours runs women-only tours with vetted guides, screened stays and 24/7 support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        <Header />
        <Navbar />
        <GlobalLoader />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
