"use client";

import { updatePost } from "@/actions/updatePost";
import { useTagSelection } from "@/hooks/useTagSelection";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";

export function UpdatePostForm({ tags, post }: UpdatePostProps) {
  const languages = ["Português", "English", "Français", "Deutsch"];
  const [content, setContent] = useState(post.content);
  const { selectedTags, handleTagClick, tagColor, setSelectedTags } =
    useTagSelection();

  // set selectedTags to post tags
  useEffect(() => {
    const postTags = post.tags.map((tag: Tag) => tag.id);
    setSelectedTags(postTags);
  }, []);

  // handle form submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // create formdata and append tags
    const formData = new FormData(event.currentTarget);
    formData.append("id", post.id);
    selectedTags.forEach((tag) => formData.append("tags", tag));

    // check if all fields are filled
    if (Array.from(formData.values()).some((value) => value === "")) {
      toast.error("Please fill all fields");
      return;
    }

    // create post
    try {
      await updatePost(formData);
      toast.success("Post updated successfully!");
    } catch (error) {
      toast.error("Error updating post");
      console.error("Error creating post: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
      {/* title */}
      <input
        defaultValue={post.title}
        type="text"
        name="title"
        placeholder="Title"
        className="form-input"
      />

      {/* description */}
      <textarea
        defaultValue={post.description}
        name="description"
        placeholder="Description"
        className="form-input h-36 resize-none"
      />

      {/* language and tags */}
      <div className="flex gap-2">
        {/* language */}
        <select
          defaultValue={post.language}
          name="language"
          className="form-input w-fit"
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
      <div className="flex flex-col gap-2 xl:flex-row">
        <textarea
          name="content"
          defaultValue={post.content}
          placeholder="Content"
          className="form-input h-[50rem] w-full resize-none xl:w-1/2"
          onChange={(event) => setContent(event.target.value)}
        />

        <ReactMarkdown className="form-input markdown h-[50rem] w-full overflow-y-auto xl:w-1/2">
          {content}
        </ReactMarkdown>
      </div>

      {/* submit and published */}
      <div className="mt-5 flex gap-5 self-center">
        {/* submit */}
        <button type="submit" className="button">
          Update Post
        </button>

        {/* published */}
        <div className="flex items-center justify-center gap-2">
          <input
            defaultChecked={post.published}
            type="checkbox"
            name="published"
            id="published"
            className="h-3 w-3 cursor-pointer appearance-none rounded-sm bg-neutral-50/50 outline outline-4 outline-neutral-50/50 checked:bg-red-500 dark:bg-neutral-900/25 dark:outline-neutral-900/25 dark:checked:bg-red-500"
          />
          <label htmlFor="published" className="cursor-pointer">
            Published
          </label>
        </div>
      </div>
    </form>
  );
}