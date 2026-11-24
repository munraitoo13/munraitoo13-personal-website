import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const components = {};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      options={{
        ...props.options,
        mdxOptions: {
          ...props.options?.mdxOptions,
          remarkPlugins: [
            remarkGfm,
            ...(props.options?.mdxOptions?.remarkPlugins ?? []),
          ],
        },
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
