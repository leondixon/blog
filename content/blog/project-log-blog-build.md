---
title: "Project log: building this blog"
description: How I scaffolded Forest Log with Nuxt 4 and the Content module — start to finish in an afternoon.
date: 2026-04-28
tags: [project-log, nuxt, design]
---

Meta entry: this site itself was the first project I logged.

## The brief

- A markdown-driven blog
- Retro feel, but legible — not gimmicky
- Greens and browns, outdoor / nature mood
- No mascot
- Static-friendly, low-maintenance

## The stack

- **Nuxt 4** — file-based routing, Vue 3, SSR / SSG out of the box
- **@nuxt/content v3** — markdown collections with typed schemas
- **pnpm** — fast, disk-friendly package manager
- Hand-written CSS — no framework, palette baked into custom properties

```ts
// content.config.ts
export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()).default([])
      })
    })
  }
})
```

## The look

I wanted the [Brad Woods](https://garden.bradwoods.io/) chunky-shadow
energy paired with a [PostHog](https://posthog.com/)-style retro card,
but pulled toward forest greens and warm browns instead of neon.

Palette ended up roughly:

- `#2a3d2c` — deep forest (headings, header bg)
- `#5a6f3a` — moss (borders, accents, link underline)
- `#3b2a1a` — bark (body text)
- `#efe4c2` — paper (background)
- `#a64a2a` — rust (hover accent)

Pixel font for headings (`VT323`), monospace for body. Drop shadows
and dashed borders carry the rest of the retro weight.

## What I'd revisit

- Syntax highlighting theme to match the palette
- An RSS feed
- Tag pages — easy to bolt on once a few more entries pile up

Done is better than perfect. Camp's set up. Time to start logging
real entries.
