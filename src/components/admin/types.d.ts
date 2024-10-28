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

type UpdatePostProps = {
  post: Post;
  tags: Tag[];
};

type ManagerProps = {
  posts: Post[];
};

type NewPostProps = {
  tags: Tag[];
};
