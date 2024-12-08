import { useState } from "react";
import { toast } from "react-toastify";

export function useTagSelection(tags: Tags[]) {
  // selected tags state
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // handle tag click
  const handleTagClick = (name: string) => {
    if (selectedTags.includes(name)) {
      setSelectedTags((prevSelectedTags) =>
        prevSelectedTags.filter((tag) => tag !== name),
      );
    } else {
      setSelectedTags((prevSelectedTags) => [...prevSelectedTags, name]);
    }
  };

  // tag color
  const tagColor = (name: string) =>
    selectedTags.includes(name) ? " " : "bg-neutral-100";

  // handle tag input change
  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // clear whitespace and convert to lowercase
      const tag = e.currentTarget.value.trim().toLowerCase();

      if (tag) {
        // check if tag is already added
        if (!selectedTags.some((t) => t === tag)) {
          setSelectedTags((prev) => [...prev, tag]);
        } else {
          toast.error("Tag already added");
        }

        // check if tag is already in tags (list of tags)
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
