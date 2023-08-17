export type FormattedPost = {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  lead: string;
  body: string;
  author: string;
  tags: string[];
  images: PostImage[]; // images ahora es un array de
  tweets: string[];
  videos: string[];
};

export type PostImage = {
  url: string;
  size: string;
  aspect_ratio: string;
  size_category: string;
};
