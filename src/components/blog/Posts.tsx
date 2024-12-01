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
      {posts.map(
        async ({
          id,
          createdAt,
          language,
          title,
          description,
          tags,
          views,
          likes,
        }) => (
          <MotionA
            variants={revealVariants}
            whileHover={{ x: 5 }}
            className="mb-14 flex"
            href={`/personal/blog/posts/${id}`}
            key={id}
          >
            <div className="card-divider"></div>

            <div className="flex w-full flex-col gap-2">
              {/* date and lang */}
              <small className="text-red-500">
                {await formatDate(createdAt)}, {language}
              </small>

              {/* title */}
              <h2 className="h2">{title}</h2>

              {/* description */}
              <p className="text-lg">{description}</p>

              {/* views and likes */}
              <div className="flex items-center gap-1">
                <small className="flex items-center gap-1">
                  <span>{views}</span>
                  {(await t)("views")}
                </small>

                <span>-</span>

                <small className="flex items-center gap-1">
                  <span>{likes}</span>
                  {(await t)("likes")}
                </small>
              </div>

              {/* tags */}
              <div className="mt-5 flex flex-wrap items-center gap-1">
                {tags.map(({ name, id }: Tag) => (
                  <span key={id} className="tag-badge">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </MotionA>
        ),
      )}
    </MotionDiv>
  );
}
