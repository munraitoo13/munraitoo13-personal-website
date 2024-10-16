type Tag = {
  id: string;
  name: string;
};

interface Post {
  tags: any;
  id: string;
  title: string;
  description: string;
  language: string;
  content: string;
  createdAt: Date;
  published: boolean;
  tags: Tag[];
}
