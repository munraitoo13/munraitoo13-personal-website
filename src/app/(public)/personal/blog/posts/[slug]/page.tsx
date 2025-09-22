import { BlogHeader } from "@/components/blog/BlogHeader";
import { LikeShare } from "@/components/blog/LikeShare";
import { CustomMDX } from "@/components/blog/customMDX";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/utils/formatDate";
import { getUserLocale } from "@/utils/userLocale";
import { cookies } from "next/headers";
import { verifyToken } from "@/utils/tokenUtils";
import { Markdown } from "@/components/common/Markdown";

export default async function Page({ params }: { params: { slug: string } }) {
  const locale = await getUserLocale();
  const PostNotFound = (
    <BlogHeader
      title="Post not found"
      description="This post does not exist."
      date={formatDate(new Date(), locale)}
      language="Easter Egg!"
    />
  );

  const post = await prisma.post.findUnique({
    where: { id: params.slug },
  });
  if (!post) return PostNotFound;

  let isValidToken = null;
  if (!post.published) {
    const token = cookies().get("token")?.value;
    isValidToken = token ? await verifyToken(token) : false;
  }

  if (!post.published && !isValidToken) return PostNotFound;

  await prisma.post.update({
    where: { id: params.slug },
    data: { views: { increment: 1 } },
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
