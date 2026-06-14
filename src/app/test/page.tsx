import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function TestPage() {
  try {
    const snapshot = await getDocs(collection(db, "news"));

    return (
      <div style={{ padding: 20 }}>
        Total News: {snapshot.docs.length}
      </div>
    );
  } catch (e) {
    return (
      <div style={{ padding: 20 }}>
        Firebase Error
      </div>
    );
  }
}