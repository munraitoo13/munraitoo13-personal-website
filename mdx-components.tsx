export const MDXHeadings = {
  h1: ({ children }: { children: any }) => <h1>{children}</h1>,
  h2: ({ children }: { children: any }) => <h2>{children}</h2>,
  h3: ({ children }: { children: any }) => <h3>{children}</h3>,
  h4: ({ children }: { children: any }) => <h4>{children}</h4>,
};

export function useMDXComponents(components: any) {
  return {
    ...MDXHeadings,
    ...components,
  };
}
