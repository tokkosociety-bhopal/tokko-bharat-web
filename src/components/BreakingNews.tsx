import { AlertCircle } from "lucide-react";

export default function BreakingNews() {
  return (
    <div className="bg-white border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-md font-bold text-xs uppercase tracking-wider shrink-0 animate-pulse">
          <AlertCircle size={14} />
          Breaking
        </div>
        <div className="overflow-hidden relative flex-1">
          <div className="flex gap-12 animate-scroll-left whitespace-nowrap text-gray-700 font-medium text-sm">
            <span>⚡ India launches new satellite mission successfully</span>
            <span>⚡ Stock markets hit all-time high today</span>
            <span>⚡ Major tech conference announced for next month</span>
            <span>⚡ National sports team wins international tournament</span>
            {/* Duplicate for seamless loop */}
            <span>⚡ India launches new satellite mission successfully</span>
            <span>⚡ Stock markets hit all-time high today</span>
          </div>
        </div>
      </div>
    </div>
  );
}