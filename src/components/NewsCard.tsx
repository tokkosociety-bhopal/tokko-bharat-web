import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  publishedAt: string;
  readTime: string;
}

export default function NewsCard({ slug, title, excerpt, imageUrl, category, publishedAt, readTime }: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`} className="group block bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
      {/* Image Container with Hover Zoom */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>

        {/* Meta Data */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
          <div className="flex items-center gap-4">
            <span>{publishedAt}</span>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
          </div>
          <span className="flex items-center gap-1 text-red-600 font-semibold group-hover:translate-x-1 transition-transform">
            Read More <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}