"use client";
import TextareaAutosize from "react-textarea-autosize";

export default function Admin() {
  return (
    <main className="h-screen w-full p-10">
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

        {/* new post */}
        <div className="flex flex-col gap-3">
          <h2 className="text-center text-xl font-medium">New Post</h2>

          <form action="">
            <TextareaAutosize className="resize-none rounded-xl p-5" />
          </form>
        </div>
      </div>
    </main>
  );
}
