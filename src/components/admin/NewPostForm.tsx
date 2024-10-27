"use client";

import { createPost } from "@/actions/createPost";
import { useTagSelection } from "@/hooks/useTagSelection";
import { toast } from "react-toastify";

export function NewPostForm({ tags }: NewPostProps) {
  const languages = ["Português", "English", "Français", "Deutsch"];
  const { selectedTags, handleTagClick, tagColor } = useTagSelection();

  // handle form submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // create formdata and append tags
    const formData = new FormData(event.currentTarget);
    selectedTags.forEach((tag) => formData.append("tags", tag));

    // check if all fields are filled
    if (Array.from(formData.values()).some((value) => value === "")) {
      toast.error("Please fill all fields");
      return;
    }

    // create post
    try {
      await createPost(formData);
      toast.success("Post created successfully!");
    } catch (error) {
      toast.error("Error creating post");
      console.error("Error creating post: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
      {/* title */}
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full rounded-xl bg-neutral-50/50 px-5 py-3 dark:bg-neutral-900/25"
      />

      {/* description */}
      <textarea
        name="description"
        placeholder="Description"
        className="w-full rounded-xl bg-neutral-50/50 px-5 py-3 dark:bg-neutral-900/25"
      />

      {/* language and tags */}
      <div className="flex gap-2">
        {/* language */}
        <select
          name="language"
          className="w-fit appearance-none rounded-xl bg-neutral-50/50 px-5 py-3 dark:bg-neutral-900/25"
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        {/* tags */}
        <div className="flex items-center justify-center gap-1">
          {tags.map((tag) => (
            <div
              key={tag.id}
              className={`${tagColor(tag.id)} cursor-pointer rounded-xl px-3 py-1`}
              onClick={() => handleTagClick(tag.id)}
            >
              {tag.name}
            </div>
          ))}
        </div>
      </div>

      {/* content */}
      <textarea
        name="content"
        placeholder="Content"
        className="h-96 w-full rounded-xl bg-neutral-50/50 px-5 py-3 dark:bg-neutral-900/25"
      />

      {/* submit and published */}
      <div className="mt-5 flex gap-5 self-center">
        {/* submit */}
        <button
          type="submit"
          className="text- rounded-full bg-red-600 px-5 py-3 text-white"
        >
          Create Post
        </button>

        {/* published */}
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            name="published"
            id="published"
            className="h-3 w-3 cursor-pointer appearance-none rounded-sm bg-neutral-50/50 outline outline-4 outline-neutral-50/50 checked:bg-red-600 dark:bg-neutral-900/25 dark:outline-neutral-900/25 dark:checked:bg-red-600"
          />
          <label htmlFor="published" className="cursor-pointer">
            Published
          </label>
        </div>
      </div>
    </form>
  );
}
