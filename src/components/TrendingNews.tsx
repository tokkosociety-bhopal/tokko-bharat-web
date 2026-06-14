import Link from "next/link";
import { Flame } from "lucide-react";

type NewsItem = {
  id: string;
  titleEn: string;
  slug: string;
};

type Props = {
  news: NewsItem[];
};

export default function TrendingNews({
  news,
}: Props) {
  if (!news.length) return null;

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex items-center gap-2 mb-4">
        <Flame className="text-orange-500" size={24} />
        <h3 className="text-2xl font-bold">
          Trending News
        </h3>
      </div>

      <div className="space-y-4">
        {news.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.slug}`}
            className="block border-b pb-3 hover:text-red-600 transition-colors"
          >
            🔥 {item.titleEn}
          </Link>
        ))}
      </div>
    </div>
  );
}