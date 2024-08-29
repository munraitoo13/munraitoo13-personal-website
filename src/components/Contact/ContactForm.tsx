export default function ContactForm() {
  return (
    <form action="#" className="flex flex-col gap-3">
      <input
        type="text"
        id="name"
        name="name"
        className="rounded-xl bg-neutral-900/25 p-5"
        placeholder="Name"
      />

      <input
        type="email"
        id="email"
        name="email"
        className="rounded-xl bg-neutral-900/25 p-5"
        placeholder="Email"
      />

      <textarea
        id="message"
        name="message"
        className="h-48 resize-none rounded-xl bg-neutral-900/25 p-5"
        placeholder="Message"
      />

      <button
        type="submit"
        className="w-fit rounded-full bg-red-600 px-5 py-3 font-bold"
      >
        Send
      </button>
    </form>
  );
}
