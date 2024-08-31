import { sendMail } from "@/actions/actions";

export default function ContactForm() {
  return (
    <form action={sendMail} className="flex flex-col gap-3">
      <input
        required
        type="text"
        id="name"
        name="name"
        className="rounded-xl bg-neutral-900/25 p-5"
        placeholder="Name"
        maxLength={64}
      />

      <input
        required
        type="email"
        id="email"
        name="email"
        className="rounded-xl bg-neutral-900/25 p-5"
        placeholder="Email"
        maxLength={255}
      />

      <input
        required
        type="text"
        id="subject"
        name="subject"
        className="rounded-xl bg-neutral-900/25 p-5"
        placeholder="Subject"
        maxLength={64}
      />

      <textarea
        required
        id="message"
        name="message"
        className="h-48 resize-none rounded-xl bg-neutral-900/25 p-5"
        placeholder="Message"
      />

      <button
        type="submit"
        className="w-fit rounded-full bg-red-600 px-5 py-3 font-bold text-white"
      >
        Send
      </button>
    </form>
  );
}
