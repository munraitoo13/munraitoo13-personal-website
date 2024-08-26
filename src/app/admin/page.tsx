import NewPostForm from "@/components/Admin/NewPostForm";
import PostManager from "@/components/Admin/PostManager";

export default function Admin() {
  return (
    <main className="w-full p-10">
      <div className="flex h-full flex-col items-center gap-10 rounded-xl bg-neutral-950 p-5">
        {/* title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          <p>Some functions may not work properly!</p>
        </div>

        {/* analytics */}
        <div className="flex w-full items-center justify-center rounded-xl border border-red-600 p-5 text-neutral-600">
          analytics (future plan)
        </div>

        {/* post actions */}
        <div className="flex w-full flex-col gap-10">
          {/* new post */}
          <div className="flex w-full flex-col items-center justify-center gap-5">
            <h2 className="text-xl font-medium">New Post</h2>
            <NewPostForm />
          </div>

          {/* manage posts */}
          <div className="flex w-full flex-col items-center justify-center gap-5">
            <h2 className="text-xl font-medium">Manage Posts</h2>
            <PostManager />
          </div>
        </div>
      </div>
    </main>
  );
}
