import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HindiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">हिंदी समाचार</h1>
        <p className="text-gray-600 mb-8">Hindi news section coming soon...</p>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-gray-700">
            यह फीचर जल्द ही उपलब्ध होगा। हम हिंदी में समाचार प्रकाशित करने पर काम कर रहे हैं।
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            This feature is coming soon. We are working on publishing news in Hindi.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}