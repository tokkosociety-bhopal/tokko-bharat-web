import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, User, Share2, Tag } from "lucide-react";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { Metadata } from "next";
import NewsViewCounter from "@/components/NewsViewCounter";

type NewsType = {
  id: string;
  titleEn: string;
  titleHi: string;
  summaryEn: string;
  summaryHi: string;
  contentEn: string;
  contentHi: string;
  imageUrl: string;
  category: string;
  slug: string;
  author?: string;
  createdAt?: any;
  updatedAt?: any;
  publishedAt?: any;
  tags?: string[];
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const snapshot = await getDocs(collection(db, "news"));
  const news = snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .find((item: any) => item.slug === slug) as NewsType | undefined;

  if (!news) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: news.titleEn,
    description: news.summaryEn,
    keywords: [news.category, "news", "india", news.titleEn],
    authors: [{ name: news.author || "Tokko Bharat Desk" }],
    openGraph: {
      title: news.titleEn,
      description: news.summaryEn,
      url: `https://tokkobharat.com/news/${news.slug}`,
      siteName: "Tokko Bharat",
      images: [
        {
          url: news.imageUrl,
          width: 1200,
          height: 630,
          alt: news.titleEn,
        },
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: news.createdAt?.toDate ? new Date(news.createdAt.toDate()).toISOString() : undefined,
      modifiedTime: news.updatedAt?.toDate ? new Date(news.updatedAt.toDate()).toISOString() : undefined,
      authors: [news.author || "Tokko Bharat Desk"],
      tags: [news.category],
    },
    twitter: {
      card: "summary_large_image",
      title: news.titleEn,
      description: news.summaryEn,
      images: [news.imageUrl],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const snapshot = await getDocs(collection(db, "news"));
  const newsList = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as NewsType[];

  const news = newsList.find((item) => item.slug === slug);

  const relatedNews = newsList
    .filter((item) => item.category === news?.category && item.slug !== slug)
    .slice(0, 3);

  if (!news) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/" className="text-red-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const publishedDate = news.createdAt?.toDate
    ? new Date(news.createdAt.toDate()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Recently Published";

  const updatedDate = news.updatedAt?.toDate
    ? new Date(news.updatedAt.toDate()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const authorName = news.author || "Tokko Bharat Desk";

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <NewsViewCounter newsId={news.id} />
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
            ← Back to Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href={`/category/${news.category}`} className="text-sm text-gray-600 hover:text-red-600 capitalize">
            {news.category}
          </Link>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden mb-8 shadow-lg">
          <img src={news.imageUrl} alt={news.titleEn} className="w-full h-full object-cover" />
        </div>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            {news.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {news.titleEn}
        </h1>

        {/* Meta Info - Author, Date, Read Time */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 border-y border-gray-200 py-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <User size={16} className="text-red-600" />
            </div>
            <span className="font-semibold text-gray-900">{authorName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-gray-400" />
            <div>
              <span className="text-gray-900">Published:</span> {publishedDate}
            </div>
          </div>
          {updatedDate && (
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gray-400" />
              <div>
                <span className="text-gray-900">Updated:</span> {updatedDate}
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-gray-400" />
            <span>5 min read</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-red-600 pl-6">
          {news.summaryEn}
        </p>

        {/* Share Buttons */}
        <ShareButtons 
          url={`http://localhost:3000/news/${news.slug}`}
          title={news.titleEn}
        />

        {/* Full Content */}
        <div
          className="prose prose-lg max-w-none text-gray-800 leading-8 bg-white p-8 rounded-xl border border-gray-200"
          dangerouslySetInnerHTML={{
            __html: news.contentEn || "Full article content will appear here.",
          }}
        />

        {/* Tags Section */}
        {news.tags && news.tags.length > 0 && (
          <div className="mt-8 flex items-center gap-2 flex-wrap">
            <Tag size={20} className="text-gray-600" />
            <span className="font-semibold text-gray-700">Tags:</span>
            {news.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Section */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shrink-0">
              <User size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{authorName}</h3>
              <p className="text-gray-600 mb-3">
                Tokko Bharat News Desk brings you the latest and most accurate news from India and around the world. 
                Our team of experienced journalists is committed to delivering factual and unbiased reporting.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>📰 {newsList.filter(n => n.author === authorName || (!n.author && authorName === "Tokko Bharat Desk")).length} articles published</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related News</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 mt-1">
                      {item.titleEn}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      {item.createdAt?.toDate 
                        ? new Date(item.createdAt.toDate()).toLocaleDateString()
                        : "Recently"
                      }
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
}