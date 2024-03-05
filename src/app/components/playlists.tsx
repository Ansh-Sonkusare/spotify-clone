import { FunctionComponent } from "react";

interface PlaylistsProps {}

const Playlists: FunctionComponent<PlaylistsProps> = () => {
  const list = new Array(14).fill("");
  return (
    <div className="overflow-y-scroll  flex flex-col scrollbar-thumb-slate-300 scrollbar-thumb-rounded-lg scrollbar-thin h-full ">
      {list.map((idx) => (
        <Playlist key={idx} />
      ))}{" "}
    </div>
  );
};
interface PlaylistProps {}

export const Playlist: FunctionComponent<PlaylistProps> = () => {
  return (
    <div className="flex gap-x-2  items-center hover:bg-neutral-400/5 p-2 rounded-md  mr-1">
      <div className="w-12 h-12 rounded-sm bg-slate-300"></div>
      <div className="flex flex-col gap-y-1/3">
        <p className="text-white text-sm font-medium tracking-wide">
          Blossoms of Spring
        </p>
        <p className="text-gray-400 text-[13px] font-medium tracking-normal">
          Playlist • TeakMirror
        </p>
      </div>
    </div>
  );
};

export default Playlists;
