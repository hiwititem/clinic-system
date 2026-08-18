import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "MediCare | Internal Medicine Clinic",
  description:
    "Professional and compassionate internal medicine care for adults.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}