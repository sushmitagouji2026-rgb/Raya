import { Key, CheckCircle2 } from "lucide-react";
import ServiceWorkflow from "@/sections/ServiceWorkflow";
import Link from "next/link";

const workflowSteps = [
  { id: 1, title: "Requirement Analysis" },
  { id: 2, title: "Property Selection" },
  { id: 3, title: "Site Visit" },
  { id: 4, title: "Documentation" },
  { id: 5, title: "Purchase" },
  { id: 6, title: "Registration" },
];

export default function RealEstatePage() {
  return (
    <div className="pt-32 pb-20 relative min-h-screen overflow-hidden">
      
      {/* Header Section */}
      <section className="container mx-auto px-6 mb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center mb-8">
            <Key className="text-[#FF6B00] w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-6">
            REAL <br/><span className="text-[#FF6B00]">ESTATE</span>
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Unlock the door to your future. From premium residential projects to high-yield commercial investments, we guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-10 rounded-3xl hover:border-[#FF6B00]/50 transition-colors">
            <h3 className="text-2xl font-bold mb-4 tracking-wider">Our Services</h3>
            <ul className="space-y-4">
              {["Property Buying", "Property Selling", "Investment Consulting", "Residential Projects", "Commercial Projects"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-[#FF6B00] w-5 h-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass p-10 rounded-3xl hover:border-[#FF6B00]/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-2xl font-bold mb-4 tracking-wider text-[#FF6B00]">Why Partner With Us</h3>
            <ul className="space-y-4 relative z-10">
              {["Verified Properties", "Market Insights", "Legal Assistance", "End-to-End Support", "Transparent Pricing"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-white/50 w-5 h-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <ServiceWorkflow title="REAL ESTATE" steps={workflowSteps} />

      {/* CTA */}
      <section className="container mx-auto px-6 mt-20 text-center relative z-10">
        <div className="glass p-16 rounded-3xl relative overflow-hidden inline-block w-full max-w-4xl">
          <div className="absolute inset-0 bg-[#FF6B00]/5" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Find your dream property.</h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-[#FF6B00] text-white font-bold tracking-widest hover:bg-[#FF6B00]/90 glow-orange transition-all rounded-lg relative z-10"
          >
            EXPLORE PROPERTIES
          </Link>
        </div>
      </section>
    </div>
  );
}
