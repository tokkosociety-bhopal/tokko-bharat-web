import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Users, BarChart3, Award } from "lucide-react";

export default function AdvertisePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Advertise With Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reach millions of readers and grow your brand with Tokko Bharat's advertising solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <TrendingUp className="text-red-600 mx-auto mb-3" size={32} />
            <div className="text-3xl font-bold text-gray-900">1M+</div>
            <div className="text-gray-600 text-sm">Monthly Readers</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <Users className="text-red-600 mx-auto mb-3" size={32} />
            <div className="text-3xl font-bold text-gray-900">500K+</div>
            <div className="text-gray-600 text-sm">Social Followers</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <BarChart3 className="text-red-600 mx-auto mb-3" size={32} />
            <div className="text-3xl font-bold text-gray-900">95%</div>
            <div className="text-gray-600 text-sm">Engagement Rate</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <Award className="text-red-600 mx-auto mb-3" size={32} />
            <div className="text-3xl font-bold text-gray-900">10+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Why Advertise */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Tokko Bharat?</h2>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Wide Reach</h3>
                  <p className="text-gray-600 text-sm">Connect with a diverse audience across India and globally</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Targeted Advertising</h3>
                  <p className="text-gray-600 text-sm">Reach specific demographics and interest groups</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">High Engagement</h3>
                  <p className="text-gray-600 text-sm">Our readers actively engage with content and ads</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Competitive Pricing</h3>
                  <p className="text-gray-600 text-sm">Affordable advertising solutions for all budgets</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Advertising Options */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Advertising Options</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-2">Banner Ads</h3>
                <p className="text-gray-600 text-sm mb-2">Display ads across our website</p>
                <p className="text-red-600 font-semibold text-sm">Starting at ₹5,000/month</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-2">Sponsored Content</h3>
                <p className="text-gray-600 text-sm mb-2">Native advertising and sponsored articles</p>
                <p className="text-red-600 font-semibold text-sm">Starting at ₹10,000/article</p>
              </div>

              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-2">Newsletter Sponsorship</h3>
                <p className="text-gray-600 text-sm mb-2">Reach our email subscribers</p>
                <p className="text-red-600 font-semibold text-sm">Starting at ₹3,000/email</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Contact our advertising team today and let's discuss how we can help you reach your target audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:advertise@tokkobharat.com"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+919876543210"
              className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors"
            >
              Call: +91 90095 85458
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}