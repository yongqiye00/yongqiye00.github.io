# Blog Content Directory

This directory contains your blog posts organized by category.

## Categories

- **essay/** - Reflective and long-form essays
- **life/** - Personal updates and life events
- **notes/** - Quick notes and conference summaries
- **tech/** - Technical tutorials and articles

## Blog Post Format

Each blog post is a markdown file with frontmatter:

```markdown
---
title: "Post Title"
date: "YYYY-MM-DD"
category: "tech|essay|notes|life"
tags: ["tag1", "tag2"]
excerpt: "Brief description for the card preview"
---

# Content starts here

Your markdown content here...
```

## Including Images

Place images in `public/blog/images/{category}/` and reference them:

```markdown
![Alt text](/blog/images/tech/filename.png)
```

## Embedding Videos

### YouTube
```markdown
:::youtube VIDEO_ID
:::
```

Example: `:::youtube dQw4w9WgXcQ:::`

### Vimeo
```markdown
:::vimeo VIDEO_ID
:::
```

Example: `:::vimeo 123456789:::`

## File Naming Convention

Use the format: `YYYY-MM-DD-slug.md`

Example: `2024-02-15-react-server-components.md`
