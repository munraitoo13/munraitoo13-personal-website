"use client";

import { deletePost } from "@/actions/deletePost";
import { pinPost } from "@/actions/pinPost";
import {
  IconPinFilled,
  IconSettingsFilled,
  IconTrashFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export function PostManager({ posts: initialPosts }: ManagerProps) {
  const [posts, setPosts] = useState(initialPosts);

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting post...");

    try {
      const { success, message } = await deletePost(id);
      if (success) {
        setPosts((prev) => prev.filter((post) => post.id !== id));
      }

      toast.update(toastId, {
        render: message,
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      console.error("Error deleting post: ", error);
      toast.update(toastId, {
        render: "Error deleting post",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  const handlePin = async (id: string, isFeatured: boolean) => {
    const toastId = toast.loading(
      isFeatured ? "Unfeaturing post..." : "Featuring post...",
    );

    try {
      const { success, message } = await pinPost(id);
      if (success) {
        setPosts((prev) =>
          prev.map((post) =>
            post.id === id ? { ...post, isFeatured: !isFeatured } : post,
          ),
        );
      }

      toast.update(toastId, {
        render: message,
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (error) {
      console.error(
        isFeatured ? "Error unfeaturing post" : "Error featuring post",
        error,
      );
      toast.update(toastId, {
        render: isFeatured ? "Error unfeaturing post" : "Error featuring post",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="layout mt-12 flex flex-col gap-8">
      {posts.map(
        ({ id, isFeatured, published, language, title, description, tags }) => (
          <div key={id} className="flex w-full self-center">
            {/* divider */}
            <div className="divider--card"></div>

            {/* post */}
            <div className="flex w-full flex-col">
              {/* buttons */}
              <div className="flex gap-3">
                {/* pin/unpin */}
                <IconPinFilled
                  className={`${isFeatured && "text-accent"} cursor-pointer hover:text-accent`}
                  onClick={() => handlePin(id, isFeatured)}
                />

                {/* edit */}
                <Link
                  className="hover:text-accent"
                  href={`/admin/update-post/${id}`}
                >
                  <IconSettingsFilled />
                </Link>

                {/* delete */}
                <IconTrashFilled
                  onClick={() => handleDelete(id)}
                  className="cursor-pointer hover:text-accent"
                />
              </div>

              {/* published and lang */}
              <div className="mt-3 flex gap-5">
                {/* published */}
                <p>{published ? "Published" : "Not published"}</p>

                {/* lang */}
                <p>{language}</p>
              </div>

              {/* title */}
              <Link
                href={`/personal/blog/posts/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-medium text-primary"
              >
                {title}
              </Link>

              {/* description */}
              <p>{description}</p>

              {/* tags */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {tags.map(({ id, name }: Tag) => (
                  <span key={id} className="capitalize text-tertiary">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
