import { PostManager } from "@/components/admin/PostManager";
import { ADMIN_LINKS } from "@/constants/constants";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Button from "@/components/common/Button";

export default async function Admin() {
  const initialPosts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      tags: true,
    },
  });

  return (
    <div className="container mx-auto space-y-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-5xl font-medium text-primary">
          Admin Panel
        </h1>

        <div className="flex gap-2">
          {ADMIN_LINKS.map(({ href, title }) => (
            <Link key={title} href={href}>
              <Button>{title}</Button>
            </Link>
          ))}
        </div>
      </div>

      <PostManager initialPosts={initialPosts} />
    </div>
  );
}
