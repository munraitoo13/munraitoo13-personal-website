const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "New Post",
    href: "/admin/new-post",
  },
  {
    name: "Manage Posts",
    href: "/admin/manage-posts",
  },
];

export default function Admin() {
  return (
    <>
      {/* title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p>Please note that some functions may not work properly!</p>
      </div>

      {/* content */}
      <div className="flex flex-col gap-5">
        {/* shortcuts */}
        <div className="flex flex-col items-center justify-center gap-5 rounded-xl bg-neutral-50 p-5">
          <h3 className="text-xl font-bold">Shortcuts</h3>

          {/* links */}
          <div className="flex gap-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover: rounded-full bg-neutral-50 px-5 py-3 hover:bg-red-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* analytics */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-neutral-50 p-5">
          <h3 className="text-xl font-bold">Analytics</h3>
          <p>Coming soon</p>
        </div>
      </div>
    </>
  );
}
