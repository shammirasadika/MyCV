import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Shammi Parussella - Software Engineer & .NET Consultant",
  description: "Portfolio of Shammi Parussella, a self-motivated Software Engineer with 4+ years of experience in .NET consulting, training, and solution development. Currently pursuing Master's in Data Analytics and AI at University of Tasmania.",
  keywords: ["Software Engineer", ".NET", "C#", "ASP.NET", "Azure", "React", "Full Stack Developer", "Melbourne", "Australia"],
  authors: [{ name: "Shammi Parussella" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
