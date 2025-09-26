import { IconPinnedFilled } from "@tabler/icons-react";
import { Post } from "@/types/types";
import Link from "next/link";

export function FeaturedPost({ featuredPost }: { featuredPost: Post | null }) {
  if (!featuredPost) {
    return null;
  }

  return (
    <Link
      href={`/personal/blog/posts/${featuredPost.id}`}
      className="border-background-contrast mb-16 flex flex-col items-center justify-center gap-4 rounded-xl border p-8 text-center"
    >
      <IconPinnedFilled className="text-primary" />

      <div className="flex flex-col">
        <h2 className="text-2xl">{featuredPost.title}</h2>

        <p>{featuredPost.description}</p>

        <div className="mt-4 flex items-center justify-center gap-2">
          {featuredPost.tags.map((tag) => (
            <span key={tag.id} className="text-tertiary">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
