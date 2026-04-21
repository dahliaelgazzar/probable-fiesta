import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HerEventTech | Where Female Event Tech Founders Thrive",
  description:
    "The premier accelerator program for female event technology founders and entrepreneurs. Live coaching, accountability, workbooks, and expert guidance to help you thrive or exit successfully.",
  keywords:
    "female founders, event tech, women entrepreneurs, startup accelerator, event technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
