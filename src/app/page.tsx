import Layout from "@/components/layout/layout";
import Hero from "@/components/sections/hero";
import News from "@/components/sections/news";
import Publications from "@/components/sections/publications";
import { featureConfig } from "@/config/features";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Publications />
      {featureConfig.news && <News />}
    </Layout>
  );
}

export const metadata = {
  title: "Yeliduosi Xiaokaiti - AI Researcher & Computer Vision Scientist",
  description: "Yeliduosi Xiaokaiti's academic portfolio featuring research in computational imaging, computer vision, event cameras, and spike cameras at Peking University.",
  keywords: ["computer vision", "computational imaging", "event camera", "spike camera", "artificial intelligence", "machine learning", "Peking University"],
  authors: [{ name: "Yeliduosi Xiaokaiti" }],
  openGraph: {
    title: "Yeliduosi Xiaokaiti - AI Researcher",
    description: "Research in computational imaging, computer vision, and event-based sensing",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeliduosi Xiaokaiti - AI Researcher",
    description: "Research in computational imaging, computer vision, and event-based sensing",
  },
};