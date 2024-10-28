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
  tags: Tag[];
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
