import { NextRequest, NextResponse } from 'next/server'
import { verifySignatureAppRouter } from '@upstash/qstash/nextjs'

async function handler(req: NextRequest) {
  const body = await req.json()
  
  // Process your background job here
  console.log('Processing job:', body)
  
  return NextResponse.json({ success: true })
}

// Verify QStash signature in production
export const POST = process.env.NODE_ENV === 'production' 
  ? verifySignatureAppRouter(handler)
  : handler
