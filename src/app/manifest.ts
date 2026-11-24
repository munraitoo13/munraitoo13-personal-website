import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Augusto Mendes — munraitoo13.dev",
    short_name: "munraitoo13",
    description:
      "Back-End & Full-Stack Software Engineer — portfolio, curated projects, experience, and technical blog.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d0f",
    theme_color: "#c42828",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
