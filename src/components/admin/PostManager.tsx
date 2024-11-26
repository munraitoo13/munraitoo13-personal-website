"use client";

import { deletePost } from "@/actions/deletePost";
import {
  IconTrashFilled,
  IconSettingsFilled,
  IconPinFilled,
} from "@tabler/icons-react";
import { toast } from "react-toastify";
import Link from "next/link";
import { pinPost } from "@/actions/pinPost";

export function PostManager({ posts }: ManagerProps) {
  // handle delete
  const handleDelete = async (id: string) => {
    try {
      toast.loading("Deleting post...");
      await deletePost(id);
      toast.dismiss();
    } catch (error) {
      toast.error("Error deleting post");
      console.error("Error deleting post: ", error);
    }

    toast.success("Post deleted successfully!");
  };

  // handle pin
  const handlePin = async (id: string, isFeatured: boolean) => {
    try {
      toast.loading(isFeatured ? "Unfeaturing post..." : "Featuring post...");
      await pinPost(id);
      toast.dismiss();
    } catch (error) {
      toast.error(
        isFeatured ? "Error unfeaturing post" : "Error featuring post",
      );
      console.error(
        isFeatured ? "Error unfeaturing post" : "Error featuring post",
        error,
      );
    }

    toast.success(isFeatured ? "Post unfeatured!" : "Post featured!");
  };

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="mb-14 flex w-full self-center">
          {/* divider */}
          <div className="card-divider"></div>

          {/* post */}
          <div className="flex w-full flex-col gap-2">
            {/* buttons */}
            <div className="flex gap-3">
              {/* pin/unpin */}
              <IconPinFilled
                className={`${post.isFeatured && "text-red-500"} cursor-pointer hover:text-red-500`}
                onClick={() => handlePin(post.id, post.isFeatured)}
              />

              {/* edit */}
              <Link
                className="hover:text-red-500"
                href={`/admin/update-post/${post.id}`}
              >
                <IconSettingsFilled />
              </Link>

              {/* delete */}
              <IconTrashFilled
                onClick={() => handleDelete(post.id)}
                className="cursor-pointer hover:text-red-500"
              />
            </div>

            {/* published and lang */}
            <small className="flex flex-col">
              {/* published */}
              <p className={`${post.published && "text-red-500"}`}>
                {post.published ? "Published" : "Not published"}
              </p>

              {/* lang */}
              <p>{post.language}</p>
            </small>

            {/* title and desc */}
            <div>
              {/* title */}
              <Link
                href={`/personal/blog/posts/${post.id}`}
                target="_blank"
                className="section-title"
              >
                {post.title}
              </Link>

              {/* description */}
              <p className="text-lg">{post.description}</p>
            </div>

            {/* tags */}
            <div className="mt-5 flex flex-wrap gap-1">
              {post.tags.map((tag: Tag) => (
                <span key={tag.id} className="tag-badge">
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
