import { deletePost } from "@/actions/deletePost";
import { pinPost } from "@/actions/pinPost";
import { useState } from "react";
import { toast } from "react-toastify";
import { Post } from "@/types/types";

export function usePostManager(initialPosts: Post[]) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

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

  return { handleDelete, handlePin, posts };
}
