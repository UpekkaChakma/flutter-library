import "./globals.css";
import { Inter } from "next/font/google";

import Sidebar from "@/components/section/sidebar";
import Navbar from "@/components/section/navbar";
import Footer from "@/components/section/footer";
import { ContextProvider } from "@/context/index.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flutter library",
  description: "A website for selling digital products like websites, app etc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <header>
            <Sidebar />
            <Navbar />
          </header>
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
