import './globals.css'
import type { Metadata } from 'next'
import {Inter} from 'next/font/google'
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Provider } from "@/components/Providers";

const lexend = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning Journey'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={cn(lexend.className, "antialiased min-h-screen pt-16")}>
    <Navbar />
    <Provider>
      <Navbar />
      {children}
      {/*<Toaster />*/}
    </Provider>
    </body>
    </html>
  )
}
