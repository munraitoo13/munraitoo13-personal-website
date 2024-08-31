import { prisma } from "@/lib/prisma";
import { deletePost } from "@/actions/actions";
import { IconTrash, IconPencil } from "@tabler/icons-react";
import formatDate from "@/lib/formatDate";

export default async function PostManager() {
  const posts = await prisma.post.findMany();
  const tags = await prisma.tag.findMany();

  return (
    <div className="flex w-full flex-col gap-5">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex w-full items-center justify-between gap-5 rounded-xl bg-neutral-900/25 p-10"
        >
          {/* post */}
          <div className="flex flex-col gap-3">
            {/* date, lang, published */}
            <div className="flex flex-col text-xs">
              {/* published */}
              <p
                className={`${post.published ? "text-green-600" : "text-red-600"}`}
              >
                {post.published ? "Published" : "Not published"}
              </p>

              {/* date */}
              <p>Created at: {formatDate(post.createdAt)}</p>

              {/* lang */}
              <p>Language: {post.language}</p>
            </div>

            {/* title and desc */}
            <div>
              {/* title */}
              <a
                href={`/personal/blog/posts/${post.id}`}
                className="text-xl font-bold text-white hover:text-red-600"
              >
                {post.title}
              </a>

              {/* description */}
              <p>{post.description}</p>
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-1">
              {tags.map((tag: any) => (
                <span
                  key={tag.name}
                  className="rounded-full bg-neutral-900/25 px-3 py-1"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* buttons */}
          <div className="ml-24 flex gap-5 font-bold text-white">
            {/* edit */}
            <a
              className="hover:text-red-600"
              href={`/admin/edit-post/${post.id}`}
              target="_blank"
            >
              <IconPencil stroke={1.25} />
            </a>

            {/* delete */}
            <form
              action={deletePost}
              className="cursor-pointer hover:text-red-600"
            >
              <input type="hidden" name="id" value={post.id} />
              <button type="submit">
                <IconTrash stroke={1.25} />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
