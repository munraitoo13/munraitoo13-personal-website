type Tag = {
  id: string;
  name: string;
};

type Post = {
  id: string;
  title: string;
  description: string;
  language: string;
  content: string;
  tags: Tag[];
  published: boolean;
  createdAt: Date;
  views: number;
  likes: number;
  shares: number;
  isFeatured: boolean;
};

type UpdatePostProps = {
  post: Post;
  tags: Tag[];
};

type PostData = {
  id?: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  content: string;
  published: boolean;
};
