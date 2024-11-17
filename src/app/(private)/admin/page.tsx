import { PostManager } from "@/components/admin/PostManager";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const links = [
  {
    name: "New Post",
    href: "/admin/new-post",
  },
];

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

        <p className="subtitle">
          Please note that some functions may not work properly!
        </p>
      </div>

      {/* content */}
      <div className="flex w-full max-w-screen-xl flex-col gap-5">
        {/* shortcuts */}
        <div className="flex flex-col items-center justify-center gap-5 rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25">
          <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white">
            Shortcuts
          </h3>

          {/* links */}
          <div className="flex gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full bg-neutral-100 px-5 py-3 hover:bg-red-500 hover:text-white dark:bg-neutral-900/25 dark:hover:bg-red-500 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* post manager */}
        <div className="grid gap-5 rounded-xl bg-neutral-50 p-5 lg:grid-cols-2 dark:bg-neutral-900/25">
          <PostManager posts={posts} />
        </div>
      </div>
    </>
  );
}
