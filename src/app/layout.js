import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beats Headphone",
  description: "Made by ❤️ karan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className || "p-2"}>
      <Header/>
      {children}
      
      </body>
    </html>
  );
}
