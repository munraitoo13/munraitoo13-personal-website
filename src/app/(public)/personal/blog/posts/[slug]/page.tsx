import { BlogHeader } from "@/components/blog/BlogHeader";
import { Interactions } from "@/components/blog/Interactions";
import { CustomMDX } from "@/components/blog/customMDX";
import { resolveLocale } from "@/i18n/config";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedAdmin } from "@/utils/auth";
import { formatDate } from "@/utils/formatDate";
import { getLocale } from "next-intl/server";
import { Markdown } from "@/components/common/Markdown";

export default async function Page({ params }: { params: { slug: string } }) {
  const locale = resolveLocale(await getLocale());
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

  const authenticatedAdmin = post.published
    ? true
    : await getAuthenticatedAdmin();
  if (!post.published && !authenticatedAdmin) return PostNotFound;

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
    <div className="mx-auto flex w-full max-w-4xl flex-col px-4">
      <BlogHeader
        title={title}
        description={description}
        date={formatDate(createdAt, locale)}
        language={language}
      />

      <Markdown>
        <CustomMDX source={content} />
      </Markdown>

      <Interactions likes={likes} shares={shares} views={views} id={id} />
    </div>
  );
}
