"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import DeleteNewsButton from "@/components/admin/DeleteNewsButton";
import { Eye, Edit, Search } from "lucide-react";
import NewsStatusToggle from "@/components/admin/NewsStatusToggle";

export default function AdminNewsTable({
  news,
}: {
  news: any[];
}) {
  const [search, setSearch] = useState("");

  const filteredNews = useMemo(() => {
    const q = search.toLowerCase();

    return news.filter((item) =>
      item.titleEn?.toLowerCase().includes(q) ||
      item.slug?.toLowerCase().includes(q) ||
      item.category?.toLowerCase().includes(q)
    );
  }, [news, search]);

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3.5 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search title, slug or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Category</th>
                <th className="text-left p-4">Author</th>
                <th className="text-left p-4">Views</th>
                <th className="text-left p-4">Published</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {filteredNews.map((item) => (
                <tr key={item.id}>
                  <td className="p-4">
                    <p className="font-semibold">
                      {item.titleEn}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.slug}
                    </p>
                  </td>

                  <td className="p-4 capitalize">
                    {item.category}
                  </td>

                  <td className="p-4">
  {item.author || "Tokko Bharat Desk"}
</td>

<td className="p-4">
  {item.views || 0}
</td>

<td className="p-4">
  {item.createdAt
    ? new Date(
        item.createdAt?.seconds
          ? item.createdAt.seconds * 1000
          : item.createdAt
      ).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "No Date"}
</td>

                  <td className="p-4">
                    <div className="flex gap-2">
                      <Link
                        href={`/news/${item.slug}`}
                        target="_blank"
                        className="p-2 text-blue-600"
                      >
                        <Eye size={18} />
                      </Link>

                      <NewsStatusToggle
  newsId={item.id}
  field="isBreaking"
  value={item.isBreaking || false}
/>

<NewsStatusToggle
  newsId={item.id}
  field="isTrending"
  value={item.isTrending || false}
/>

                      <Link
                        href={`/admin/news/edit/${item.id}`}
                        className="p-2 text-orange-600"
                      >
                        <Edit size={18} />
                      </Link>

                      <DeleteNewsButton
                        newsId={item.id}
                        newsTitle={item.titleEn}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredNews.length === 0 && (
            <div className="p-10 text-center">
              No matching articles found
            </div>
          )}
        </div>
      </div>
    </>
  );
}