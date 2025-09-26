export interface Post {
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
}

export interface Tag {
  id: string;
  name: string;
}
