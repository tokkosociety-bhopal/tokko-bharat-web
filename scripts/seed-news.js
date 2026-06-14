require("dotenv").config({ path: ".env.local" });
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} = require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seed() {
  await addDoc(collection(db, "news"), {
    titleEn: "India launches new technology mission",
    titleHi: "भारत ने नई टेक्नोलॉजी मिशन लॉन्च किया",
    summaryEn: "News summary",
    summaryHi: "समाचार सारांश",
    contentEn: "Full article content here...",
    contentHi: "पूरा लेख यहाँ...",
    category: "technology",
    slug: "india-launches-new-technology-mission",
    imageUrl: "https://picsum.photos/1200/700",
    author: "Tokko Bharat Desk",
    isBreaking: true,
    isTrending: true,
    views: 0,
    publishedAt: serverTimestamp(),
    createdAt: serverTimestamp(),
  });

  console.log("News added successfully");
}

seed();