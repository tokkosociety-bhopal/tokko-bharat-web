"use client";

import { Share2, Globe, MessageCircle, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="flex items-center gap-3 mb-8 p-4 bg-white rounded-xl border border-gray-200">
      <Share2 size={20} className="text-gray-700" />
      <span className="font-semibold text-gray-700">Share this article:</span>
      
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        title="Share on Facebook"
      >
        <Globe size={18} />
      </a>
      
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
        title="Share on Twitter"
      >
        <MessageCircle size={18} />
      </a>
      
      <button
        onClick={handleCopyLink}
        className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
        title="Copy link"
      >
        <LinkIcon size={18} />
      </button>
      
      {copied && (
        <span className="text-sm text-green-600 font-medium ml-2">
          Copied!
        </span>
      )}
    </div>
  );
}