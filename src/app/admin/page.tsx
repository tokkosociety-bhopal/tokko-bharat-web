"use client";

import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminPage() {
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/admin/login";
  };

  return (
    <main className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Tokko Bharat Admin
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="bg-red-600 text-white p-8 text-4xl rounded-xl mb-8">
        TAILWIND WORKING
      </div>

      <div className="grid md:grid-cols-4 gap-6">

        <Link
          href="/admin/news/new"
          className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold">
            Add News
          </h2>

          <p className="mt-2 text-gray-600">
            Publish a new article
          </p>
        </Link>

        <Link
          href="/admin/news"
          className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold">
            Manage News
          </h2>

          <p className="mt-2 text-gray-600">
            View all published articles
          </p>
        </Link>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-bold">
            Total News
          </h2>

          <p className="mt-2 text-gray-600">
            Coming Soon
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-2xl font-bold">
            Trending News
          </h2>

          <p className="mt-2 text-gray-600">
            Coming Soon
          </p>
        </div>

      </div>
    </main>
  );
}