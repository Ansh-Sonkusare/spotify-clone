import Link from "next/link";
import { FunctionComponent } from "react";
import { GoHome, GoSearch } from "react-icons/go";
import { BiLibrary, BiListUl, BiPlus } from "react-icons/bi";
import Playlists from "./playlists";

interface LibraryProps {}

const Library: FunctionComponent<LibraryProps> = () => {
  return (
    <div className="flex flex-col h-full rounded-lg  gap-y-1 ml-2">
      <div className="flex flex-row h-auto items-center justify-between w-full  text-md text-white py-3  px-2">
        <Link href="/" className="">
          <div className="flex flex-row items-center gap-x-3">
            <BiLibrary size={36} />
            <p className="truncate w-full font-bold text-md text-gray-400">
              Your Library
            </p>
          </div>
        </Link>
        <BiPlus size={24} className="text-gray-400" />
      </div>
      <div className="flex px-1">
        <div className="rounded-2xl text-white bg-zinc-800 px-3 py-1 mx-1 text-sm">
          Playlists
        </div>
        <div className="rounded-2xl text-white bg-zinc-800 px-3 py-1 mx-1 text-sm">
          Artists
        </div>
        <div className="rounded-2xl text-white bg-zinc-800 px-3 py-1 mx-1 text-sm">
          Albums
        </div>
      </div>
      <div className="flex flex-row h-auto items-center justify-between w-full  text-md text-white py-3 px-6">
        <GoSearch size={20} />

        <div className="flex text-gray-400 text-sm font-semibold items-center">
          Recents <BiListUl size={24} />
        </div>
      </div>
      <Playlists />
    </div>
  );
};

export default Library;
