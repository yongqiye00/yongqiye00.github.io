---
title: 'Towards HDR and HFR Video from Rolling-Mixed-Bit Spikings'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Yakun Chang
  - admin
  - Yujia Liu
  - Bin Fan
  - Zhaojun Huang 
  - Tiejun Huang
  - Boxin Shi

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

date: '2024-02-27T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '-'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# publication_types: ["article-journal"]


# Publication name and optional abbreviated publication name.
publication: In *Proc. of Computer Vision and Pattern Recognition 2024*
publication_short: In *CVPR 2024*

abstract: The spiking cameras offer the benefits of high dynamic range (HDR), high temporal resolution, and low data redundancy. However, reconstructing HDR videos in high-speed conditions using single-bit spikings presents challenges due to the limited bit depth. Increasing the bit depth of the spikings is advantageous for boosting HDR performance, but the readout efficiency will be decreased, which is unfavorable for achieving a high frame rate (HFR) video. To address these challenges, we propose a readout mechanism to obtain rolling-mixed-bit (RMB) spikings, which involves interleaving multi-bit spikings within the single-bit spikings in a rolling manner, thereby combining the characteristics of high bit depth and efficient readout. Furthermore, we introduce RMB-Net for reconstructing HDR and HFR videos. RMBNet comprises a cross-bit attention block for fusing mixed-bit spikings and a cross-time attention block for achieving temporal fusion. Extensive experiments conducted on synthetic and real-synthetic data demonstrate the superiority of our method. For instance, pure 3-bit spikings result in 3 times of data volume, whereas our method achieves comparable performance with less than 2% increase in data volume.

# Summary. An optional shortened abstract.
#summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

#tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: 'https://github.com/yongqiye00/RMB-Net'
# url_dataset: 'https://github.com/wowchemy/wowchemy-hugo-themes'
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: 'https://github.com/wowchemy/wowchemy-hugo-themes'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ''
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://wowchemy.com/docs/content/writing-markdown-latex/). -->
