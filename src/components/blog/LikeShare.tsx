"use client";

import { IconThumbUpFilled, IconGhostFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { likePost } from "@/actions/likePost";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

export function LikeShare({ likes, id }: LikesShare) {
  const [localLikes, setLocalLikes] = useState(likes);
  const t = useTranslations("Blog");

  const MotionThumb = motion.create(IconThumbUpFilled);
  const MotionShare = motion.create(IconGhostFilled);

  const handleLike = async () => {
    setLocalLikes(localLikes + 1);
    await likePost(id);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Check out this post!",
        text: "I found this post and I think you might like it.",
        url: window.location.href,
      });
    } else {
      toast.error("Your browser does not support sharing.");
    }
  };

  return (
    <section className="mt-20 flex flex-col items-center gap-5">
      {/* text */}
      <span>{t("likeAndShare")}</span>

      <div className="flex items-center gap-5">
        {/* like */}
        <div className="flex items-center gap-3">
          <MotionThumb
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="box-content cursor-pointer rounded-full border-none bg-red-500 p-2 outline-none"
            color="white"
            onClick={handleLike}
          />
          <span className="select-none">
            {localLikes} {t("likes")}
          </span>
        </div>

        {/* share */}
        <div className="flex items-center gap-3">
          <MotionShare
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="box-content cursor-pointer rounded-full border-none bg-red-500 p-2 outline-none"
            color="white"
            onClick={handleShare}
          />
          <span className="select-none">{t("share")}</span>
        </div>
      </div>
    </section>
  );
}
