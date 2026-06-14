import { AlertCircle } from "lucide-react";
import Link from "next/link";

type Props = {
  news: {
    id: string;
    titleEn: string;
    slug: string;
  }[];
};

export default function BreakingNews({
  news,
}: Props) {
  if (!news.length) return null;

  return (
    <div className="bg-white border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-md font-bold text-xs uppercase tracking-wider shrink-0 animate-pulse">
          <AlertCircle size={14} />
          Breaking
        </div>

        <div className="overflow-hidden relative flex-1">
          <div className="flex gap-12 animate-scroll-left whitespace-nowrap text-gray-700 font-medium text-sm">

            

            {news.map((item) => (
              <Link
                key={`${item.id}-duplicate`}
                href={`/news/${item.slug}`}
                className="hover:text-red-600"
              >
                🚨 {item.titleEn}
              </Link>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}