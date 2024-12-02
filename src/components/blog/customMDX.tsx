// components/mdx-remote.js
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  img: (props: any) => <img {...props} className="w-[48rem] rounded-lg" />,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
