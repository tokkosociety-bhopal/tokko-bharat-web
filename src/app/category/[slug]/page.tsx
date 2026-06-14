import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  return {
    title: `${categoryName} News - Latest Updates`,
    description: `Read the latest ${categoryName} news on Tokko Bharat.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const q = query(
      collection(db, "news"),
      where("category", "==", slug)
    );

    const snapshot = await getDocs(q);
    const news = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryName} News</h1>
            <p className="text-gray-600">
              {news.length} {news.length === 1 ? "article" : "articles"} found
            </p>
          </div>

          {news.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item: any) => (
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
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <p className="text-gray-600 text-lg mb-4">
                No articles found in {categoryName} category.
              </p>
              <Link href="/" className="text-red-600 hover:underline font-semibold">
                Browse other categories →
              </Link>
            </div>
          )}
        </div>

        <Footer />
      </main>
    );
  } catch (error) {
    console.error("Error loading category page:", error);
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Error Loading Page</h1>
          <p className="text-gray-600 mb-6">Unable to load category news. Please try again later.</p>
          <Link href="/" className="text-red-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }
}