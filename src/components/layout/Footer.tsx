import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-[#FF6B00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group inline-flex mb-2">
              <img 
                src="/RAYA-GROUPS-02.png" 
                alt="Raya Groups Logo" 
                className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building Dreams. Designing Futures. Creating Value. We transform ideas into exceptional spaces and investment opportunities.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-all">
                <FaFacebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-all">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-all">
                <FaLinkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-all">
                <FaTwitter size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wider text-lg">QUICK LINKS</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Process', 'Projects', 'Careers', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-[#FF6B00] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wider text-lg">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/construction" className="text-gray-400 hover:text-[#FF6B00] transition-colors text-sm">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/interior" className="text-gray-400 hover:text-[#FF6B00] transition-colors text-sm">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="text-gray-400 hover:text-[#FF6B00] transition-colors text-sm">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#FF6B00] transition-colors text-sm">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wider text-lg">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="text-[#FF6B00] shrink-0 mt-1" size={18} />
                <span>No.21, Sathya Nagar, M.S Nagar Post, Baiyappanahalli Main Rd, Bangalore-560033</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="text-[#FF6B00] shrink-0" size={18} />
                <span>8884590096</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="text-[#FF6B00] shrink-0" size={18} />
                <span>rayagroupsofficial@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Raya Groups. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
