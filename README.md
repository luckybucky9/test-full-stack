# Chaud Starter

A Next.js template with Supabase, Vercel, and QStash - ready for automated development with [Chaud](https://github.com/your-org/chaud).

## Stack

- **Next.js 14** - React framework with App Router
- **Supabase** - Database, Auth, and Realtime
- **QStash** - Background job processing
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## Getting Started

### 1. Create from Template

```bash
chaud preheat "your project description"
# or
gh repo create my-app --template Lucky9-Labs/chaud-starter
```

### 2. Setup Environment

```bash
cp .env.example .env.local
# Fill in your Supabase and QStash credentials
```

### 3. Run Development Server

```bash
npm install
npm run dev
```

## Chaud Integration

This repo is pre-configured for Chaud automation:

1. **GitHub Workflow** - `.github/workflows/chaud-issue-runner.yml`
2. Create issues → Chaud implements → PRs created automatically

### Required Secrets

Add these to your GitHub repo secrets:
- `CHAUD_API_KEY` - Your Chaud API key
- `CHAUD_CLOUD_URL` - Your Chaud Cloud URL
- `CHAUD_AUTO_MERGE` - Set to `true` for auto-merge

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── api/          # API routes
│   │   └── jobs/     # QStash job handlers
│   ├── layout.tsx
│   └── page.tsx
├── components/       # React components
└── lib/
    ├── supabase/     # Supabase clients
    └── qstash.ts     # QStash helpers
```

## Background Jobs

Use QStash for background processing:

```typescript
import { enqueueJob } from '@/lib/qstash'

await enqueueJob('/api/jobs', { type: 'process', data: {...} })
```

## License

MIT
