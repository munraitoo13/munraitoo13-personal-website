import {
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandVscode,
  IconBrandFigma,
  IconBrandNodejs,
  IconBrandMongodb,
} from "@tabler/icons-react";
import { MotionDiv } from "@/components/common/Motion";
import { useTranslations } from "next-intl";

export default function Stacks() {
  const t = useTranslations("HomePage");

  return (
    <MotionDiv
      className="flex flex-col items-center justify-center gap-1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
    >
      <div className="flex items-center gap-2">
        <IconBrandTypescript
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandReact
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandNextjs
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandTailwind
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandNodejs
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandMongodb
          size={24}
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandVscode
          size={24}
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandFigma
          size={24}
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
      </div>
    </MotionDiv>
  );
}
