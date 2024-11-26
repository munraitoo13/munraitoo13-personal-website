"use client";

import { IconThumbUpFilled, IconEyeFilled } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { MotionDiv } from "@/components/common/Motion";
import { markdownVariants } from "@/animations/motionVariants";

export function LikesViews({ likes, views }: LikesViews) {
  const t = useTranslations("Blog");

  return (
    <MotionDiv
      variants={markdownVariants}
      initial="hidden"
      animate="visible"
      className="mb-5 flex items-center gap-3"
    >
      <div className="flex items-center gap-3">
        <IconThumbUpFilled />
        <span>
          {likes} {likes === 1 ? t("like") : t("likes")}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <IconEyeFilled />
        <span>
          {views} {views === 1 ? t("view") : t("views")}
        </span>
      </div>
    </MotionDiv>
  );
}
