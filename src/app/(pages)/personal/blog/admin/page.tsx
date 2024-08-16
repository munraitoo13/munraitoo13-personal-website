"use client";
import Header from "@/app/components/Header";
import TextareaAutosize from "react-textarea-autosize";
import { prisma } from "@/app/lib/prisma";
import { useState } from "react";

export default async function Page() {
  const [formData, setFormData] = useState({
    posted: false,
    lang: "",
    cathegory: "",
    title: "",
    desc: "",
    post: "",
  });

  const handleChange = (e: any) => {
    const { id, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await fetch("/api/new-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const languages = ["English", "French", "German", "Italian", "Portuguese"];
  const users = await prisma.user.findMany({
    select: { name: true, id: true },
  });

  return (
    <>
      <Header
        cathegory="Blog"
        pageTitle="Administration Page"
        pageDescription="Page for administrating blog posts."
      />

      <form
        method="post"
        className="flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <select
          className="rounded-xl p-5"
          id="language"
          onChange={handleChange}
        >
          {languages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>

        <select className="rounded-xl p-5" id="author" onChange={handleChange}>
          {users.map((user: any) => (
            <option key={user.id}>{user.name}</option>
          ))}
        </select>

        <TextareaAutosize
          onChange={handleChange}
          className="resize-none rounded-xl p-5"
          id="title"
          placeholder="Title"
        />

        <TextareaAutosize
          onChange={handleChange}
          className="resize-none rounded-xl p-5"
          id="description"
          placeholder="Description"
        />

        <TextareaAutosize
          onChange={handleChange}
          className="resize-none rounded-xl p-5"
          id="content"
          placeholder="Content"
        />

        <div className="ml-5 flex items-center gap-3">
          <input onChange={handleChange} type="checkbox" id="published" />
          <label htmlFor="published">Published</label>
        </div>

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
