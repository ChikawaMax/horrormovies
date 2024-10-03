export default async function YouTubeVideo({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const apiKey = process.env.YOUTUBE_API_KEY;

  // YouTube Data APIを直接呼び出してデータを取得
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`
  );
  const data = await res.json();
  const video = data.items[0];

  return (
    <div className="border p-4 m-3">
      {video && (
        <div>
          <h1 className="text-3xl ml-4 my-4">{title}</h1>
          <div className="relative w-full" style={{ maxWidth: '800px' }}>
            <div className="pb-[56.25%] relative">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.snippet.title}
              ></iframe>
            </div>
            <div className="mt-4">
              <h3>タイトル：{video.snippet.title}</h3>
              <p>再生数 : {video.statistics.viewCount}</p>
              <p>高評価数 : {video.statistics.likeCount}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
