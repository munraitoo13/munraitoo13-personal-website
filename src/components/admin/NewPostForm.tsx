import { prisma } from "@/lib/prisma";
import { createPost } from "@/actions/createPost";

const languages = ["Portuguese", "English", "French", "German"];

export async function NewPostForm() {
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
        className="w-full resize-none rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        maxLength={64}
      />

      {/* language and tags */}
      <div className="flex w-full gap-3">
        {/* language */}
        <select
          name="language"
          className="cursor-pointer appearance-none rounded-xl bg-neutral-50 px-5 dark:bg-neutral-900/25"
        >
          {languages.map((language) => (
            <option className="bg-neutral-950" key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        {/* tags */}
        <select
          name="tags"
          className="h-16 w-full cursor-pointer rounded-xl bg-neutral-50 px-5 dark:bg-neutral-900/25"
          multiple
        >
          {tags.map((tag: Tag) => (
            <option
              className="rounded-xl px-5 py-2"
              key={tag.id}
              value={tag.id}
            >
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      {/* description */}
      <textarea
        name="description"
        placeholder="Description"
        className="h-24 w-full resize-none rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        maxLength={255}
      />

      {/* content */}
      <textarea
        name="content"
        placeholder="Content"
        className="flex w-full flex-grow resize-none rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
      />

      {/* submit and publish check */}
      <div className="flex items-center gap-5 self-start">
        {/* submit */}
        <button
          type="submit"
          className="rounded-full bg-red-600 px-5 py-3 text-white"
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
