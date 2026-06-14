import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white tracking-tight">TOKKO <span className="text-red-500">BHARAT</span></h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your trusted source for the latest Hindi and English news, breaking headlines, and in-depth analysis.
            </p>
            
            {/* Social Media Icons - Updated with Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com/tokkobharat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              
              <a
                href="https://twitter.com/tokkobharat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors"
                title="Twitter"
              >
                <FaXTwitter size={18} />
              </a>
              
              <a
                href="https://instagram.com/tokkobharat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              
              <a
                href="https://youtube.com/@tokkobharat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {["India", "World", "Business", "Technology", "Sports", "Entertainment"].map(cat => (
                <li key={cat}>
                  <Link href={`/category/${cat.toLowerCase()}`} className="hover:text-red-500 transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
  <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
  <ul className="space-y-2 text-sm">
    {[
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Editorial Policy", href: "/editorial-policy" },
      { name: "Advertise", href: "/advertise" }
    ].map(link => (
      <li key={link.name}>
        <Link href={link.href} className="hover:text-red-500 transition-colors">
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-500 shrink-0 mt-0.5" />
                <span>37, Radhapuram Colony,, New Delhi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-red-500 shrink-0" />
                <span>+91 90095 85458</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-red-500 shrink-0" />
                <span>contact@tokkobharat.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Tokko Bharat. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed with ❤️ for the people of India.</p>
        </div>
      </div>
    </footer>
  );
}