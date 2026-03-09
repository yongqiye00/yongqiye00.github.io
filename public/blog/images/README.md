# Blog Images Directory

Place your blog images in the appropriate category subdirectory.

## Directory Structure

```
public/blog/images/
├── tech/       # Images for technology-related posts
├── essay/      # Images for essay posts
├── notes/      # Images for notes posts
└── life/       # Images for life posts
```

## Usage in Markdown

```markdown
---
title: "My Blog Post"
date: "2024-02-15"
category: "tech"
---

# My Post

Here's an image:

![Diagram showing the architecture](/blog/images/tech/architecture.png)
```

## Tips

1. Use descriptive alt text for accessibility
2. Optimize images before adding (WebP format recommended)
3. Keep image filenames lowercase with no spaces
4. Use subdirectories by post category for organization
