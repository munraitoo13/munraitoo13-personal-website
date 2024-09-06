import { prisma } from "@/lib/prisma";
import { createPost } from "@/actions/actions";

const languages = [
  "Portuguese",
  "English",
  "French",
  "Spanish",
  "Italian",
  "German",
  "Japanese",
];

export default async function NewPostForm() {
  const tags = await prisma.tag.findMany();

  return (
    <form
      className="flex h-full w-full flex-col items-center justify-center gap-3"
      action={createPost}
    >
      {/* title */}
      <input
        name="title"
        placeholder="Title"
        className="w-full resize-none rounded-xl bg-neutral-50 p-5"
        maxLength={64}
      />

      {/* language and tags */}
      <div className="flex w-full gap-3">
        {/* language */}
        <select
          name="language"
          className="cursor-pointer rounded-xl bg-neutral-50 px-5"
        >
          {languages.map((language) => (
            <option className="bg-inherit" key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        {/* tags */}
        <select
          name="tags"
          className="w-full cursor-pointer rounded-xl bg-neutral-50 px-5"
          multiple
        >
          {tags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      {/* description */}
      <textarea
        name="description"
        placeholder="Description"
        className="h-24 w-full resize-none rounded-xl bg-neutral-50 p-5"
        maxLength={255}
      />

      {/* content */}
      <textarea
        name="content"
        placeholder="Content"
        className="flex w-full flex-grow resize-none rounded-xl bg-neutral-50 p-5"
      />

      {/* submit and publish check */}
      <div className="flex items-center gap-5 self-start">
        {/* submit */}
        <button
          type="submit"
          className="rounded-full bg-red-600 px-5 py-3 font-bold"
        >
          Create Post
        </button>

        {/* published */}
        <div className="flex items-center gap-1">
          <input
            className="size-5 cursor-pointer"
            type="checkbox"
            name="published"
            id="published"
          />
          <label className="cursor-pointer" htmlFor="published">
            Publish
          </label>
        </div>
      </div>
    </form>
  );
}
