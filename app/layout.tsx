import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Energy In Motion - Transforming Individuals & Organizations",
  description:
    "Transforming individuals and organizations through leadership, emotional intelligence & purpose. Professional coaching and training services.",
  keywords:
    "leadership coaching, emotional intelligence, organizational transformation, executive coaching, leadership development",
  authors: [{ name: "Energy In Motion" }],
  icons: {
    icon: '/images/icons/logo/logo.svg',
  },
  openGraph: {
    title: "Energy In Motion - Transforming Individuals & Organizations",
    description:
      "Transforming individuals and organizations through leadership, emotional intelligence & purpose. Professional coaching and training services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorTrail />
        <div className="flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}
