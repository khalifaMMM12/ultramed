import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "UltraMed | Healthcare for the Better",
  description:
    "UltraMed is a comprehensive healthcare provider in Garki, Abuja, committed to improving the health and well-being of all our patients.",
  keywords: [
    "hospital",
    "healthcare",
    "abuja",
    "nigeria",
    "medical",
    "doctor",
    "health",
    "ultramed",
  ],
  authors: [{ name: "UltraMed Healthcare" }],
  creator: "UltraMed Healthcare",
  publisher: "UltraMed Healthcare",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.ultramed.com.ng",
    title: "UltraMed | Healthcare for the Better",
    description:
      "UltraMed is a comprehensive healthcare provider in Garki, Abuja, committed to improving the health and well-being of all our patients.",
    siteName: "UltraMed",
  },
  twitter: {
    card: "summary_large_image",
    title: "UltraMed | Healthcare for the Better",
    description:
      "UltraMed is a comprehensive healthcare provider in Garki, Abuja, committed to improving the health and well-being of all our patients.",
  },
  icons: {
    icon: [{ url: "/favicon.svg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning={true}>
        <ClientBody>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
