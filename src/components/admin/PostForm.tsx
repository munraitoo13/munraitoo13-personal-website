"use client";

import { createPost } from "@/actions/createPost";
import { POST_LANGUAGES } from "@/constants/constants";
import { useTagSelection } from "@/hooks/useTagSelection";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Input } from "@/components/common/Input";
import { Textarea } from "@/components/common/Textarea";
import { Select } from "@/components/common/Select";
import Button from "@/components/common/Button";
import { TagList } from "../common/TagList";
import { updatePost } from "@/actions/updatePost";

export function PostForm({ tags, post }: PostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PostData>({
    defaultValues: post
      ? { ...post, tags: post.tags.map((tag) => tag.name) }
      : undefined,
  });
  const router = useRouter();
  const { selectedTags, handleTagClick, tagColor, handleTagInput } =
    useTagSelection(tags);

  const content = watch("content", "");

  const onSubmit = async (data: PostData) => {
    const isEditing = !!post;
    const toastId = toast.loading(
      post ? "Updating post..." : "Creating post...",
    );

    try {
      const { success, message } = isEditing
        ? await updatePost({ ...data, id: post.id, tags: selectedTags })
        : await createPost({ ...data, tags: selectedTags });

      toast.update(toastId, {
        render: message,
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 5000,
      });

      success ? router.push("/admin") : console.error("Error: ", message);
    } catch (error) {
      console.error("Error: ", error);
      toast.update(toastId, {
        render: "Error creating post",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto flex min-h-0 w-full flex-1 flex-col gap-2"
    >
      <Input
        {...register("title", { required: "Title is required" })}
        placeholder="Title"
        error={errors.title?.message}
      />

      <Textarea
        {...register("description", { required: "Description is required" })}
        placeholder="Description"
        error={errors.title?.message}
      />

      <div className="flex gap-2 self-center">
        <Select
          {...register("language", { required: "Language is required" })}
          options={POST_LANGUAGES}
        />

        <Input
          onKeyDown={handleTagInput}
          placeholder="Add tags (press enter)"
        />
      </div>

      <TagList
        tags={tags}
        handleTagClick={handleTagClick}
        tagColor={tagColor}
      />

      <div className="grid min-h-0 grow grid-rows-2 gap-2 xl:grid-cols-2 xl:grid-rows-1">
        <Textarea
          {...register("content", { required: "Content is required" })}
          placeholder="Content"
          className="flex-1 resize-none"
        />

        <ReactMarkdown className="prose max-h-full max-w-none overflow-y-auto rounded-xl bg-background-contrast px-5 py-4">
          {content}
        </ReactMarkdown>
      </div>

      <div className="flex items-center space-x-2">
        <Button type="submit">{post ? "Update Post" : "Create Post"}</Button>

        <input type="checkbox" id="published" {...register("published")} />
        <label htmlFor="published">Published</label>
      </div>
    </form>
  );
}
