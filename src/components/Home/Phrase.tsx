export default function Phrase() {
  return (
    <div className="w-full py-20 text-center">
      <blockquote className="flex flex-col space-y-1 text-2xl">
        <div className="flex justify-center">
          <span className="opacity-75">
            There are <span className="italic">three responses</span> to a
            product:
          </span>
        </div>

        <div>
          <span className="opacity-75">— yes, no, and </span>
          <span className="font-bold">WOW! </span>
          <span className="opacity-75">—</span>
        </div>

        <div>
          <span className="opacity-75">Wow is the one </span>
          <span className="rounded-xl bg-neutral-900 p-1 font-bold">
            I aim for.
          </span>
        </div>
      </blockquote>
    </div>
  );
}
