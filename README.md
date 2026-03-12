# Zephyr MF Demo

![Zephyr Cloud](https://img.shields.io/badge/deployed%20on-Zephyr%20Cloud-646cff)
![Module Federation](https://img.shields.io/badge/Module%20Federation-enabled-blue)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react)

React micro-frontend application deployed on **Zephyr Cloud** using **Module Federation**.

## 🚀 Live URLs

| App | URL |
|-----|-----|
| Host App | https://kellysondias-outlook-com-18-host-zephyr-mf-demo-k-764f51c14-ze.zephyrcloud.app |
| Remote App | https://kellysondias-outlook-com-8-remote-zephyr-mf-demo--336219d00-ze.zephyrcloud.app |

## Project Structure

```
zephyr-mf-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml     # CI/CD pipeline
├── apps/
│   ├── host/              # Shell app (consumes remote components)
│   └── remote/            # Exposes Button and Counter via Module Federation
└── README.md
```

## Quick Start

```bash
# Remote app (terminal 1)
cd apps/remote && npm install && npm run dev

# Host app (terminal 2)
cd apps/host && npm install && npm run dev
```

## How Deployment Works

Each `npm run build` triggers `vite-plugin-zephyr`, which:
1. Captures build output assets
2. Uploads to Zephyr's edge network (content-addressed storage)
3. Returns an immutable versioned URL tied to the git commit

No extra CI configuration needed beyond setting `ZEPHYR_TOKEN` as a GitHub secret.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Bundler | Vite 5 |
| Module Federation | @module-federation/vite |
| Deployment | Zephyr Cloud (vite-plugin-zephyr) |
| CI/CD | GitHub Actions |
| Package manager | npm |

## Deployment URLs

The live applications are hosted on Zephyr Cloud's global edge network. Each deployment is:
- **Immutable** — every build gets a unique URL tied to the git commit SHA
- **Instant rollback** — previous versions remain accessible and can be restored with one click
- **Zero configuration** — no server setup, no container orchestration, no infrastructure management

## CI/CD Pipeline

Automated deployments run on every push to `main`:
1. Remote app builds and deploys first
2. Host app builds and deploys (consuming the remote's latest version)

See `.github/workflows/deploy.yml` for the full pipeline configuration.

## Local Development

### Prerequisites
- Node.js 20+
- npm

### Install dependencies
```bash
# Root scripts (recommended)
npm run dev:remote    # starts remote on localhost:5173
npm run dev:host      # starts host on localhost:5174

# Or manually
cd apps/remote && npm install && npm run dev
cd apps/host && npm install && npm run dev
```

### Build for production
```bash
npm run build:all     # builds both apps sequentially
```

## Module Federation Configuration

### Remote App
Exposes two components:
- `./Button` — Styled button with primary/secondary variants
- `./Counter` — Interactive counter with increment/decrement

### Host App
Consumes remote components via lazy-loaded dynamic imports wrapped in `<Suspense>`.

## Key Features

✅ **Micro-frontend architecture** — independent deployments per app  
✅ **Runtime composition** — host loads remote components on-demand  
✅ **Singleton shared libs** — prevents React duplicate instance errors  
✅ **Edge-deployed** — global CDN with instant propagation  
✅ **Automated CI/CD** — GitHub Actions pipeline with sequential deploys  
✅ **Version traceability** — every deployment tied to git metadata  

## Tech Decisions

| Decision | Choice | Reason |
|---|---|---|
| Bundler | Vite 5 | Faster builds, native ESM, Zephyr compatible |
| Language | TypeScript | Type safety on federated module boundaries |
| Shared libs strategy | singleton | Prevents React duplicate instance errors |
| DTS generation | disabled | Not needed for runtime deploy, avoids worker crash |
| Package manager | npm | Universal compatibility, no config issues |

## Author

Kellyson Dias — [LinkedIn](https://linkedin.com/in/kellysondias) | [GitHub](https://github.com/kellysondias)

---

**Built for Valor Software technical assessment** — demonstrating Module Federation deployment patterns on Zephyr Cloud.