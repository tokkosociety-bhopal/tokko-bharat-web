import NewsForm from "@/components/admin/NewsForm";

export default function AdminNewNewsPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Publish New Article</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <NewsForm />
      </div>
    </main>
  );
}