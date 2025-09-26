"use client";

import { usePostManager } from "@/hooks/usePostManager";
import {
  IconPinFilled,
  IconPencil,
  IconTrash,
  IconPin,
} from "@tabler/icons-react";
import Link from "next/link";

export function PostManager({ initialPosts }: { initialPosts: Post[] }) {
  const { handleDelete, handlePin, posts } = usePostManager(initialPosts);
  const PinIcon = ({ isFeatured, onClick }: any) => {
    const IconComponent = isFeatured ? IconPinFilled : IconPin;
    return (
      <IconComponent
        className="hover:text-accent-hover cursor-pointer"
        onClick={onClick}
      />
    );
  };

  return (
    <div className="grid gap-2 lg:grid-cols-2">
      {posts.map(
        ({ id, isFeatured, published, language, title, description, tags }) => (
          <div
            key={id}
            className="bg-background-contrast flex flex-col rounded-xl p-8"
          >
            <div className="text-primary flex gap-2">
              <PinIcon
                isFeatured={isFeatured}
                onClick={() => handlePin(id, isFeatured)}
              />

              <Link
                className="hover:text-accent-hover"
                href={`/admin/update-post/${id}`}
              >
                <IconPencil />
              </Link>

              <IconTrash
                onClick={() => handleDelete(id)}
                className="hover:text-accent-hover cursor-pointer"
              />
            </div>

            <div className="text-secondary mt-3 space-x-2">
              <span
                className={`${published ? "text-green-500" : "text-accent"}`}
              >
                {published ? "Published" : "Not published"}
              </span>
              <span>{language}</span>
            </div>

            <Link
              href={`/personal/blog/posts/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              {title}
            </Link>

            <p>{description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {tags.map(({ id, name }: Tag) => (
                <span key={id} className="text-tertiary capitalize">
                  {name}
                </span>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
