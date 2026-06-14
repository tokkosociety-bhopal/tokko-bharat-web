"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { Search as SearchIcon, Loader2 } from "lucide-react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  async function performSearch(searchQuery: string) {
    try {
      setLoading(true);
      setSearched(true);
      
      const snapshot = await getDocs(collection(db, "news"));
      const allNews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as any[];

      const filtered = allNews.filter(
        (item) =>
          item.titleEn?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.summaryEn?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(filtered);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl font-bold text-center mb-6">Search News</h1>
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const input = form.querySelector("input") as HTMLInputElement;
              if (input.value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(input.value)}`;
              }
            }}
            className="relative"
          >
            <input
              type="text"
              defaultValue={query}
              placeholder="Search for news, topics, categories..."
              className="w-full px-6 py-4 pl-14 text-lg border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none bg-white shadow-sm"
              autoFocus
            />
            <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <Loader2 className="animate-spin mx-auto mb-4 text-red-600" size={48} />
            <p className="text-gray-600">Searching...</p>
          </div>
        ) : searched ? (
          <div>
            <p className="text-gray-600 mb-6">
              {results.length} {results.length === 1 ? "result" : "results"} found for "{query}"
            </p>
            
            {results.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((item) => (
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
              <div className="text-center py-10">
                <p className="text-gray-600">No results found. Try different keywords.</p>
              </div>
            )}
          </div>
        ) : null}
      </div>

      <Footer />
    </main>
  );
}