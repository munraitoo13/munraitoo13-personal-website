import { PostManager } from "@/components/admin/PostManager";
import { ADMIN_LINKS } from "@/constants/constants";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Admin() {
  const posts = await prisma.post.findMany({
    include: {
      tags: true,
    },
  });

  return (
    <>
      {/* title */}
      <div className="text-center">
        <h1 className="title">Admin Panel</h1>

        <p className="mt-5 text-lg">
          Please note that some functions may not work properly!
        </p>
      </div>

      {/* content */}
      <div className="flex w-full max-w-screen-lg flex-col gap-5">
        {/* shortcuts */}
        <div className="mb-10 flex flex-col items-center justify-center gap-5 rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25">
          <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white">
            Shortcuts
          </h3>

          {/* links */}
          <div className="flex gap-1">
            {ADMIN_LINKS.map(({ href, title }) => (
              <Link key={title} href={href} className="button">
                {title}
              </Link>
            ))}
          </div>
        </div>

        {/* post manager */}
        <PostManager posts={posts} />
      </div>
    </>
  );
}
