declare module 'virtual:latest-video' {
  const data: {
    url: string;
    videoId: string;
    title: string;
    thumbnail: string;
    fetchedAt: string;
  } | null;
  export default data;
}
