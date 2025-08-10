import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorTrail from "@/components/CursorTrail";
import { getSiteSettings } from "@/utils/sanity-queries";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getSiteSettings();
  const navFontSize = site?.navFontSize || 'clamp(0.9rem, 0.7vw, 1.1rem)';
  const navLetterSpacing = typeof site?.navLetterSpacing === 'number' ? `${site.navLetterSpacing}em` : undefined;
  const logoDesktop = site?.logoWidthPercentDesktop ?? 12;
  const logoMobile = site?.logoWidthPercentMobile ?? 40;
  const logoMax = site?.logoMaxWidthPx ?? 150;
  const contentMax = site?.contentMaxWidthPx ?? 1280;
  const padXDesktop = site?.containerPaddingXDesktop ?? 24;
  const padXMobile = site?.containerPaddingXMobile ?? 16;

  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          // Expose CMS-controlled variables site-wide
          ['--nav-font-size' as any]: navFontSize,
          ...(navLetterSpacing ? ({ ['--nav-letter-spacing' as any]: navLetterSpacing } as any) : {}),
          ['--logo-width-desktop' as any]: `${logoDesktop}%`,
          ['--logo-width-mobile' as any]: `${logoMobile}%`,
          ['--logo-max-width' as any]: `${logoMax}px`,
          ['--content-max-width' as any]: `${contentMax}px`,
          ['--container-pad-x-desktop' as any]: `${padXDesktop}px`,
          ['--container-pad-x-mobile' as any]: `${padXMobile}px`,
        }}
      >
        <CursorTrail />
        <div className="flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}
