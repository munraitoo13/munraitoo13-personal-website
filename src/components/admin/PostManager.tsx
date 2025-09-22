"use client";

import { usePostManaer } from "@/hooks/usePostManager";
import {
  IconPinFilled,
  IconPencil,
  IconTrash,
  IconPin,
} from "@tabler/icons-react";
import Link from "next/link";

export function PostManager({ initialPosts }: { initialPosts: Post[] }) {
  const { handleDelete, handlePin, posts } = usePostManaer(initialPosts);
  const PinIcon = ({ isFeatured, onClick }: any) => {
    const IconComponent = isFeatured ? IconPinFilled : IconPin;
    return (
      <IconComponent
        className="cursor-pointer hover:text-accent-hover"
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
            className="flex flex-col rounded-xl bg-background-contrast p-8"
          >
            <div className="flex gap-2 text-primary">
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
                className="cursor-pointer hover:text-accent-hover"
              />
            </div>

            <div className="mt-3 space-x-2 text-secondary">
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
              className="text-2xl font-medium text-primary"
            >
              {title}
            </Link>

            <p>{description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {tags.map(({ id, name }: Tag) => (
                <span key={id} className="capitalize text-tertiary">
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
