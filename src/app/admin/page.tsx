import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Tokko Bharat Admin
      </h1>
      <div className="bg-red-600 text-white p-8 text-4xl rounded-xl">
  TAILWIND WORKING
</div>

      <div className="grid md:grid-cols-3 gap-6">

        <Link
          href="/admin/news/new"
          className="bg-white shadow rounded-xl p-6 hover:shadow-lg"
        >
          <h2 className="text-2xl font-bold">
            Add News
          </h2>

          <Link
  href="/admin/news"
  className="bg-white shadow rounded-xl p-6 hover:shadow-lg"
>
  <h2 className="text-2xl font-bold">
    Manage News
  </h2>

  <p className="mt-2 text-gray-600">
    View all published articles
  </p>
</Link>

          <p className="mt-2 text-gray-600">
            Publish a new article
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