import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tokko Bharat | Latest Hindi & English News",
    template: "%s | Tokko Bharat",
  },
  description: "Get the latest breaking news, top headlines, and in-depth analysis from India and around the world. Your trusted source for Hindi and English news.",
  keywords: ["News", "India News", "Hindi News", "English News", "Breaking News", "Tokko Bharat", "Latest Headlines", "Technology", "Sports", "Business"],
  authors: [{ name: "Tokko Bharat News Desk" }],
  creator: "Tokko Bharat",
  publisher: "Tokko Bharat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tokkobharat.com",
    siteName: "Tokko Bharat",
    title: "Tokko Bharat | Latest Hindi & English News",
    description: "Get the latest breaking news, top headlines, and in-depth analysis from India and around the world.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Tokko Bharat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokko Bharat | Latest Hindi & English News",
    description: "Get the latest breaking news, top headlines, and in-depth analysis.",
    images: ["https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}