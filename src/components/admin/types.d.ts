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
  isFeatured: boolean;
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

type PostFormProps = {
  tags: Tag[];
  post?: Post;
};
