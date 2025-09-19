"use client";

import { updatePost } from "@/actions/updatePost";
import { useRouter } from "next/navigation";
import { POST_LANGUAGES } from "@/constants/constants";
import { useTagSelection } from "@/hooks/useTagSelection";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";

export function UpdatePostForm({ tags, post }: UpdatePostProps) {
  const router = useRouter();
  const [content, setContent] = useState(post.content);
  const {
    selectedTags,
    handleTagClick,
    tagColor,
    setSelectedTags,
    handleTagInput,
  } = useTagSelection(tags);

  useEffect(() => {
    const postTags = post.tags.map(({ name }: Tag) => name);
    setSelectedTags(postTags);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("id", post.id);
    selectedTags.forEach((tag) => formData.append("tags", tag));

    if (Array.from(formData.values()).some((value) => value === "")) {
      toast.error("Please fill all fields");
      return;
    }

    const toastId = toast.loading("Updating post...");
    try {
      const { success, message } = await updatePost(formData);
      toast.update(toastId, {
        render: message,
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 3000,
      });

      success && router.push("/admin");
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
      onSubmit={handleSubmit}
      className="layout my-5 flex w-full flex-col gap-2"
    >
      {/* title */}
      <input
        defaultValue={post.title}
        type="text"
        name="title"
        placeholder="Title"
        className="form--input"
      />

      {/* description */}
      <textarea
        defaultValue={post.description}
        name="description"
        placeholder="Description"
        className="form--input h-36 resize-none"
      />

      {/* language and tags */}
      <div className="flex flex-col gap-2">
        {/* tags input and language */}
        <div className="flex gap-2 self-center">
          {/* language */}
          <select
            name="language"
            className="form--select w-fit"
            defaultValue={post.language}
          >
            {POST_LANGUAGES.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>

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
          name="content"
          defaultValue={post.content}
          placeholder="Content"
          className="form--input h-[50rem] w-full resize-none xl:w-1/2"
          onChange={(event) => setContent(event.target.value)}
        />

        <ReactMarkdown className="form--input mdx-content h-[50rem] w-full overflow-y-auto xl:w-1/2">
          {content}
        </ReactMarkdown>
      </div>

      {/* submit and published */}
      <div className="mt-5 flex gap-5 self-center">
        {/* submit */}
        <button type="submit" className="button button--solid">
          Update Post
        </button>

        {/* published */}
        <div className="flex items-center justify-center gap-2">
          <input
            defaultChecked={post.published}
            type="checkbox"
            name="published"
            id="published"
          />
          <label htmlFor="published" className="cursor-pointer">
            Published
          </label>
        </div>
      </div>
    </form>
  );
}
