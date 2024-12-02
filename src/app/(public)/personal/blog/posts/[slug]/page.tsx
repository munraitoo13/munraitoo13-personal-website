import { BlogHeader } from "@/components/blog/BlogHeader";
import { Markdown } from "@/components/common/Markdown";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/utils/formatDate";
import { MDXRemote } from "next-mdx-remote/rsc";
import { LikesViews } from "@/components/blog/LikesViews";
import { LikeShare } from "@/components/blog/LikeShare";
import { CustomMDX } from "@/components/blog/customMDX";

export default async function Page({ params }: Params) {
  const post = await prisma.post.findUnique({
    where: { id: params.slug },
  });

  if (!post) {
    return (
      <BlogHeader
        title="Post not found"
        description="The post you are looking for does not exist."
        date={await formatDate(new Date())}
        language={"Easter Egg!"}
      />
    );
  }

  // Increment the view count
  await prisma.post.update({
    where: { id: params.slug },
    data: {
      views: {
        increment: 1,
      },
    },
  });

  const { id, title, description, createdAt, language, content, likes, views } =
    post;

  return (
    <>
      <BlogHeader
        title={title}
        description={description}
        date={await formatDate(createdAt)}
        language={language}
      />

      <LikesViews likes={likes} views={views} />

      <Markdown>
        <CustomMDX source={content} />
      </Markdown>

      <LikeShare likes={likes} id={id} />
    </>
  );
}
