import TablerIcon from "@tabler/icons-react";

export default function Card({ icon }: { icon: string }) {
  return (
    <div className="border border-neutral-900 rounded-xl p-3 w-1/3 text-white">
      <div className="flex items-center ">
        <TablerIcon.Icon123
          size={24}
          stroke={1.25}
          className="rounded-full bg-red-600 p-3 box-content min-w-fit z-10"
        />

        <h3 className="bg-neutral-900 py-2 pl-10 rounded-r-full font-bold w-full relative right-5">
          Competent
        </h3>
      </div>

      <p className="p-3 opacity-75">
        A must-have trait that significantly enhances the overall working
        experience.
      </p>
    </div>
  );
}
