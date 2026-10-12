import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_METADATA.name} • ${SITE_METADATA.shortName}`,
    template: `%s • ${SITE_METADATA.shortName}`,
  },
  description: SITE_METADATA.description,
  metadataBase: new URL(SITE_METADATA.url),
  openGraph: {
    title: `${SITE_METADATA.name} • ${SITE_METADATA.shortName}`,
    description: SITE_METADATA.description,
    url: SITE_METADATA.url,
    siteName: SITE_METADATA.shortName,
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 676,
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_METADATA.name} • ${SITE_METADATA.shortName}`,
    description: SITE_METADATA.description,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body className="flex min-h-screen flex-col bg-sta-teal text-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
