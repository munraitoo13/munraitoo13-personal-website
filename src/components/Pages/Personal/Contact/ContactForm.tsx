export default function ContactForm() {
  return (
    <form action="#" method="POST" className="flex flex-col gap-3">
      <div className="flex flex-col">
        <input
          type="text"
          id="name"
          name="name"
          className="rounded-xl bg-neutral-900 p-3"
          placeholder="Name"
        />
      </div>

      <div className="flex flex-col">
        <input
          type="email"
          id="email"
          name="email"
          className="rounded-xl bg-neutral-900 p-3"
          placeholder="Email"
        />
      </div>

      <div className="flex flex-col">
        <textarea
          id="message"
          name="message"
          className="h-48 resize-none rounded-xl bg-neutral-900 p-3"
          placeholder="Message"
        />
      </div>

      <button
        type="submit"
        className="w-fit self-end rounded-full bg-red-600 px-10 py-3"
      >
        Send
      </button>
    </form>
  );
}
