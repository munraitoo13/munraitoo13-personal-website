/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkSlug from "remark-slug";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSlug],
    rehypePlugins: [],
  },
});
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
