"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

const ALLOWED_EMAILS = [
  "YOUR_GMAIL@gmail.com",
];

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.push("/admin/login");
      return;
    }

    const email = user.email || "";

    if (!ALLOWED_EMAILS.includes(email)) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}