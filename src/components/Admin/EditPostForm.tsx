import { prisma } from "@/lib/prisma";
import { updatePost } from "@/actions/actions";

const languages = [
  "Portuguese",
  "English",
  "French",
  "Spanish",
  "Italian",
  "German",
  "Japanese",
];

export default async function EditPostForm({ slug }: { slug: string }) {
  const allTags = await prisma.tag.findMany();
  const post = await prisma.post.findUnique({
    where: {
      id: slug,
    },
    include: {
      tags: true,
    },
  });

  const { title, language, tags, description, content, published, id } = post!;

  return (
    <form
      className="flex h-full w-full flex-col items-center justify-center gap-3"
      action={updatePost}
    >
      {/* id */}
      <input
        className="rounded-xl bg-neutral-50 px-5 py-3 dark:bg-neutral-900/25"
        type="hidden"
        name="id"
        value={id}
      />

      {/* title */}
      <input
        name="title"
        placeholder="Title"
        className="w-full resize-none rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        maxLength={64}
        defaultValue={title}
      />

      {/* language and tags */}
      <div className="flex w-full gap-3">
        {/* language */}
        <select
          name="language"
          className="cursor-pointer rounded-xl bg-neutral-50 px-5 dark:bg-neutral-900/25"
          defaultValue={language}
        >
          {languages.map((language) => (
            <option
              className="bg-white dark:bg-neutral-950"
              key={language}
              value={language}
            >
              {language}
            </option>
          ))}
        </select>

        {/* tags */}
        <select
          name="tags"
          className="h-16 w-full cursor-pointer rounded-xl bg-neutral-50 px-5 dark:bg-neutral-900/25"
          multiple
          defaultValue={tags.map((tag) => tag.id)}
        >
          {allTags.map((tag) => (
            <option
              className="rounded-xl px-5 py-3"
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
        defaultValue={description}
      />

      {/* content */}
      <textarea
        name="content"
        placeholder="Content"
        className="flex w-full flex-grow resize-none rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        defaultValue={content}
      />

      {/* submit and published check */}
      <div className="flex items-center gap-5 self-start">
        {/* submit */}
        <button
          type="submit"
          className="rounded-full bg-red-600 px-5 py-3 text-white"
        >
          Update Post
        </button>

        {/* published */}
        <div className="flex items-center gap-1">
          <input
            className="size-5 cursor-pointer"
            type="checkbox"
            name="published"
            id="published"
            defaultChecked={published}
          />
          <label className="cursor-pointer" htmlFor="published">
            Published
          </label>
        </div>
      </div>
    </form>
  );
}
