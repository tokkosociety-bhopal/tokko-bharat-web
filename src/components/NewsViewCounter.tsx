"use client";

import { useEffect } from "react";
import {
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function NewsViewCounter({
  newsId,
}: {
  newsId: string;
}) {
  useEffect(() => {
    async function addView() {
      try {
        await updateDoc(
          doc(db, "news", newsId),
          {
            views: increment(1),
          }
        );
      } catch (error) {
        console.error(
          "View update failed",
          error
        );
      }
    }

    addView();
  }, [newsId]);

  return null;
}