import { FunctionComponent } from "react";
import Box from "../box";
import Link from "next/link";
import { GoHomeFill, GoSearch } from "react-icons/go";
import Library from "../library";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="flex flex-col gap-y-2 col-span-2 row-span-5 ml-2 h-full bg-slate-500">
      {/* <Box>
        <Link
          href={"/"}
          className={`flex flex-row h-auto items-center w-full gap-x-4 text-md text-white py-3 ml-6`}
        >
          <GoHomeFill size={28} />
          <p className="truncate w-full font-bold text-sm ">Home</p>
        </Link>
        <Link
          href={"/"}
          className={`flex flex-row h-auto items-center w-full gap-x-4 text-md text-white py-3 ml-6`}
        >
          <GoSearch size={28} />
          <p className="truncate w-full font-bold text-sm text-gray-400">
            Search
          </p>
        </Link>
      </Box> */}

      <Library />
    </div>
  );
};

export default Sidebar;
