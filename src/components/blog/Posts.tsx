import { formatDate } from "@/utils/formatDate";
import { MotionA, MotionDiv } from "@/components/common/Motion";
import { contentVariants, revealVariants } from "@/animations/motionVariants";
import { getTranslations } from "next-intl/server";

export async function Posts({ posts }: Posts) {
  const t = getTranslations("Blog");

  return (
    <MotionDiv
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-5"
    >
      {posts.map(async (post) => (
        <MotionA
          variants={revealVariants}
          whileHover={{ x: 5 }}
          className="flex flex-col rounded-xl bg-neutral-50 p-10 dark:bg-neutral-900/25"
          href={`/personal/blog/posts/${post.id}`}
          key={post.id}
        >
          {/* date */}
          <small className="font-bold text-red-600">
            {await formatDate(post.createdAt)}
          </small>

          {/* title */}
          <h2 className="text-4xl font-extrabold text-neutral-900 dark:text-white">
            {post.title}
          </h2>

          {/* description */}
          <p className="text-lg">{post.description}</p>

          {/* tags and lang */}
          <div className="mt-10 flex flex-wrap items-center gap-1">
            {post.tags.map((tag: Tag) => (
              <span
                key={tag.id}
                className="rounded-full bg-neutral-100 px-3 py-1 dark:bg-neutral-900/25"
              >
                {tag.name}
              </span>
            ))}

            <small className="ml-5">{post.language}</small>
          </div>
        </MotionA>
      ))}
    </MotionDiv>
  );
}
