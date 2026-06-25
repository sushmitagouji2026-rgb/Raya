"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Home, Key } from "lucide-react";

const services = [
  {
    title: "CONSTRUCTION",
    desc: "Premium residential, commercial, and industrial construction with uncompromising quality standards.",
    icon: Building2,
    link: "/construction",
    delay: 0.2
  },
  {
    title: "INTERIOR DESIGN",
    desc: "Luxury interiors, modular kitchens, and smart home concepts tailored to your lifestyle.",
    icon: Home,
    link: "/interior",
    delay: 0.4
  },
  {
    title: "REAL ESTATE",
    desc: "Verified properties, investment consulting, and end-to-end support for buying and selling.",
    icon: Key,
    link: "/real-estate",
    delay: 0.6
  }
];

export default function About() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest mb-8">
            ABOUT <span className="text-gradient">RAYA GROUPS</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Raya Groups is a trusted name in Construction, Interior Design, and Real Estate Development, delivering innovative solutions that combine quality, functionality, and long-term value. We transform ideas into exceptional spaces and investment opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: service.delay }}
            >
              <Link href={service.link} className="block h-full group">
                <div className="h-full p-10 rounded-2xl glass hover:glass-orange transition-all duration-500 transform hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(255,107,0,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-3xl group-hover:bg-[#FF6B00]/30 transition-all duration-500" />
                  
                  <div className="w-16 h-16 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#FF6B00]/50 transition-colors duration-500 relative z-10">
                    <service.icon className="text-[#FF6B00] w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold tracking-wider mb-4 group-hover:text-[#FF6B00] transition-colors duration-300 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                    {service.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-[#FF6B00] text-sm font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 relative z-10">
                    Explore Service <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
