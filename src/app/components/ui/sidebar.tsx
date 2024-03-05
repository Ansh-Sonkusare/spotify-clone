import { FunctionComponent } from "react";
import Box from "../box";
import Link from "next/link";
import { GoHomeFill, GoSearch } from "react-icons/go";
import Library from "../library";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className="grid grid-flow-row grid-rows-7 h-[91.2vh] ml-2 gap-y-2 py-2">
      <Box className="row-span-1 flex flex-col justify-center">
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
      </Box>

      <div className="h-[full] bg-neutral-900 rounded-lg row-span-6">
        <Library />
      </div>
    </div>
  );
};

export default Sidebar;
