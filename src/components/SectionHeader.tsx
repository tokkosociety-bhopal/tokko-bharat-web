type Props = {
  title: string;
  viewAllLink?: string;
};

export default function SectionHeader({ title, viewAllLink = "/" }: Props) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold text-gray-900">
        {title}
      </h2>

      <a
        href={viewAllLink}
        className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center gap-1"
      >
        View All →
      </a>
    </div>
  );
}