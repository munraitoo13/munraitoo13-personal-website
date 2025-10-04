"use client";

import { likePost } from "@/actions/likePost";
import { sharePost } from "@/actions/sharePost";
import {
  IconEyeFilled,
  IconShare,
  IconThumbUpFilled,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";

interface Interactions {
  id: string;
  likes: number;
  shares: number;
  views: number;
}

export function Interactions({ id, likes, shares, views }: Interactions) {
  const [localLikes, setLocalLikes] = useState(likes);
  const [localShares, setLocalShares] = useState(shares);

  const t = useTranslations("Blog");

  const handleLike = async () => {
    setLocalLikes(localLikes + 1);
    await likePost(id);
  };

  const handleShare = async () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success(t("shared"));
    setLocalShares(localShares + 1);
    await sharePost(id);
  };

  return (
    <div className="bg-background/75 sticky bottom-16 mx-auto mt-24 flex gap-12 rounded-xl px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <IconThumbUpFilled
          className="cursor-pointer hover:text-neutral-50 active:text-neutral-300"
          onClick={handleLike}
        />
        <span>{localLikes}</span>
      </div>

      <div className="flex items-center gap-2">
        <IconShare
          className="cursor-pointer hover:text-neutral-50 active:text-neutral-300"
          onClick={handleShare}
        />
        <span>{localShares}</span>
      </div>

      <div className="flex items-center gap-2">
        <IconEyeFilled />
        <span>{views}</span>
      </div>
    </div>
  );
}
