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
    <div className="sticky bottom-16 z-10 mt-16 flex w-full max-w-4xl justify-center px-4">
      <div className="flex items-center gap-2">
        <div className="bg-background/40 flex w-fit items-center gap-3 rounded-full px-5 py-2.5 text-sm text-zinc-100 shadow-lg ring-1 shadow-black/15 ring-white/10 backdrop-blur-xl">
          <button
            type="button"
            onClick={handleLike}
            className="group flex items-center gap-1 rounded-full px-1 py-0.5 text-zinc-100 transition-colors duration-300 hover:cursor-pointer"
            aria-label="Like post"
          >
            <IconThumbUpFilled className="group-hover:text-accent size-3.5 transition-colors duration-300" />
            <span className="text-zinc-100 tabular-nums">{localLikes}</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="group flex items-center gap-1 rounded-full px-1 py-0.5 text-zinc-100 transition-colors duration-300 hover:cursor-pointer"
            aria-label="Share post"
          >
            <IconShare className="group-hover:text-accent size-3.5 transition-colors duration-300" />
            <span className="text-zinc-100 tabular-nums">{localShares}</span>
          </button>
        </div>

        <div className="bg-background/40 flex w-fit items-center gap-1 rounded-full px-4 py-2.5 text-sm text-zinc-100 shadow-lg ring-1 shadow-black/15 ring-white/10 backdrop-blur-xl">
          <IconEyeFilled className="size-3.5" />
          <span className="tabular-nums">{views}</span>
        </div>
      </div>
    </div>
  );
}
