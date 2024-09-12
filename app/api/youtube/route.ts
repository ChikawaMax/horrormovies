// app/api/youtube/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

interface YouTubeResponse {
  items: {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      thumbnails: {
        default: {
          url: string;
        };
      };
    };
  }[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=${apiKey}`;

  try {
    const response = await axios.get<YouTubeResponse>(url);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch YouTube data' },
      { status: 500 }
    );
  }
}
