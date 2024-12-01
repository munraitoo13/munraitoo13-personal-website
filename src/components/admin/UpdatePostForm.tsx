"use client";

import { updatePost } from "@/actions/updatePost";
import { useTagSelection } from "@/hooks/useTagSelection";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { toast } from "react-toastify";
import { POST_LANGUAGES } from "@/constants/constants";

export function UpdatePostForm({ tags, post }: UpdatePostProps) {
  const [content, setContent] = useState(post.content);
  const {
    selectedTags,
    handleTagClick,
    tagColor,
    setSelectedTags,
    handleTagInput,
  } = useTagSelection(tags);

  const languages = ["Português", "English", "Français", "Deutsch"];

  // set selectedTags to post tags
  useEffect(() => {
    const postTags = post.tags.map(({ name }: Tag) => name);
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
      toast.loading("Updating post...");
      await updatePost(formData);
      toast.dismiss();
    } catch (error) {
      toast.error("Error updating post");
      console.error("Error creating post: ", error);
    }

    toast.success("Post updated successfully!");
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
      <div className="flex flex-col gap-2">
        {/* tags input and language */}
        <div className="flex gap-2 self-center">
          {/* language */}
          <select name="language" className="form-input w-fit">
            {POST_LANGUAGES.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>

          {/* tags input */}
          <input
            type="text"
            className="form-input"
            onKeyDown={handleTagInput}
            placeholder="Add tags (press enter)"
          />
        </div>

        {/* tags selector */}
        <div className="flex flex-wrap gap-1 self-center">
          {tags.map(({ id, name }) => (
            <div
              key={id}
              className={`${tagColor(name)} cursor-pointer rounded-xl px-3 py-1 capitalize`}
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
            className="h-3 w-3 cursor-pointer appearance-none rounded-sm bg-neutral-100/50 outline outline-4 outline-neutral-100/50 checked:bg-red-500 dark:bg-neutral-900/25 dark:outline-neutral-900/25 dark:checked:bg-red-500"
          />
          <label htmlFor="published" className="cursor-pointer">
            Published
          </label>
        </div>
      </div>
    </form>
  );
}
