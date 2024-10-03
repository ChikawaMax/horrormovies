import YouTubeVideo from '@/components/youtubePage';

interface youtubeObj {
  id: number;
  videoId: string;
  title: string;
}

const youtubeInfo: youtubeObj[] = [
  {
    id: 1,
    videoId: 'HkwFwGYtqfk',
    title: 'ケイド ルオトロ vs アンドリュー タケット',
  },
  {
    id: 2,
    videoId: '5UwQJe9ljDs',
    title: 'ケイド ルオトロ vs リーバイ ジョーンズ',
  },
  {
    id: 3,
    videoId: '5_wVuKzUU-A',
    title: 'ルーカス バルボーザ vs ジョセフ チェン',
  },
];

const Page = () => {
  return (
    <div>
      {youtubeInfo.map((info) => (
        <YouTubeVideo key={info.id} videoId={info.videoId} title={info.title} />
      ))}
    </div>
  );
};

export default Page;
