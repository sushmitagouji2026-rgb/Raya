import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import Scene from "@/components/3d/Scene";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raya Groups | Premium Construction & Real Estate",
  description: "Building Dreams. Designing Futures. Creating Value.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#0A0A0A] text-white`}>
        <LoadingScreen />
        <BackgroundVideo src="/hero-loop-zoomed.mp4" overlayOpacity={0.5} />
        <Scene />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
