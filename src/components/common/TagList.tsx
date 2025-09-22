import { cn } from "@/lib/cn";
import React from "react";

type Tag = {
  id: string;
  name: string;
};

type TagListProps = {
  tags: Tag[];
  handleTagClick: (tagName: string) => void;
  tagColor: (tagName: string) => string;
};

export const TagList: React.FC<TagListProps> = ({
  tags,
  handleTagClick,
  tagColor,
}) => {
  return (
    <div className="mx-auto space-x-2">
      {tags.map(({ id, name }) => (
        <span
          key={id}
          className={cn("cursor-pointer", tagColor(name))}
          onClick={() => handleTagClick(name)}
        >
          {name}
        </span>
      ))}
    </div>
  );
};
