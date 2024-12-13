import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "munraitoo13's website",
    short_name: "munraitoo13",
    description: "munraitoo13's personal website and blog",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
