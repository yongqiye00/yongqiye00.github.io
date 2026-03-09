import type { NewsItem } from '@/types';

export const news: NewsItem[] = [
  {
    id: "news-1",
    title: "🎉 Two Papers Accepted to ICCV 2025",
    content: "Thrilled to announce that two of our papers have been accepted to ICCV 2025! 'SpikeDiff' focuses on zero-shot video reconstruction from chromatic spike cameras, and 'Event-based Visual Vibrometry' introduces novel approaches for vibration measurement. Looking forward to presenting our work at the conference.",
    date: "2024-11-20",
    type: "news",
    url: ""
  },
  {
    id: "news-2",
    title: "🚀 CVPR 2024 Paper Published",
    content: "Our paper 'Towards HDR and HFR Video from Rolling-Mixed-Bit Spikings' is now officially published in CVPR 2024. The work introduces a novel approach for high dynamic range and high frame rate video reconstruction using spike cameras with mixed-bit representations.",
    date: "2024-06-20",
    type: "update",
    url: ""
  },
  {
    id: "news-3",
    title: "🔬 RMB-Net Code Released",
    content: "The complete implementation of our RMB-Net method is now available on GitHub! The repository includes training scripts, pretrained models, and comprehensive documentation for reproducing our CVPR 2024 results on HDR video reconstruction.",
    date: "2024-07-10",
    type: "update",
    url: "https://github.com/yongqiye00/RMB-Net"
  },
  {
    id: "news-4",
    title: "🏆 Best Paper Award Nomination",
    content: "Our CVPR 2024 paper received a Best Paper Award nomination! The work on rolling-mixed-bit spikings for HDR and HFR video reconstruction has been recognized for its innovative contributions to computational photography.",
    date: "2024-06-18",
    type: "award",
    url: ""
  }
];