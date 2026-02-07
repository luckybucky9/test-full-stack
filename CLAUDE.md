# Project Context

This is a Next.js application with Supabase and QStash integration.

## Tech Stack
- Next.js 14 with App Router
- Supabase for database and auth
- QStash for background jobs
- Tailwind CSS for styling
- TypeScript

## Key Files
- `src/lib/supabase/` - Supabase client setup
- `src/lib/qstash.ts` - Background job helpers
- `src/app/api/jobs/` - QStash job handlers

## Conventions
- Use Server Components by default
- Use `'use client'` only when needed
- Put API routes in `src/app/api/`
- Use Tailwind for styling
- Run `npm run db:generate` after schema changes

## Testing
- Run `npm test` for unit tests
- Tests use Vitest
