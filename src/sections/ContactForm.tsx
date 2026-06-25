"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Quote request sent successfully!");
    }, 1500);
  };

  return (
    <section className="py-32 relative z-10" id="quote">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-widest mb-4">
            GET <span className="text-gradient">FREE QUOTE</span>
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Tell us about your project and our experts will get back to you with a detailed estimate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] transition-colors" placeholder="+91 8884590096" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] transition-colors" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Project Type</label>
                <select required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-[#0A0A0A]">Select Service</option>
                  <option value="construction" className="bg-[#0A0A0A]">Construction</option>
                  <option value="interior" className="bg-[#0A0A0A]">Interior Design</option>
                  <option value="real_estate" className="bg-[#0A0A0A]">Real Estate</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Location</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] transition-colors" placeholder="Bangalore, India" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Budget (Approx)</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] transition-colors" placeholder="Enter amount" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Project Details</label>
              <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] transition-colors resize-none" placeholder="Briefly describe your requirements..." />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 mt-4 bg-[#FF6B00] text-white font-bold tracking-widest rounded-lg hover:bg-[#FF6B00]/90 glow-orange transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "SENDING..." : "GET FREE QUOTE"}
              {!loading && <Send size={20} />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
