"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] md:h-screen flex flex-col items-center justify-center overflow-hidden pb-24 md:pb-0 pt-32 md:pt-0">
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-0 md:-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-2 flex flex-col items-center"
        >

          <img 
            src="/RAYA-GROUPS-04.png" 
            alt="Raya Groups Logo" 
            className="w-full max-w-[280px] sm:max-w-md md:max-w-xl object-contain mb-4 md:-mb-4 drop-shadow-[0_0_20px_rgba(255,107,0,0.7)]" 
          />
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mt-4">
            Building Dreams. Designing Futures. Creating Value.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 w-full sm:w-auto"
        >
          <Link
            href="/construction"
            className="px-8 py-4 bg-[#FF6B00] text-white font-semibold tracking-wider hover:bg-[#FF6B00]/90 glow-orange transition-all rounded-md text-base sm:text-lg w-full sm:w-auto"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 glass text-white font-semibold tracking-wider hover:bg-white/10 hover:border-[#FF6B00]/50 transition-all rounded-md text-base sm:text-lg w-full sm:w-auto"
          >
            Get Free Quote
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#FF6B00]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
