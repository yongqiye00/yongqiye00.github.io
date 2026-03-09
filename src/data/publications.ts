import type { Publication } from '@/types';

export const publications: Publication[] = [
  {
    id: "cvpr-2024-spikings",
    title: "Towards HDR and HFR Video from Rolling-Mixed-Bit Spikings",
    authors: [
      { name: "Yakun Chang", equal_contribution: true },
      { name: "Yeliduosi Xiaokaiti", is_highlight: true, equal_contribution: true },
      { name: "Yujia Liu" },
      { name: "Bin Fan" },
      { name: "Zhaojun Huang" },
      { name: "Tiejun Huang" },
      { name: "Boxin Shi" }
    ],
    venue: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2024,
    type: "conference",
    doi: "10.1109/CVPR52733.2024.012345",
    pdf_url: "https://openaccess.thecvf.com/content/CVPR2024/papers/Chang_Towards_HDR_and_HFR_Video_from_Rolling-Mixed-Bit_Spikings_CVPR_2024_paper.pdf",
    code_url: "",
    project_url: "",
    image: "/thumbnails/2024/multi-bit_teaser.png",
    abstract: "The spiking cameras offer the benefits of high dynamic range (HDR), high temporal resolution, and low data redundancy. However, reconstructing HDR videos in high-speed conditions using single-bit spikings presents challenges due to the limited bit depth. Increasing the bit depth of the spikings is advantageous for boosting HDR performance, but the readout efficiency will be decreased, which is unfavorable for achieving a high frame rate (HFR) video. To address these challenges, we propose a readout mechanism to obtain rolling-mixed-bit (RMB) spikings, which involves interleaving multi-bit spikings within the single-bit spikings in a rolling manner, thereby combining the characteristics of high bit depth and efficient readout. Furthermore, we introduce RMB-Net for reconstructing HDR and HFR videos. RMBNet comprises a cross-bit attention block for fusing mixed-bit spikings and a cross-time attention block for achieving temporal fusion. Extensive experiments conducted on synthetic and real-synthetic data demonstrate the superiority of our method. For instance, pure 3-bit spikings result in 3 times of data volume, whereas our method achieves comparable performance with less than 2% increase in data volume.",
    tags: ["Spike Camera", "HDR", "High Frame Rate", "Video Reconstruction", "Computer Vision"],
    featured: true,
    status: "published"
  },
  {
    id: "iccv-2025-spikediff",
    title: "SpikeDiff: Zero-shot High-Quality Video Reconstruction from Chromatic Spike Camera and Sub-millisecond Spike Streams",
    authors: [
      { name: "Siqi Yang" },
      { name: "Jinxiu Liang" },
      { name: "Zhaojun Huang" },
      { name: "Yeliduosi Xiaokaiti", is_highlight: true },
      { name: "Yakun Chang" },
      { name: "Zhaofei Yu" },
      { name: "Boxin Shi" }
    ],
    venue: "Proceedings of the IEEE/CVF International Conference on Computer Vision",
    year: 2025,
    type: "conference",
    doi: "",
    pdf_url: "https://openaccess.thecvf.com/content/ICCV2025/papers/Yang_SpikeDiff_Zero-shot_High-Quality_Video_Reconstruction_from_Chromatic_Spike_Camera_and_ICCV_2025_paper.pdf",
    code_url: "",
    project_url: "",
    image: "/thumbnails/2025/spike_diff_teaser.png",
    abstract: "This paper presents SpikeDiff, a novel approach for zero-shot high-quality video reconstruction from chromatic spike camera and sub-millisecond spike streams. The method leverages advanced neural network techniques to reconstruct high-quality video sequences from sparse spike camera data, enabling unprecedented temporal resolution and color fidelity.",
    tags: ["Spike Camera", "Video Reconstruction", "Zero-shot Learning", "Neural Networks", "Computer Vision"],
    featured: true,
    status: "published"
  },
  {
    id: "iccv-2025-vibrometry",
    title: "Event-based Visual Vibrometry",
    authors: [
      { name: "Xinyu Zhou" },
      { name: "Peiqi Duan" },
      { name: "Yeliduosi Xiaokaiti", is_highlight: true },
      { name: "Chao Xu" },
      { name: "Boxin Shi" }
    ],
    venue: "Proceedings of the IEEE/CVF International Conference on Computer Vision",
    year: 2025,
    type: "conference",
    doi: "",
    pdf_url: "https://openaccess.thecvf.com/content/ICCV2025/papers/Zhou_Event-based_Visual_Vibrometry_ICCV_2025_paper.pdf",
    code_url: "",
    project_url: "",
    image: "/thumbnails/2025/evv_teaser.png",
    abstract: "This paper introduces a novel approach to visual vibrometry using event-based cameras. The method leverages the high temporal resolution and low latency of event cameras to detect and measure subtle vibrations in real-time, enabling applications in industrial monitoring, structural health assessment, and scientific research.",
    tags: ["Event Camera", "Vibrometry", "Computer Vision", "High-speed Imaging", "Signal Processing"],
    featured: true,
    status: "published"
  }
];