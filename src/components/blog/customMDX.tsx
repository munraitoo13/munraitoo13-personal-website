// components/mdx-remote.js
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
