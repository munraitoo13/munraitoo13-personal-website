import { IconFile } from "@tabler/icons-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-neutral-999 via-neutral-999">
      {/* header */}
      <header className="py-36 w-screen flex flex-col items-center justify-center">
        <div className="w-1/2 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold mb-5">
            What's up!
            <br /> My name is <span className="text-red-600">Augusto</span>.
          </h1>

          <p className="text-lg">
            Also known as munraitoo13, I'm a passionate <b>Software Engineer</b>{" "}
            from Brazil!
          </p>
        </div>

        <div className="mt-10 flex font-semibold">
          <a
            href="/personal/contact"
            className="bg-red-600 px-5 py-3 rounded-2xl hover:opacity-75">
            "Fala comigo!"
          </a>

          <a
            href="#"
            target="_blank"
            className="px-5 py-3 rounded-2xl hover:opacity-75 flex items-center">
            <IconFile size={20} stroke={2} className="mr-2" />
            RESUME
          </a>
        </div>
      </header>
    </main>
  );
}
