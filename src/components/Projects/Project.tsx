export default function Project() {
  return (
    <div className="flex w-full flex-col items-center p-5">
      {/* project */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col gap-5">
          {/* project repo name */}
          <p className="font-bold text-red-600">repository-name</p>

          {/* project function */}
          <h2 className="text-3xl font-bold">Project function</h2>

          {/* project description */}
          <p className="opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultricies, mi vitae scelerisque luctus, eros orci accumsan libero,
            nec fermentum purus mi vel sapien. Nulla facilisi. Nullam in nunc
            tincidunt, ultricies nunc sit amet, vestibulum justo.
          </p>
        </div>

        <div className="h-96 w-full rounded-xl bg-neutral-900">
          <img
            src=""
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
