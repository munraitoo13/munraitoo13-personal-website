"use client";

import { createPost } from "@/actions/createPost";
import { POST_LANGUAGES } from "@/constants/constants";
import { useTagSelection } from "@/hooks/useTagSelection";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Input } from "@/components/common/Input";
import Button from "@/components/common/Button";

export function NewPostForm({ tags }: { tags: Tag[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PostData>();
  const router = useRouter();
  const { selectedTags, handleTagClick, tagColor, handleTagInput } =
    useTagSelection(tags);

  const content = watch("content", "");

  const onSubmit = async (data: PostData) => {
    const toastId = toast.loading("Creating post...");

    try {
      const payload = {
        ...data,
        selectedTags,
      };
      const { success, message } = await createPost(payload);

      toast.update(toastId, {
        render: success ? "Post created successfully!" : "Error creating post",
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 5000,
      });

      success
        ? router.push("/admin")
        : console.error("Error creating post: ", message);
    } catch (error) {
      console.error("Error creating post: ", error);
      toast.update(toastId, {
        render: "Error creating post",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="layout my-5 flex w-full flex-col gap-2"
      >
        <Input
          id="title"
          label="title"
          type="title"
          placeholder="you@example.com"
          {...register("title")}
          error={errors.title?.message}
        />

        {/* description */}
        <textarea
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
              {...register("language", { required: "Language is required" })}
              className="form--select w-fit"
              defaultValue={POST_LANGUAGES[0]}
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
          <Button type="submit">Create Post</Button>

          {/* published */}
          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" id="published" {...register("published")} />
            <label htmlFor="published" className="cursor-pointer">
              Published
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
