import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <Navbar/>
        {children}
      </div>
        </body>
    </html>
  );
}
