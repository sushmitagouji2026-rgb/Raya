import { Home, CheckCircle2 } from "lucide-react";
import ServiceWorkflow from "@/sections/ServiceWorkflow";
import Link from "next/link";

const workflowSteps = [
  { id: 1, title: "Consultation" },
  { id: 2, title: "Concept Design" },
  { id: 3, title: "3D Visualization" },
  { id: 4, title: "Material Selection" },
  { id: 5, title: "Execution" },
  { id: 6, title: "Handover" },
];

export default function InteriorPage() {
  return (
    <div className="pt-32 pb-20 relative min-h-screen overflow-hidden">
      
      {/* Header Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center mb-8">
            <Home className="text-[#FF6B00] w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-6">
            LUXURY <br/><span className="text-[#FF6B00]">INTERIORS</span>
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Design that speaks to your soul. We create spaces that are not just beautiful, but perfectly tailored to how you live, work, and play.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-10 rounded-3xl hover:border-[#FF6B00]/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-2xl font-bold mb-4 tracking-wider text-[#FF6B00]">Interior Services</h3>
            <ul className="space-y-4 relative z-10">
              {["Home Interiors", "Office Interiors", "Modular Kitchens", "Furniture Design", "Space Planning", "Luxury Interior Solutions"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-[#FF6B00] w-5 h-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass p-10 rounded-3xl hover:border-[#FF6B00]/50 transition-colors">
            <h3 className="text-2xl font-bold mb-4 tracking-wider">Our Approach</h3>
            <p className="text-gray-300 leading-relaxed mb-6 font-light">
              We believe every space has a story waiting to be told. From the initial concept design to 3D visualization and final handover, our meticulous process ensures that your vision becomes a stunning reality without any compromises on quality.
            </p>
            <p className="text-gray-300 leading-relaxed font-light">
              We source the finest materials and employ expert craftsmen to deliver interiors that are timeless, elegant, and functional.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <ServiceWorkflow title="INTERIOR DESIGN" steps={workflowSteps} />

      {/* CTA */}
      <section className="container mx-auto px-6 mt-20 text-center relative z-10">
        <div className="glass p-16 rounded-3xl relative overflow-hidden inline-block w-full max-w-4xl">
          <div className="absolute inset-0 bg-[#FF6B00]/5" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Transform your space today.</h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-[#FF6B00] text-white font-bold tracking-widest hover:bg-[#FF6B00]/90 glow-orange transition-all rounded-lg relative z-10"
          >
            BOOK INTERIOR CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
