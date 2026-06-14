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
import AdminNewsTable from "@/components/admin/AdminNewsTable";

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

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-600 font-medium">
        Total Views
      </p>

      <p className="text-3xl font-bold text-gray-900 mt-1">
        {news.reduce(
          (sum, item) => sum + (item.views || 0),
          0
        )}
      </p>
    </div>

    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
      <Eye className="text-orange-600" size={24} />
    </div>
  </div>
</div>

        <AdminNewsTable news={news} />
      </div>

      <Footer />
    </main>
  );
}