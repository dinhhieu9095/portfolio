import type { Metadata } from "next";
import { Be_Vietnam_Pro }from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const be_vietnam_pro = Be_Vietnam_Pro({
  variable: "--font-be_vietnam_pro",
  weight: ["100","200"],
  subsets: ["latin"]
});
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
        className={be_vietnam_pro.variable}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}