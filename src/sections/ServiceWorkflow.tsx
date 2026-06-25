"use client";

import { motion } from "framer-motion";

interface Step {
  id: number;
  title: string;
}

interface ServiceWorkflowProps {
  title: string;
  steps: Step[];
}

export default function ServiceWorkflow({ title, steps }: ServiceWorkflowProps) {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-4 uppercase">
            {title} <span className="text-gradient">WORKFLOW</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center group relative"
              >
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-xl font-bold text-gray-400 group-hover:text-[#FF6B00] group-hover:glow-orange group-hover:border-[#FF6B00]/50 transition-all duration-300 bg-[#0A0A0A] mb-4 relative z-10">
                  {step.id}
                </div>
                <h3 className="text-sm font-semibold tracking-wider text-center text-gray-300 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                
                {/* Connecting Line for Mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden w-1 h-8 bg-white/10 my-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
