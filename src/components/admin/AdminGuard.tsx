"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

const ALLOWED_EMAILS = [
  "tokkosociety@gmail.com",
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
  signOut(auth);
  router.push("/admin/login");
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