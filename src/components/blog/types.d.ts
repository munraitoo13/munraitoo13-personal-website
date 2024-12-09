type Tag = {
  id: string;
  name: string;
};

type Post = {
  tags: any;
  id: string;
  title: string;
  description: string;
  language: string;
  content: string;
  createdAt: Date;
  published: boolean;
  isFeatured: boolean;
  views: number;
  likes: number;
  shares: number;
  tags: Tag[];
};

type FeaturedPost = {
  featuredPost: Post | null;
};

type Posts = {
  posts: Post[];
};

type BlogHeader = {
  title: string;
  description: string;
  language: string;
  date: string;
};

type LikeShare = {
  likes: number;
  shares: number;
  views: number;
  id: string;
};
