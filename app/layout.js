
import { Outfit } from "next/font/google";
import "./globals.css";

import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {ThemeProvider} from "@/components/ThemeProvider";
import AppProvider from "../context/AppProvider"

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Johndev",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
        <AppProvider>
              <body className={outfit.className}>
                  <ThemeProvider
                      attribute="class"
                      defaultTheme="system"
                      enableSystem
                      disableTransitionOnChange
                  >
                      <Header/>
                        {children}
                      <Footer/>
                  </ThemeProvider>
              </body>
        </AppProvider>
    </html>
  );
}
