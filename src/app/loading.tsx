import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="animate-spin mx-auto mb-4 text-red-600" size={48} />
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}