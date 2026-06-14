import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Tokko Bharat</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              Tokko Bharat is your trusted source for the latest Hindi and English news, breaking headlines, and in-depth analysis from India and around the world.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="mb-6">
              We are committed to delivering accurate, timely, and unbiased news to our readers. Our mission is to keep you informed about the latest developments in politics, business, technology, sports, entertainment, and more.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Offer</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Breaking news and real-time updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>In-depth analysis and expert opinions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Comprehensive coverage across multiple categories</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">✓</span>
                <span>Bilingual content in Hindi and English</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
            <p className="mb-6">
              We believe in journalistic integrity, factual reporting, and serving our readers with the highest standards of professionalism. Our team of experienced journalists and editors work tirelessly to bring you the most important stories that matter.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2">Contact Us</p>
              <p className="text-gray-700">
                Have questions or feedback? Reach out to us at{" "}
                <a href="mailto:contact@tokkobharat.com" className="text-red-600 hover:underline">
                  contact@tokkobharat.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}