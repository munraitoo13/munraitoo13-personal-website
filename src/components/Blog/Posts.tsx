import { motion } from "framer-motion";
import { getTranslations } from "next-intl/server";
import { IconGhost2Filled } from "@tabler/icons-react";
import formatDate from "@/lib/formatDate";

type Tag = {
  name: string;
  id: string;
};

type Post = {
  id: string;
  title: string;
  description: string;
  language: string;
  createdAt: Date;
  tags: Tag[];
};

// SinglePost component
export default async function Posts({ allPosts }: { allPosts: Post[] }) {
  const t = await getTranslations("Blog");

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col gap-5"
    >
      {allPosts.map((post) => (
        <motion.a
          initial={{ opacity: 1, x: 0 }}
          whileHover={{ x: 5 }}
          className="flex flex-col gap-10 rounded-xl bg-neutral-900/25 p-10"
          href={`/personal/blog/posts/${post.id}`}
          key={post.id}
        >
          {/* post itself */}
          <div className="flex flex-col gap-3">
            {/* date and lang */}
            <div className="flex items-center gap-5 text-red-600">
              {/* date */}
              <small>{formatDate(post.createdAt)}</small>
            </div>

            {/* title */}
            <h2 className="text-4xl font-bold text-white">{post.title}</h2>

            {/* description */}
            <p className="text-xl">{post.description}</p>

            {/* tags */}
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag: Tag) => (
                <span
                  key={tag.id}
                  className="rounded-full bg-neutral-900/25 px-3 py-1"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* check it and lang */}
          <div className="flex items-center gap-5">
            {/* check it */}
            <div className="flex w-fit items-center gap-3 rounded-full bg-neutral-900/25 px-5 py-3 font-bold">
              <IconGhost2Filled />
              {t("check")}
            </div>

            {/* lang */}
            <small>{post.language}</small>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
