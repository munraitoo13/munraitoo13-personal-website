"use client";

import { deletePost } from "@/actions/deletePost";
import {
  IconTrashX,
  IconEdit,
  IconPinFilled,
  IconPin,
} from "@tabler/icons-react";
import { toast } from "react-toastify";
import Link from "next/link";
import { pinPost } from "@/actions/pinPost";

export function PostManager({ posts }: ManagerProps) {
  // handle delete
  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // create formdata
    const formData = new FormData(event.currentTarget);

    // delete post
    try {
      await deletePost(formData);
      toast.success("Post deleted successfully!");
    } catch (error) {
      toast.error("Error deleting post");
      console.error("Error deleting post: ", error);
    }
  };

  // handle pin
  const handlePin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // create formdata
    const formData = new FormData(event.currentTarget);
    const isFeatured = formData.get("isFeatured") === "true";

    // pin/unpin post
    try {
      await pinPost(formData);
      toast.success(`Post ${isFeatured ? "unpinned" : "pinned"} successfully!`);
    } catch (error) {
      toast.error(`Error ${isFeatured ? "unpinning" : "pinning"} post`);
      console.error(
        `Error ${isFeatured ? "unpinning" : "pinning"} post:`,
        error,
      );
    }
  };

  return (
    <>
      {posts.map((post: Post) => (
        <div
          key={post.id}
          className="flex w-full flex-col gap-5 rounded-xl bg-neutral-50 p-10 dark:bg-neutral-900/25"
        >
          {/* post */}
          <div className="flex flex-col gap-3">
            {/* published, pinned, lang */}
            <div className="flex flex-col text-xs">
              {/* published */}
              <p
                className={`${post.published ? "text-green-600" : "text-red-600"}`}
              >
                {post.published ? "Published" : "Not published"}
              </p>

              {/* pinned */}
              <p
                className={`${post.isFeatured ? "text-blue-600" : "text-yellow-600"}`}
              >
                {post.isFeatured ? "Pinned" : "Not pinned"}
              </p>

              {/* lang */}
              <p>Language: {post.language}</p>
            </div>

            {/* title and desc */}
            <div>
              {/* title */}
              <Link
                href={`/personal/blog/posts/${post.id}`}
                target="_blank"
                className="text-xl font-bold text-neutral-900 hover:text-red-600 dark:text-white dark:hover:text-red-600"
              >
                {post.title}
              </Link>

              {/* description */}
              <p>{post.description}</p>
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag: Tag) => (
                <span
                  key={tag.id}
                  className="rounded-lg bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-900/25 dark:text-neutral-200"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* buttons */}
          <div className="flex gap-3">
            {/* pin/unpin */}
            <form
              className="cursor-pointer hover:text-red-600"
              onSubmit={handlePin}
            >
              <input type="hidden" name="id" value={post.id} />
              <input
                type="hidden"
                name="isFeatured"
                value={post.isFeatured.toString()}
              />
              <button type="submit">
                {post.isFeatured ? <IconPinFilled /> : <IconPin />}
              </button>
            </form>

            {/* edit */}
            <Link
              className="hover:text-red-600"
              href={`/admin/update-post/${post.id}`}
            >
              <IconEdit />
            </Link>

            {/* delete */}
            <form
              onSubmit={handleDelete}
              className="cursor-pointer hover:text-red-600"
            >
              <input type="hidden" name="id" value={post.id} />
              <button type="submit">
                <IconTrashX />
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
}
