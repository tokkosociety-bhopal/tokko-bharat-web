import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: June 14, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Welcome to Tokko Bharat. By accessing or using our website, you agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use of Content</h2>
            <ul className="space-y-3 mb-6">
              <li>• All content on this website is protected by copyright laws</li>
              <li>• You may view and print pages for personal use</li>
              <li>• Commercial use requires written permission</li>
              <li>• You must not republish material without authorization</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Conduct</h2>
            <p className="mb-6">You agree not to:</p>
            <ul className="space-y-3 mb-6">
              <li>• Use the website in any way that causes harm</li>
              <li>• Attempt to gain unauthorized access to our systems</li>
              <li>• Transmit malicious code or viruses</li>
              <li>• Violate any applicable laws or regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Disclaimer</h2>
            <p className="mb-6">
              The information on this website is provided "as is" without any warranties. We do not guarantee the accuracy or completeness of the content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-6">
              Tokko Bharat shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of the modified terms.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-600 p-6 mt-8 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2">Contact Information</p>
              <p className="text-gray-700">
                For any questions regarding these Terms, contact us at{" "}
                <a href="mailto:legal@tokkobharat.com" className="text-red-600 hover:underline">
                  legal@tokkobharat.com
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