'use client';

import { useState } from 'react';

interface Video {
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
}

export default function YouTubeSearch() {
  const [query, setQuery] = useState<string>('');
  const [videos, setVideos] = useState<Video[]>([]);

  const searchYouTube = async () => {
    const res = await fetch(`/api/youtube?query=${query}`);
    const data = await res.json();
    setVideos(data.items);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search YouTube"
      />
      <button onClick={searchYouTube}>Search</button>

      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
