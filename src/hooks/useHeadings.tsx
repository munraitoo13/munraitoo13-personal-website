import { useEffect, useState } from "react";

export function useHeadings() {
  const [headings, setHeadings] = useState<Headings[]>([]);

  useEffect(() => {
    const foundHeadings = document.querySelectorAll(
      ".mdx-content h2, .mdx-content h3",
    );

    const headingDetails = Array.from(foundHeadings).map(
      ({ id, textContent, tagName }) => {
        return {
          id: id,
          text: textContent || "",
          headingLevel: tagName,
        };
      },
    );

    setHeadings(headingDetails);
  }, []);

  return headings;
}
