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
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-2xl font-bold mb-4">
        🔥 Trending News
      </h3>

      <div className="space-y-4">
        {news.map((item) => (
          <a
            key={item.id}
            href={`/news/${item.slug}`}
            className="block border-b pb-3 hover:text-red-600"
          >
            {item.titleEn}
          </a>
        ))}
      </div>
    </div>
  );
}