"use client";

import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Flame, Siren } from "lucide-react";

interface NewsStatusToggleProps {
  newsId: string;
  field: "isBreaking" | "isTrending";
  value: boolean;
}

export default function NewsStatusToggle({
  newsId,
  field,
  value,
}: NewsStatusToggleProps) {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(value);

  async function toggleStatus() {
    try {
      setLoading(true);

      await updateDoc(doc(db, "news", newsId), {
        [field]: !active,
      });

      setActive(!active);
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    } finally {
      setLoading(false);
    }
  }

  const isBreaking = field === "isBreaking";

  return (
    <button
      onClick={toggleStatus}
      disabled={loading}
      title={
        isBreaking
          ? active
            ? "Breaking ON"
            : "Breaking OFF"
          : active
          ? "Trending ON"
          : "Trending OFF"
      }
      className={`p-2 rounded-lg transition-colors ${
        active
          ? isBreaking
            ? "text-red-600 hover:bg-red-50"
            : "text-orange-500 hover:bg-orange-50"
          : "text-gray-300 hover:bg-gray-100"
      }`}
    >
      {isBreaking ? (
        <Siren size={18} />
      ) : (
        <Flame size={18} />
      )}
    </button>
  );
}