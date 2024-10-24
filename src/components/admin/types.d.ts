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
  tags: Tag[];
};
