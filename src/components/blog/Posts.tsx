import { formatDate } from "@/utils/formatDate";
import { MotionA, MotionDiv } from "@/components/common/Motion";
import { contentVariants, revealVariants } from "@/animations/motionVariants";
import { getTranslations } from "next-intl/server";
import { IconChessKnightFilled, IconChevronRight } from "@tabler/icons-react";

export async function Posts({ posts }: Posts) {
  const t = getTranslations("Blog");

  return (
    <MotionDiv
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      {posts.map(async (post) => (
        <MotionA
          variants={revealVariants}
          whileHover={{ x: 5 }}
          className="mb-14 flex"
          href={`/personal/blog/posts/${post.id}`}
          key={post.id}
        >
          <div className="card-divider"></div>

          <div className="flex w-full flex-col gap-2">
            {/* date */}
            <small className="text-red-500">
              {await formatDate(post.createdAt)}
            </small>

            {/* title */}
            <h2 className="section-title">{post.title}</h2>

            {/* description */}
            <p className="text-lg">{post.description}</p>

            {/* views and likes */}
            <div className="flex items-center gap-1">
              <small className="flex items-center gap-1">
                <span>{post.views}</span>
                {(await t)("views")}
              </small>

              <span>-</span>

              <small className="flex items-center gap-1">
                <span>{post.likes}</span>
                {(await t)("likes")}
              </small>
            </div>

            {/* tags and lang */}
            <div className="mt-5 flex flex-wrap items-center gap-1">
              <small className="mr-5">{post.language}</small>

              {post.tags.map((tag: Tag) => (
                <span key={tag.id} className="tag-badge">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </MotionA>
      ))}
    </MotionDiv>
  );
}
