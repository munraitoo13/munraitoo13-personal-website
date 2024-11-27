import { IconPinnedFilled } from "@tabler/icons-react";
import { MotionLink } from "@/components/common/Motion";
import { revealVariants } from "@/animations/motionVariants";
import { formatDate } from "@/utils/formatDate";
import { getTranslations } from "next-intl/server";

export async function FeaturedPost({ featuredPost }: FeaturedPost) {
  const t = await getTranslations("Blog");

  if (!featuredPost) {
    return null;
  }

  return (
    <MotionLink
      initial={{ opacity: 0, scale: 1, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      href={`/personal/blog/posts/${featuredPost.id}`}
      className="mb-14 flex w-full flex-col gap-2 rounded-3xl border p-10 dark:border-neutral-900"
    >
      {/* pinned icon */}
      <div className="flex items-center gap-1 text-red-500">
        <IconPinnedFilled size={24} />
        <span className="text-lg font-semibold">{t("featured")}</span>
      </div>

      {/* date and lang */}
      <small>
        {await formatDate(featuredPost.createdAt)}, {featuredPost.language}
      </small>

      {/* title */}
      <h2 className="section-title">{featuredPost.title}</h2>

      {/* description */}
      <p className="text-lg">{featuredPost.description}</p>

      {/* views and likes */}
      <div className="flex items-center gap-1">
        <small className="flex items-center gap-1">
          <span>{featuredPost.views}</span>
          {t("views")}
        </small>

        <span>-</span>

        <small className="flex items-center gap-1">
          <span>{featuredPost.likes}</span>
          {t("likes")}
        </small>
      </div>

      {/* tags */}
      <div className="mt-5 flex flex-wrap items-center gap-1">
        {featuredPost.tags.map((tag: Tag) => (
          <span key={tag.id} className="tag-badge">
            {tag.name}
          </span>
        ))}
      </div>
    </MotionLink>
  );
}
