import { useState } from "react";
import { toast } from "react-toastify";

export function useTagSelection(tags: Tags[]) {
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

  const tagColor = (name: string) =>
    selectedTags.includes(name) ? "underline" : "";

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const tag = e.currentTarget.value.trim().toLowerCase();

      if (tag) {
        if (!selectedTags.some((t) => t === tag)) {
          setSelectedTags((prev) => [...prev, tag]);
        } else {
          toast.error("Tag already added");
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
