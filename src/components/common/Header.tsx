import { MotionH1, MotionP } from "@/components/common/Motion";

export function Header({ pageTitle, pageDescription, category }: Header) {
  return (
    <header className="flex w-full flex-col justify-center gap-5 pt-48">
      <div>
        {/* red above title */}
        <MotionP
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-lg font-bold text-red-600"
        >
          {category}
        </MotionP>

        {/* title */}
        <MotionH1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}
          className="text-6xl font-extrabold text-neutral-900 dark:text-white"
        >
          {pageTitle}
        </MotionH1>
      </div>

      {/* description */}
      <MotionP
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
        className="text-lg"
      >
        {pageDescription}
      </MotionP>
    </header>
  );
}
