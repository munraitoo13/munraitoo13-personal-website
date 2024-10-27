"use client";

import { deletePost } from "@/actions/deletePost";
import { IconTrash, IconPencil } from "@tabler/icons-react";
import { formatDate } from "@/utils/formatDate";
import { toast } from "react-toastify";
import Link from "next/link";

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

  return (
    <div className="flex w-full flex-col gap-5">
      {posts.map((post: Post) => (
        <div
          key={post.id}
          className="flex w-full items-center justify-between gap-5 rounded-xl bg-neutral-50 p-10 dark:bg-neutral-900/25"
        >
          {/* post */}
          <div className="flex flex-col gap-3">
            {/* date, lang, published */}
            <div className="flex flex-col text-xs">
              {/* published */}
              <p
                className={`${post.published ? "text-green-600" : "text-red-600"}`}
              >
                {post.published ? "Published" : "Not published"}
              </p>

              {/* date */}
              <p>Created at: {formatDate(post.createdAt)}</p>

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
          <div className="ml-24 flex gap-5 font-bold">
            {/* edit */}
            <Link
              className="hover:text-red-600"
              href={`/admin/update-post/${post.id}`}
            >
              <IconPencil stroke={1.25} />
            </Link>

            {/* delete */}
            <form
              onSubmit={handleDelete}
              className="cursor-pointer hover:text-red-600"
            >
              <input type="hidden" name="id" value={post.id} />
              <button type="submit">
                <IconTrash stroke={1.25} />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
