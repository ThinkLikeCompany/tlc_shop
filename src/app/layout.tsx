import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from '@radix-ui/themes'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TLC Shop",
  description: "TLC Shop made by kekekuli to learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Theme accentColor="amber" grayColor="slate" style={{
          backgroundColor: "var(--amber-5)",
        }}>
          {children}
        </Theme>
      </body>
    </html>
  );
}
