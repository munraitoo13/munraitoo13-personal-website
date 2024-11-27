import { useEffect, useState } from "react";

export function useHeadings() {
  const [headings, setHeadings] = useState<Headings[]>([]);

  useEffect(() => {
    // find all headings
    const foundHeadings = document.querySelectorAll(
      ".mdx-content h2, .mdx-content h3",
    );

    // creates an array of objects with the heading details and map it to the state
    const headingDetails = Array.from(foundHeadings).map(
      ({ id, textContent, tagName }) => {
        return {
          id: id,
          text: textContent || "",
          headingLevel: tagName,
        };
      },
    );

    // set the state with the heading details
    setHeadings(headingDetails);
  }, []);

  return headings;
}
