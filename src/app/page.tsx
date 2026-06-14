import Header from "@/components/Header";
import BreakingNews from "@/components/BreakingNews";
import HeroNews from "@/components/HeroNews";
import Footer from "@/components/Footer";
import TrendingNews from "@/components/TrendingNews";
import NewsCard from "@/components/NewsCard";
import SectionHeader from "@/components/SectionHeader";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home - Latest Breaking News & Headlines",
  description: "Stay updated with the latest breaking news, top headlines, and in-depth analysis from India and around the world on Tokko Bharat.",
};

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const q = query(collection(db, "news"), orderBy("createdAt", "desc"), limit(20));
  const snapshot = await getDocs(q);

  const news = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as any[];

  const heroNews = news[0];
  const topHeadlines = news.slice(1, 6);
  const latestNews = news.slice(6);

  const breakingNews = news.filter(
  (item) => item.isBreaking === true
);

console.log("BREAKING NEWS COUNT:", breakingNews.length);

const trendingNews = news.filter(
  (item) => item.isTrending === true
);

  const categories = ["technology", "sports", "business", "india", "world"];
  const newsByCategory: Record<string, any[]> = {};
  
  categories.forEach((cat) => {
    newsByCategory[cat] = news.filter((item) => item.category === cat).slice(0, 4);
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <BreakingNews news={breakingNews} />

      {heroNews && (
  <HeroNews
    heroNews={heroNews}
    topHeadlines={trendingNews.slice(0, 5)}
  />
)}

      {categories.map((category) => {
        if (newsByCategory[category].length === 0) return null;
        
        return (
          <section key={category} className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900 capitalize">
                {category === "india" ? "India" : category}
              </h2>
              <Link
                href={`/category/${category}`}
                className="text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                View All →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsByCategory[category].map((item) => (
                <NewsCard
                  key={item.id}
                  slug={item.slug}
                  title={item.titleEn}
                  excerpt={item.summaryEn}
                  imageUrl={item.imageUrl}
                  category={item.category}
                  publishedAt={
                    item.createdAt?.toDate
                      ? new Date(item.createdAt.toDate()).toLocaleDateString()
                      : "Recently"
                  }
                  readTime="5 min read"
                />
              ))}
            </div>
          </section>
        );
      })}

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <SectionHeader title="Latest News" viewAllLink="/latest" />
            <div className="grid md:grid-cols-2 gap-6">
              {latestNews.slice(0, 6).map((item) => (
                <NewsCard
                  key={item.id}
                  slug={item.slug}
                  title={item.titleEn}
                  excerpt={item.summaryEn}
                  imageUrl={item.imageUrl}
                  category={item.category}
                  publishedAt={
                    item.createdAt?.toDate
                      ? new Date(item.createdAt.toDate()).toLocaleDateString()
                      : "Recently"
                  }
                  readTime="5 min read"
                />
              ))}
            </div>
          </div>

          <aside className="space-y-8">

  <TrendingNews
    news={trendingNews.slice(0, 5)}
  />

  <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white shadow-lg">
    <h3 className="text-xl font-bold mb-2">
      Daily Newsletter
    </h3>

    <p className="text-red-100 text-sm mb-4">
      Get the best news delivered to your inbox every morning.
    </p>

    <input
      type="email"
      placeholder="Your email address"
      className="w-full px-4 py-2 rounded-lg text-gray-800 text-sm mb-3 outline-none"
    />

    <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-semibold text-sm transition-colors">
      Subscribe Now
    </button>
  </div>

</aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}