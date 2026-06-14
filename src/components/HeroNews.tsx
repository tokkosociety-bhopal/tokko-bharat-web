import Link from "next/link";
import { ArrowRight } from "lucide-react";

type NewsItem = {
  id?: string; titleEn?: string; summaryEn?: string; imageUrl?: string; slug?: string; category?: string;
};

type HeroNewsProps = { heroNews?: NewsItem; topHeadlines?: NewsItem[]; };

export default function HeroNews({ heroNews, topHeadlines = [] }: HeroNewsProps) {
  if (!heroNews) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Hero */}
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer h-[450px]">
          <img src={heroNews.imageUrl || "https://picsum.photos/1200/700"} alt={heroNews.titleEn} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          
          <div className="absolute bottom-0 p-8 text-white">
            <span className="bg-red-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              {heroNews.category || "Top Story"}
            </span>
            <Link href={`/news/${heroNews.slug}`}>
              <h1 className="text-3xl md:text-4xl font-bold mt-4 leading-tight hover:text-red-400 transition-colors">
                {heroNews.titleEn}
              </h1>
            </Link>
            <p className="mt-4 text-gray-200 line-clamp-2 max-w-2xl">{heroNews.summaryEn}</p>
            <Link href={`/news/${heroNews.slug}`} className="inline-flex items-center gap-2 mt-6 bg-white text-gray-900 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-600 hover:text-white transition-colors">
              Read Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Top Headlines Sidebar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-5 border-b border-gray-100 pb-4">
            <h2 className="text-xl font-bold text-gray-900">Top Headlines</h2>
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          </div>
          <div className="space-y-4 flex-1">
            {topHeadlines.map((item, index) => (
              <Link key={item.id || index} href={`/news/${item.slug}`} className="flex gap-4 group">
                <span className="text-3xl font-bold text-gray-200 group-hover:text-red-600 transition-colors leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wide">{item.category}</span>
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2 mt-1">
                    {item.titleEn}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}