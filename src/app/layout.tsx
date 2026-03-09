import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/github-dark.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yeliduosi Xiaokaiti",
    template: "%s | Yeliduosi Xiaokaiti"
  },
  description: "Yeliduosi Xiaokaiti's academic portfolio featuring research in computational imaging, computer vision, event cameras, and spike cameras at Peking University.",
  keywords: ["computer vision", "computational imaging", "event camera", "spike camera", "artificial intelligence", "machine learning", "Peking University", "CVPR", "ICCV", "neuromorphic computing"],
  authors: [{ name: "Yeliduosi Xiaokaiti" }],
  creator: "Yeliduosi Xiaokaiti",
  publisher: "Yeliduosi Xiaokaiti",
  metadataBase: new URL("https://yongqiye00.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yeliduosi Xiaokaiti - AI Researcher & Computer Vision Scientist",
    description: "Research in computational imaging, computer vision, event-based sensing, and artificial intelligence at Peking University",
    type: "website",
    locale: "en_US",
    url: "https://yongqiye00.github.io",
    siteName: "Yeliduosi Xiaokaiti | AI Research Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yeliduosi Xiaokaiti - AI Research Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeliduosi Xiaokaiti - AI Researcher",
    description: "Research in computational imaging, computer vision, and event-based sensing",
    site: "@yongqiye00",
    creator: "@yongqiye00",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonText.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
        <link rel="manifest" href="/icon/site.webmanifest" />
        <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#4f46e5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}