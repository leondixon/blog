# AI Trail

A Nuxt + `@nuxt/content` blog. Statically generated, hosted on Cloudflare Pages.

## Local

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm generate   # static build → .output/public
```

Preview the static build: `npx serve .output/public`.

## Deploy — Cloudflare Pages (git-connected)

Connect this repo (`leondixon/blog`, branch `main`) in the Cloudflare dashboard:
**Workers & Pages → Create → Pages → Connect to Git**.

Build settings:

| Field                 | Value             |
| --------------------- | ----------------- |
| Framework preset      | Nuxt (Static)     |
| Build command         | `pnpm generate`   |
| Build output dir      | `.output/public`  |
| Root directory        | `/`               |

Environment variables (Build → Environment variables):

| Name             | Value     |
| ---------------- | --------- |
| `NODE_VERSION`   | `22`      |
| `PNPM_VERSION`   | `10.33.0` |

Node version is also pinned in `.nvmrc`; pnpm version is pinned via `packageManager` in `package.json`. Cloudflare reads both.

Pushes to `main` trigger a production deploy; pushes to other branches get a preview URL.
