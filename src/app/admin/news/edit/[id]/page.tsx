"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function EditNewsPage() {
  const router = useRouter();
  const params = useParams();
  const newsId = params.id as string;

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const [form, setForm] = useState({
    titleEn: "",
    titleHi: "",
    summaryEn: "",
    summaryHi: "",
    contentEn: "",
    contentHi: "",
    imageUrl: "",
    category: "india",
  });

  useEffect(() => {
    async function fetchNews() {
      try {
        setFetching(true);
        const docRef = doc(db, "news", newsId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setForm({
            titleEn: data.titleEn || "",
            titleHi: data.titleHi || "",
            summaryEn: data.summaryEn || "",
            summaryHi: data.summaryHi || "",
            contentEn: data.contentEn || "",
            contentHi: data.contentHi || "",
            imageUrl: data.imageUrl || "",
            category: data.category || "india",
          });
        } else {
          alert("News article not found!");
          router.push("/admin/news");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        alert("Error loading news article");
      } finally {
        setFetching(false);
      }
    }

    fetchNews();
  }, [newsId, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.titleEn || !form.summaryEn || !form.imageUrl) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);

      const slug = form.titleEn
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      const docRef = doc(db, "news", newsId);
      await updateDoc(docRef, {
        ...form,
        slug,
        updatedAt: serverTimestamp(),
      });

      alert("✅ News updated successfully!");
      router.push("/admin/news");
    } catch (error) {
      console.error("Error updating news:", error);
      alert("❌ Error updating news");
    } finally {
      setLoading(false);
    }
  }

  if (fetching) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin mx-auto mb-4 text-red-600" size={48} />
          <p className="text-gray-600">Loading article...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/admin/news"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to News Management
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Article</h1>
          <p className="text-gray-600 mb-6">Update the news article details</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                English Title *
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter English title"
                value={form.titleEn}
                onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hindi Title
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="हिंदी में शीर्षक"
                value={form.titleHi}
                onChange={(e) => setForm({ ...form, titleHi: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                English Summary *
              </label>
              <textarea
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="Brief summary (2-3 lines)"
                rows={3}
                value={form.summaryEn}
                onChange={(e) => setForm({ ...form, summaryEn: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                English Content
              </label>
              <textarea
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-mono text-sm"
                placeholder="Full article content (HTML tags allowed)"
                rows={10}
                value={form.contentEn}
                onChange={(e) => setForm({ ...form, contentEn: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL *
              </label>
              <input
                type="url"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                placeholder="https://example.com/image.jpg"
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                required
              />
              {form.imageUrl && (
                <div className="mt-2">
                  <img
                    src={form.imageUrl}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="india">India</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="sports">Sports</option>
                <option value="world">World</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading && <Loader2 className="animate-spin" size={20} />}
                {loading ? "Updating..." : "Update News"}
              </button>

              <button
                type="button"
                onClick={() => router.back()}
                className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}