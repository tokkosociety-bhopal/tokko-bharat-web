"use client";

import { useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function NewsForm() {
  const [loading, setLoading] = useState(false);

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

  async function submitNews(
    e: React.FormEvent
  ) {
    e.preventDefault();

    // Validation
    if (!form.titleEn || !form.summaryEn || !form.imageUrl) {
      alert("Please fill in all required fields (Title, Summary, Image URL)");
      return;
    }

    try {
      setLoading(true);

      const slug = form.titleEn
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      console.log("Publishing news with slug:", slug);

      const docRef = await addDoc(
        collection(db, "news"),
        {
          ...form,
          slug,
          author: "Tokko Bharat Desk",
          views: 0,
          isBreaking: false,
          isTrending: true,
          createdAt: serverTimestamp(),
          publishedAt: serverTimestamp(),
        }
      );

      console.log("News published with ID:", docRef.id);
      alert("✅ News Published Successfully!");

      // Reset form
      setForm({
        titleEn: "",
        titleHi: "",
        summaryEn: "",
        summaryHi: "",
        contentEn: "",
        contentHi: "",
        imageUrl: "",
        category: "india",
      });

      // Redirect to admin page
      window.location.href = "/admin/news";
      
    } catch (error) {
      console.error("Error publishing news:", error);
      alert(`❌ Error publishing news: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitNews} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          English Title *
        </label>
        <input
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
          placeholder="Enter English title"
          value={form.titleEn}
          onChange={(e) =>
            setForm({
              ...form,
              titleEn: e.target.value,
            })
          }
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hindi Title
        </label>
        <input
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
          placeholder="हिंदी में शीर्षक"
          value={form.titleHi}
          onChange={(e) =>
            setForm({
              ...form,
              titleHi: e.target.value,
            })
          }
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
          onChange={(e) =>
            setForm({
              ...form,
              summaryEn: e.target.value,
            })
          }
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          English Content
        </label>
        <textarea
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all font-mono text-sm"
          placeholder="Full article content (you can use HTML tags like &lt;p&gt;, &lt;h3&gt;, &lt;ul&gt;, &lt;li&gt;)"
          rows={10}
          value={form.contentEn}
          onChange={(e) =>
            setForm({
              ...form,
              contentEn: e.target.value,
            })
          }
        />
        <p className="mt-1 text-xs text-gray-500">
          Tip: You can use HTML tags for formatting
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Image URL *
        </label>
        <input
          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
          placeholder="https://example.com/image.jpg"
          value={form.imageUrl}
          onChange={(e) =>
            setForm({
              ...form,
              imageUrl: e.target.value,
            })
          }
          required
        />
        {form.imageUrl && (
          <div className="mt-2">
            <img 
              src={form.imageUrl} 
              alt="Preview" 
              className="w-full h-48 object-cover rounded-lg border border-gray-200"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
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
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
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
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Publishing...
            </span>
          ) : (
            "Publish News"
          )}
        </button>
        
        <button
          type="button"
          onClick={() => window.history.back()}
          className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}