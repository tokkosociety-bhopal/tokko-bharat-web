import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="text-yellow-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Disclaimer</h1>
          </div>
          
          <p className="text-gray-600 mb-8">Last updated: June 14, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The information provided on <strong>Tokko Bharat</strong> (the "Website") is for general informational purposes only. All information on the Website is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. General Disclaimer</h2>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Website or reliance on any information provided on the Website. Your use of the Website and your reliance on any information on the Website is solely at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. External Links Disclaimer</h2>
            <p>
              The Website may contain (or you may be sent through the Website) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
            </p>
            <p>
              We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Website or any website or feature linked in any banner or other advertising.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Professional Disclaimer</h2>
            <p>
              The Website cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. News Content Disclaimer</h2>
            <p>
              All news articles, opinions, and other content published on Tokko Bharat are based on information available at the time of publication. While we strive to provide accurate and up-to-date information, news stories may evolve rapidly and information may change.
            </p>
            <ul className="space-y-2 ml-6">
              <li>• We do not guarantee the accuracy of breaking news reports</li>
              <li>• Information may be updated as new details emerge</li>
              <li>• Opinions expressed are those of the authors and do not necessarily reflect our views</li>
              <li>• We are not responsible for any actions taken based on our content</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Fair Use Disclaimer</h2>
            <p>
              This Website may contain copyrighted material whose use has not been specifically authorized by the copyright owners. We are making such material available for the purposes of criticism, comment, news reporting, teaching, scholarship, and research. We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Errors and Omissions Disclaimer</h2>
            <p>
              The information given by the Website is not always perfect and may contain errors or omissions. We make no warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2">Questions About This Disclaimer?</p>
              <p className="text-gray-700">
                If you have any questions about this Disclaimer, please contact us at{" "}
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