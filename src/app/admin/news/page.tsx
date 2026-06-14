import DeleteNewsButton from "@/components/admin/DeleteNewsButton";
import Link from "next/link";
import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  const news = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as any[];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">News Management</h1>
            <p className="text-gray-600 mt-1">Manage all published articles</p>
          </div>

          <Link
            href="/admin/news/new"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            <Plus size={20} />
            Add News
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Total Articles</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{news.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Published Today</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {news.filter(n => {
                    const date = n.createdAt?.toDate();
                    return date && date.toDateString() === new Date().toDateString();
                  }).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Plus className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">Categories</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {new Set(news.map(n => n.category)).size}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Edit className="text-purple-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* News Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-gray-900">Title</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-900">Category</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-900">Author</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-900">Published</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {news.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div>
                        <p className="font-semibold text-gray-900">{item.titleEn}</p>
                        <p className="text-sm text-gray-500">{item.slug}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {item.author || "Tokko Bharat Desk"}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {item.createdAt?.toDate 
                        ? new Date(item.createdAt.toDate()).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })
                        : "N/A"
                      }
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {/* View Button */}
                        <Link
                          href={`/news/${item.slug}`}
                          target="_blank"
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View"
                        >
                          <Eye size={18} />
                        </Link>

                        {/* Edit Button */}
                        <Link
                          href={`/admin/news/edit/${item.id}`}
                          className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </Link>

                        {/* Delete Button - YEH ADD KIYA HAI */}
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

            {news.length === 0 && (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="text-gray-400" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles yet</h3>
                <p className="text-gray-600 mb-6">Get started by creating your first news article</p>
                <Link
                  href="/admin/news/new"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  <Plus size={20} />
                  Add News
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}