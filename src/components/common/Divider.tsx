import { cn } from "@/lib/cn";
import React from "react";

type DividerProps = React.HTMLAttributes<HTMLHRElement> & {};

const Divider: React.FC<DividerProps> = ({ className, ...props }) => {
  return (
    <hr
      className={cn("my-4 border-t border-background-contrast", className)}
      {...props}
    />
  );
};

export default Divider;
