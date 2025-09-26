import { useState } from "react";
import { toast } from "react-toastify";
import { Tag } from "@/types/types";

export function useTagSelection(tags: Tag[]) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (name: string) => {
    if (selectedTags.includes(name)) {
      setSelectedTags((prevSelectedTags) =>
        prevSelectedTags.filter((tag) => tag !== name),
      );
    } else {
      setSelectedTags((prevSelectedTags) => [...prevSelectedTags, name]);
    }
  };

  const tagColor = (name: string): string =>
    selectedTags.includes(name) ? "text-accent" : "";

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const tag = e.currentTarget.value.trim();

      if (tag) {
        if (!selectedTags.includes(tag)) {
          setSelectedTags((prev) => [...prev, tag]);
        } else {
          toast.error("Tag already added", {
            autoClose: 5000,
          });
        }

        if (!tags.some((t) => t.name === tag)) {
          tags.push({ id: tag, name: tag });
        }
      }

      e.currentTarget.value = "";
    }
  };

  return {
    selectedTags,
    handleTagClick,
    tagColor,
    setSelectedTags,
    handleTagInput,
  };
}
