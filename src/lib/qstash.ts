import { Client } from '@upstash/qstash'

export const qstash = new Client({
  token: process.env.QSTASH_TOKEN!,
})

export async function enqueueJob<T>(
  endpoint: string,
  payload: T,
  options?: { delay?: number; retries?: number }
) {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  return qstash.publishJSON({
    url: `${baseUrl}${endpoint}`,
    body: payload,
    delay: options?.delay,
    retries: options?.retries ?? 3,
  })
}
