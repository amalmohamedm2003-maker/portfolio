import { NextResponse } from 'next/server';

export async function GET() {
  // Redirect directly to the RAG SDK GitHub repository ZIP download link
  return NextResponse.redirect('https://github.com/amalmohamedm2003-maker/rag_engine_sdk/archive/refs/heads/main.zip');
}
