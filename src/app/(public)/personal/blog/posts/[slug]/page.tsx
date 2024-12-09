import { BlogHeader } from "@/components/blog/BlogHeader";
import { Markdown } from "@/components/common/Markdown";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/utils/formatDate";
import { LikeShare } from "@/components/blog/LikeShare";
import { CustomMDX } from "@/components/blog/customMDX";
import { getUserLocale } from "@/utils/userLocale";

export default async function Page({ params }: Params) {
  const post = await prisma.post.findUnique({
    where: { id: params.slug },
  });
  const locale = await getUserLocale();

  if (!post) {
    return (
      <BlogHeader
        title="Post not found"
        description="The post you are looking for does not exist."
        date={formatDate(new Date(), locale)}
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

  const {
    id,
    title,
    description,
    createdAt,
    language,
    content,
    likes,
    shares,
    views,
  } = post;

  return (
    <>
      <BlogHeader
        title={title}
        description={description}
        date={formatDate(createdAt, locale)}
        language={language}
      />

      <Markdown>
        <CustomMDX source={content} />
      </Markdown>

      <LikeShare likes={likes} shares={shares} views={views} id={id} />
    </>
  );
}
