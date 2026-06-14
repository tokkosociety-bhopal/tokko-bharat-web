"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function AdminLoginPage() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/admin";
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Tokko Bharat Admin Login
        </h1>

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}