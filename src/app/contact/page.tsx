import ContactForm from "@/sections/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-6">
          GET IN <span className="text-[#FF6B00]">TOUCH</span>
        </h1>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
          We're here to help you transform your vision into reality. Reach out to us for any inquiries.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-6 mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <div className="glass p-8 rounded-3xl text-center group hover:border-[#FF6B00]/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center mx-auto mb-6 group-hover:glow-orange transition-all">
              <Phone className="text-[#FF6B00] w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 tracking-wider">Call Us</h3>
            <p className="text-gray-400 mb-4">Mon-Sat from 9am to 6pm.</p>
            <Link href="tel:+918884590096" className="text-lg font-semibold text-white hover:text-[#FF6B00] transition-colors">
              +91 8884590096
            </Link>
          </div>

          {/* Email */}
          <div className="glass p-8 rounded-3xl text-center group hover:border-[#FF6B00]/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center mx-auto mb-6 group-hover:glow-orange transition-all">
              <Mail className="text-[#FF6B00] w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 tracking-wider">Email Us</h3>
            <p className="text-gray-400 mb-4">We'll respond within 24 hours.</p>
            <Link href="mailto:rayagroupsofficial@gmail.com" className="text-sm md:text-base font-semibold text-white hover:text-[#FF6B00] transition-colors break-all">
              rayagroupsofficial@gmail.com
            </Link>
          </div>

          {/* Address */}
          <div className="glass p-8 rounded-3xl text-center group hover:border-[#FF6B00]/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center mx-auto mb-6 group-hover:glow-orange transition-all">
              <MapPin className="text-[#FF6B00] w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 tracking-wider">Visit Us</h3>
            <p className="text-gray-400 mb-4">Come say hello at our office.</p>
            <p className="text-sm text-white leading-relaxed">
              No.21, Sathya Nagar, M.S Nagar Post,<br/>Baiyappanahalli Main Rd,<br/>Bangalore-560033
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <ContactForm />
    </div>
  );
}
