import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: June 14, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              At Tokko Bharat, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <ul className="space-y-3 mb-6">
              <li>• Personal information (name, email address) when you contact us</li>
              <li>• Usage data and browsing behavior</li>
              <li>• Device information and IP address</li>
              <li>• Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <ul className="space-y-3 mb-6">
              <li>• To provide and maintain our news services</li>
              <li>• To personalize your experience</li>
              <li>• To send you updates and newsletters (with your consent)</li>
              <li>• To improve our website and content</li>
              <li>• To analyze usage patterns and trends</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
            <p className="mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <p className="mb-6">
              You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at privacy@tokkobharat.com.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2">Questions?</p>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@tokkobharat.com" className="text-blue-600 hover:underline">
                  privacy@tokkobharat.com
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