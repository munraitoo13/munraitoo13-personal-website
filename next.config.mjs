/** @type {import('next').NextConfig} */

import nextMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import remarkSlug from "remark-slug";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSlug],
    rehypePlugins: [],
  },
});

const withIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(withIntl(nextConfig));
