"use client";

import { motion } from "framer-motion";

export default function Process() {
  return (
    <section className="py-20 relative z-10 bg-[#050505]/60 backdrop-blur-md border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block w-full max-w-5xl">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-[#FF6B00]/20 blur-[100px] rounded-full pointer-events-none" />
            
            <img 
              src="/RAYA-GROUPS-04.png" 
              alt="Process Workflow" 
              className="relative z-10 w-full h-auto object-contain rounded-3xl border border-white/10 shadow-2xl shadow-black/80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
