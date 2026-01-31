import type { Metadata } from "next"
import "./globals.css"
import Header from "./Components/Header"
import { Fraunces } from "next/font/google";

const fraunces=Fraunces({
  subsets:["latin"],
  weight: ["400","500"],
  variable:"--font-gopher",
});

export const metadata: Metadata = {
  title: "Lilac Template",
  description: "Therapy website template",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fraunces.variable}>
      <body className="bg-[#fbf6ef] text-[#223614] font-[var(--font-gopher)]">
        <Header />
        {children}
      </body>
    </html>
  )
}
