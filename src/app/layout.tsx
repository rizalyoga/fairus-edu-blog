import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import ProgressBarComponent from "@/components/progress-bar/ProgressBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Prabicara",
  description:
    "Prabicara adalah platform pembelajaran yang dirancang khusus untuk membantu orang tua dalam mendidik anak tunarungu secara mandiri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ProgressBarComponent />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
