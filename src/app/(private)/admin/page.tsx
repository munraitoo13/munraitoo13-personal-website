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
        <h1 className="text-5xl">Admin Panel</h1>

        <p className="text-xl">
          Please note that some functions may not work properly!
        </p>
      </div>

      {/* content */}
      <div className="mt-10 flex w-full flex-col gap-5">
        {/* shortcuts */}
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="font-extrabold text-2xl">Shortcuts</h2>

          {/* links */}
          <div className="flex gap-1">
            {ADMIN_LINKS.map(({ href, title }) => (
              <Link key={title} href={href} className="button button--solid">
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
