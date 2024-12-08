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
      {posts.map(
        ({ id, isFeatured, published, language, title, description, tags }) => (
          <div key={id} className="mb-14 flex w-full self-center">
            {/* divider */}
            <div className="card-divider"></div>

            {/* post */}
            <div className="flex w-full flex-col gap-2">
              {/* buttons */}
              <div className="flex gap-3">
                {/* pin/unpin */}
                <IconPinFilled
                  className={`${isFeatured && ""} cursor-pointer`}
                  onClick={() => handlePin(id, isFeatured)}
                />

                {/* edit */}
                <Link className="" href={`/admin/update-post/${id}`}>
                  <IconSettingsFilled />
                </Link>

                {/* delete */}
                <IconTrashFilled
                  onClick={() => handleDelete(id)}
                  className="cursor-pointer"
                />
              </div>

              {/* published and lang */}
              <small className="flex flex-col">
                {/* published */}
                <p className={`${published && ""}`}>
                  {published ? "Published" : "Not published"}
                </p>

                {/* lang */}
                <p>{language}</p>
              </small>

              {/* title and desc */}
              <div>
                {/* title */}
                <Link
                  href={`/personal/blog/posts/${id}`}
                  target="_blank"
                  className="section-title"
                >
                  {title}
                </Link>

                {/* description */}
                <p className="text-lg">{description}</p>
              </div>

              {/* tags */}
              <div className="mt-5 flex flex-wrap gap-1">
                {tags.map(({ id, name }: Tag) => (
                  <span key={id} className="tag-badge">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ),
      )}
    </>
  );
}
