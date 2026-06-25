"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface BackgroundVideoProps {
  src: string;
  overlayOpacity?: number;
}

export default function BackgroundVideo({ src, overlayOpacity = 0.6 }: BackgroundVideoProps) {
  const pathname = usePathname();
  let currentSrc = src;
  let currentOpacity = overlayOpacity;

  if (pathname === '/construction') currentSrc = '/construction-3d.mp4';
  if (pathname === '/interior') currentSrc = '/interior-build-3d.mp4';
  if (pathname === '/real-estate') {
    return null;
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <motion.video
        key={currentSrc}
        autoPlay
        loop
        muted
        playsInline
        initial={{ x: "-50%", y: "-50%", scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover"
      >
        <source src={currentSrc} type="video/mp4" />
      </motion.video>
      {/* Dark overlay with slight orange tint for brand consistency */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]"
        style={{ opacity: currentOpacity }}
      />
      <div className="absolute inset-0 bg-[#FF6B00]/5 mix-blend-overlay" />
    </div>
  );
}
