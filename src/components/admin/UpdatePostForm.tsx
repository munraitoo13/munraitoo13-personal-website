"use client";

import { updatePost } from "@/actions/updatePost";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { POST_LANGUAGES } from "@/constants/constants";
import { useTagSelection } from "@/hooks/useTagSelection";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import Button from "@/components/common/Button";

export function UpdatePostForm({ tags, post }: UpdatePostProps) {
  const {
    formState: { errors },
    register,
    watch,
    handleSubmit,
  } = useForm<PostData>();
  const router = useRouter();
  const {
    selectedTags,
    handleTagClick,
    tagColor,
    setSelectedTags,
    handleTagInput,
  } = useTagSelection(tags);

  const content = watch("content", post.content);

  useEffect(() => {
    const postTags = post.tags.map(({ name }: Tag) => name);
    setSelectedTags(postTags);
  }, []);

  const onSubmit = async (data: PostData) => {
    const toastId = toast.loading("Updating post...");

    try {
      const payload = {
        ...data,
        id: post.id,
        tags: selectedTags,
      };
      const { success, message } = await updatePost(payload);
      toast.update(toastId, {
        render: message,
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 3000,
      });

      success ? router.push("/admin") : console.error(message);
    } catch (error) {
      console.error("Error updating post: ", error);
      toast.update(toastId, {
        render: "An error occurred while updating the post.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="layout my-5 flex w-full flex-col gap-2"
    >
      {/* title */}
      <input
        defaultValue={post.title}
        type="text"
        placeholder="Title"
        {...register("title", { required: "Title is required" })}
        className="form--input"
      />
      {errors.title && <p className="text-accent">{errors.title.message}</p>}

      {/* description */}
      <textarea
        defaultValue={post.description}
        {...register("description", { required: "Description is required" })}
        placeholder="Description"
        className="form--input h-36 resize-none"
      />
      {errors.description && (
        <p className="text-accent">{errors.description.message}</p>
      )}

      {/* language and tags */}
      <div className="flex flex-col gap-2">
        {/* tags input and language */}
        <div className="flex gap-2 self-center">
          {/* language */}
          <select
            className="form--select w-fit"
            defaultValue={post.language}
            {...register("language", { required: "Language is required" })}
          >
            {POST_LANGUAGES.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
          {errors.language && (
            <p className="text-accent">{errors.language.message}</p>
          )}

          {/* tags input */}
          <input
            type="text"
            className="form--input"
            onKeyDown={handleTagInput}
            placeholder="Add tags (press enter)"
          />
        </div>

        {/* tags selector */}
        <div className="flex flex-wrap gap-3 self-center">
          {tags.map(({ id, name }) => (
            <div
              key={id}
              className={`${tagColor(name)} cursor-pointer capitalize`}
              onClick={() => handleTagClick(name)}
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col gap-2 xl:flex-row">
        <textarea
          defaultValue={post.content}
          {...register("content", { required: "Content is required" })}
          placeholder="Content"
          className="form--input h-[50rem] w-full resize-none xl:w-1/2"
        />

        <ReactMarkdown className="form--input mdx-content h-[50rem] w-full overflow-y-auto xl:w-1/2">
          {content}
        </ReactMarkdown>
      </div>
      {errors.content && (
        <p className="text-accent">{errors.content.message}</p>
      )}

      {/* submit and published */}
      <div className="mt-5 flex gap-5 self-center">
        {/* submit */}
        <Button type="submit">Update Post</Button>

        {/* published */}
        <div className="flex items-center justify-center gap-2">
          <input
            defaultChecked={post.published}
            type="checkbox"
            id="published"
            {...register("published")}
          />
          <label htmlFor="published" className="cursor-pointer">
            Published
          </label>
        </div>
      </div>
    </form>
  );
}
