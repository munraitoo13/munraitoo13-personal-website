"use client";
import Header from "@/app/(pages)/_components/Header";
import { useState } from "react";

export default function Page() {
  const [posted, setPosted] = useState(false);
  const [lang, setLang] = useState("");
  const [cathegory, setCathegory] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [post, setPost] = useState("");

  const handlePosted = (e: any) => {
    setPosted(e.target.checked);
  };
  const handleLang = (e: any) => {
    setLang(e.target.value);
  };
  const handleCathegory = (e: any) => {
    setCathegory(e.target.value);
  };
  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e: any) => {
    setDesc(e.target.value);
  };
  const handlePost = (e: any) => {
    setPost(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e?.preventDefault();

    try {
      fetch("/api/new-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          posted,
          lang,
          cathegory,
          title,
          desc,
          post,
        }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header
        pageTitle="New Post"
        pageDescription="Create a new post"
        cathegory="Admin"
      />

      <form
        method="post"
        className="flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        {/* posted input boolean */}
        <div className="flex items-center gap-3">
          <input onChange={handlePosted} type="checkbox" id="posted" />
          <label htmlFor="posted">Posted</label>
        </div>

        {/* language */}
        <select
          className="rounded-xl p-5"
          name="lang"
          id="lang"
          onChange={handleLang}
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Italian</option>
          <option>Portuguese</option>
        </select>

        {/* cathegory */}
        <input
          onChange={handleCathegory}
          className="rounded-xl p-5"
          type="text"
          name="cathegory"
          id="cathegory"
          placeholder="Cathegory"
        />

        {/* title */}
        <input
          onChange={handleTitle}
          className="rounded-xl p-5"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />

        {/* description */}
        <textarea
          onChange={handleDesc}
          className="rounded-xl p-5"
          name="desc"
          id="desc"
          placeholder="Description"
        />

        {/* post content */}
        <textarea
          onChange={handlePost}
          className="rounded-xl p-5"
          name="post"
          id="post"
          placeholder="Post"
        />

        {/* submit button */}
        <button
          className="w-fit self-center rounded-full bg-red-600 px-5 py-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
