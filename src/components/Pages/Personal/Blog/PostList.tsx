import SinglePost from "./SinglePost";

const posts = [
  {
    id: 1,
    title: "Why I love coding",
    date: "2021-09-18",
    description: "Why I love coding? Because it's fun!",
    post: "Why I love coding? Because it's fun! And I love fun! Because of that I love coding.",
    language: "English",
    tags: ["css", "html", "js"],
  },
  {
    id: 2,
    title: "Second post",
    date: "2021-09-19",
    description: "This is the second post on this blog.",
    post: "This is the second post on this blog. It's a very good post.",
    language: "Português",
    tags: ["coding"],
  },
  {
    id: 3,
    title: "Third post",
    date: "2021-09-20",
    description: "This is the third post on this blog.",
    post: "This is the third post on this blog. It's a very good post.",
    language: "Deutsch",
    tags: ["css", "html"],
  },
];

export default function PostList() {
  return (
    <div className="flex flex-col gap-3">
      {posts.map((post) => {
        return (
          <SinglePost
            title={post.title}
            date={post.date}
            description={post.description}
            language={post.language}
            tags={post.tags}
          />
        );
      })}
    </div>
  );
}
