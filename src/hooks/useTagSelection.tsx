import { useState } from "react";

export function useTagSelection() {
  // selected tags state
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // handle tag click
  const handleTagClick = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags((prevSelectedTags) =>
        prevSelectedTags.filter((tag) => tag !== tagId),
      );
    } else {
      setSelectedTags((prevSelectedTags) => [...prevSelectedTags, tagId]);
    }
  };

  // tag color
  const tagColor = (tagId: string) =>
    selectedTags.includes(tagId)
      ? "bg-red-600"
      : "bg-neutral-50/50 dark:bg-neutral-900/25";

  return { selectedTags, handleTagClick, tagColor, setSelectedTags };
}
