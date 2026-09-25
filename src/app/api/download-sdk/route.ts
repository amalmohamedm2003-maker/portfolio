import { NextResponse } from 'next/server';

export async function GET() {
  const GITHUB_USERNAME = 'amalmohamedm2003-maker';
  const REPO_NAME = 'rag-engine-sdk'; 
  const ARCHIVE_URL = `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/archive/refs/heads/main.zip`;

  try {
    const response = await fetch(ARCHIVE_URL);
    if (!response.ok) {
      return NextResponse.json({ error: 'Archive currently unavailable' }, { status: 502 });
    }

    const fileStream = response.body;
    return new Response(fileStream, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${REPO_NAME}-latest.zip"`,
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to stream SDK bundle' }, { status: 500 });
  }
}
