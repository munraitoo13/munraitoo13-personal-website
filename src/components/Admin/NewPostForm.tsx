"use client";

import { getTags } from "@/lib/db";
import { newPost } from "@/lib/posts/newPost";
import { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface Tag {
  id: string;
  name: string;
}

export default function NewPostForm() {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    fetchTags();
  }, []);

  async function fetchTags() {
    const tags = await getTags();
    setTags(tags);
  }

  const languages = [
    "Portuguese",
    "English",
    "French",
    "Spanish",
    "Italian",
    "German",
    "Japanese",
  ];

  return (
    <form
      action={async (formData) => {
        await newPost(formData);
      }}
      className="flex w-full flex-col items-center justify-center gap-3"
    >
      {/* language and published */}
      <div className="flex gap-5">
        {/* language */}
        <select name="language" className="cursor-pointer rounded-xl px-5 py-2">
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        {/* published */}
        <div className="flex items-center justify-center gap-2">
          <input
            type="checkbox"
            name="published"
            id="published"
            className="cursor-pointer"
          />
          <label htmlFor="published">Published?</label>
        </div>
      </div>

      {/* title */}
      <TextareaAutosize
        name="title"
        placeholder="Title"
        className="w-full resize-none rounded-xl p-5"
        maxLength={100}
      />

      {/* tags */}
      <select
        name="tags"
        className="w-full cursor-pointer rounded-xl px-5 py-2"
        multiple
      >
        {tags.map((tag) => (
          <option key={tag.id} value={tag.id}>
            {tag.name}
          </option>
        ))}
      </select>

      {/* description */}
      <TextareaAutosize
        name="description"
        placeholder="Description"
        className="w-full resize-none rounded-xl p-5"
        maxLength={255}
      />

      {/* content */}
      <TextareaAutosize
        name="content"
        placeholder="Content"
        className="max-h-96 w-full resize-none rounded-xl p-5"
      />

      {/* submit */}
      <button
        type="submit"
        className="rounded-xl bg-red-600 px-5 py-2 text-white"
      >
        New Post
      </button>
    </form>
  );
}
