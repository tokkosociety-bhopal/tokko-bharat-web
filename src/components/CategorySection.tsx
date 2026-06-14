type NewsItem = {
  id: string;
  titleEn: string;
  imageUrl: string;
  slug: string;
};

type Props = {
  title: string;
  news: NewsItem[];
};

export default function CategorySection({
  title,
  news,
}: Props) {
  if (!news.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">
        {title}
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {news.map((item) => (
          <a
            key={item.id}
            href={`/news/${item.slug}`}
            className="bg-white rounded-xl shadow overflow-hidden"
          >
            <img
              src={item.imageUrl}
              alt={item.titleEn}
              className="w-full h-40 object-cover"
            />

            <div className="p-3">
              <h3 className="font-semibold">
                {item.titleEn}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}