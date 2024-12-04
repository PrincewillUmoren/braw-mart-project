import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
import TopHeaderTwo from "./components/TopHeader-Two";
import { SidebarProviders } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Braw Mart Inc.",
  description: "Get the best deal in Braw Mart for everything clothing- SHoes, Bags...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProviders>
            <TopHeader/>
            <TopHeaderTwo/>
            <Navbar/>
            {children}
        </SidebarProviders>
      </body>
    </html>
  );
}
