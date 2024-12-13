"use client";

import { deletePost } from "@/actions/deletePost";
import { pinPost } from "@/actions/pinPost";
import {
  IconPinFilled,
  IconSettingsFilled,
  IconTrashFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { toast } from "react-toastify";

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
                className="text-primary text-2xl font-medium"
              >
                {title}
              </Link>

              {/* description */}
              <p>{description}</p>

              {/* tags */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {tags.map(({ id, name }: Tag) => (
                  <span key={id} className="text-tertiary capitalize">
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
