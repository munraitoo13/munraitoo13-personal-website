import Header from "@/components/General/Header";

export default function NewPost() {
  return (
    <>
      <Header
        pageTitle="New Post"
        pageDescription="Create a new post"
        cathegory="Admin"
      />

      <form method="post" className="flex flex-col gap-3">
        {/* posted input boolean */}
        <div className="flex items-center gap-3">
          <input type="checkbox" id="posted" />
          <label htmlFor="posted">Posted</label>
        </div>

        {/* post date */}
        <input
          className="rounded-xl p-5"
          type="date"
          name="date"
          id="date"
          placeholder="Date"
        />

        {/* language */}
        <select className="rounded-xl p-5" name="lang" id="lang">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Italian</option>
          <option>Portuguese</option>
        </select>

        {/* cathegory */}
        <input
          className="rounded-xl p-5"
          type="text"
          name="cathegory"
          id="cathegory"
          placeholder="Cathegory"
        />

        {/* title */}
        <input
          className="rounded-xl p-5"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />

        {/* description */}
        <textarea
          className="rounded-xl p-5"
          name="desc"
          id="desc"
          placeholder="Description"
        />

        {/* post content */}
        <textarea
          className="rounded-xl p-5"
          name="content"
          id="content"
          placeholder="Content"
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
