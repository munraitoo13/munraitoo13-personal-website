"use client";

import { likePost } from "@/actions/likePost";
import { sharePost } from "@/actions/sharePost";
import {
  IconEyeFilled,
  IconShare,
  IconThumbUpFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";

export function LikeShare({ likes, shares, views, id }: LikeShare) {
  const [localLikes, setLocalLikes] = useState(likes);
  const [localShares, setLocalShares] = useState(shares);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 5, duration: 1 } },
  };

  const item = {
    default: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  const t = useTranslations("Blog");

  const handleLike = async () => {
    setLocalLikes(localLikes + 1);
    await likePost(id);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: t("shareTitle"),
        text: t("shareText"),
        url: window.location.href,
      });

      setLocalShares(localShares + 1);
      await sharePost(id);
    } else {
      toast.error("Your browser does not support sharing.");
    }
  };

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="visible"
      className="fixed inset-x-0 bottom-20 mx-auto flex w-fit gap-10 rounded-xl border border-secondary/50 bg-background/75 px-5 py-3 backdrop-blur-xl"
    >
      {/* like */}
      <div className="flex items-center gap-3">
        <motion.div
          onClick={handleLike}
          variants={item}
          initial="default"
          whileHover="hover"
          whileTap="tap"
          className="cursor-pointer"
        >
          <IconThumbUpFilled />
        </motion.div>
        <span>{localLikes}</span>
      </div>

      {/* share */}
      <div className="flex items-center gap-3">
        <motion.div
          onClick={handleShare}
          variants={item}
          initial="default"
          whileHover="hover"
          whileTap="tap"
          className="cursor-pointer"
        >
          <IconShare />
        </motion.div>
        <span>{localShares}</span>
      </div>

      {/* views */}
      <div className="flex items-center gap-3">
        <motion.div
          variants={item}
          initial="default"
          whileHover="hover"
          whileTap="tap"
        >
          <IconEyeFilled />
        </motion.div>
        <span>{views}</span>
      </div>
    </motion.section>
  );
}
