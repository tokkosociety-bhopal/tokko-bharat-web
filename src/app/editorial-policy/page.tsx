import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, BookOpen, Shield, Users, CheckCircle } from "lucide-react";

export default function EditorialPolicyPage() {
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
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center">
              <BookOpen className="text-red-600" size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Editorial Policy</h1>
          </div>
          
          <p className="text-gray-600 mb-8">Last updated: June 14, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              At Tokko Bharat, we are committed to delivering news with the highest standards of journalistic integrity, accuracy, and fairness. This Editorial Policy outlines our principles and practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Our Commitment to Accuracy</h2>
            <p>
              We strive to ensure that all information published on Tokko Bharat is accurate and verified before publication. Our editorial team follows rigorous fact-checking procedures to maintain the highest standards of journalistic excellence.
            </p>
            <ul className="space-y-2 ml-6">
              <li>• All facts are verified through multiple reliable sources</li>
              <li>• We clearly distinguish between news reporting and opinion</li>
              <li>• Errors are corrected promptly and transparently</li>
              <li>• We attribute information to its source whenever possible</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Independence and Impartiality</h2>
            <p>
              Our editorial decisions are made independently, free from political, commercial, or any other external influence. We do not allow advertisers, sponsors, or any third parties to influence our news coverage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Fairness and Balance</h2>
            <p>
              We present news in a fair and balanced manner, giving due consideration to all relevant perspectives. When reporting on controversial issues, we make reasonable efforts to include viewpoints from all sides.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sources and Attribution</h2>
            <p>
              We rely on credible, authoritative sources for our reporting. Our standards for sources include:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Primary sources are preferred over secondary sources</li>
              <li>• Anonymous sources are used only when necessary and with editorial approval</li>
              <li>• We clearly identify the source of all information</li>
              <li>• We do not fabricate or invent sources</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Corrections Policy</h2>
            <p>
              If we publish inaccurate information, we will:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Issue a correction promptly upon discovery of the error</li>
              <li>• Clearly label corrections and explain what was wrong</li>
              <li>• Maintain a transparent corrections log</li>
              <li>• Learn from mistakes to prevent future errors</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Conflict of Interest</h2>
            <p>
              Our journalists and editors must disclose any potential conflicts of interest. We do not allow our staff to:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Accept gifts or favors from sources or subjects of coverage</li>
              <li>• Have financial interests in companies they cover</li>
              <li>• Use their position for personal gain</li>
              <li>• Allow personal relationships to influence coverage</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Privacy and Sensitivity</h2>
            <p>
              We respect the privacy of individuals and are sensitive to the impact of our reporting. We exercise particular care when reporting on:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Victims of crime or tragedy</li>
              <li>• Minors and vulnerable individuals</li>
              <li>• Medical and health information</li>
              <li>• Personal tragedies and sensitive matters</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Sponsored Content</h2>
            <p>
              Any sponsored content, advertisements, or paid partnerships are clearly labeled as such and are kept separate from our editorial content. Our news coverage is never influenced by advertising relationships.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Reader Engagement</h2>
            <p>
              We welcome feedback from our readers and take concerns seriously. Readers can contact our editorial team with questions, corrections, or concerns about our coverage.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mt-8 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2">Editorial Contact</p>
              <p className="text-gray-700">
                For editorial inquiries, corrections, or concerns, please contact us at{" "}
                <a href="mailto:editorial@tokkobharat.com" className="text-red-600 hover:underline">
                  editorial@tokkobharat.com
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