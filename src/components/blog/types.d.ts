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

type LikesViews = {
  likes: number;
  views: number;
};

type LikeShare = {
  likes: number;
  id: string;
};
