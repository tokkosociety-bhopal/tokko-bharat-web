import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function getLatestNews() {
  const q = query(
    collection(db, "news"),
    orderBy("createdAt", "desc"),
    limit(20)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getBreakingNews() {
  const snapshot = await getDocs(
    query(
      collection(db, "news"),
      orderBy("createdAt", "desc"),
      limit(10)
    )
  );

  return snapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .filter((item: any) => item.isBreaking);
}

export async function getTrendingNews() {
  const snapshot = await getDocs(
    query(
      collection(db, "news"),
      orderBy("createdAt", "desc"),
      limit(20)
    )
  );

  return snapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .filter((item: any) => item.isTrending);
}