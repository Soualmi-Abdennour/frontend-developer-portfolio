import type { Metadata } from "next";
import {Inter , Calistoga} from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { constructMetadata } from "@/lib/utils";

const inter =Inter({subsets:['latin'],variable:'--font-inter'})
const calistoga =Calistoga({subsets:['latin'],variable:'--font-calistoga',weight:['400']})
export const metadata=constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-inter")}>{children}</body>
    </html>
  );
}
