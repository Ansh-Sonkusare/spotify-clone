import { FunctionComponent } from "react";
import Player from "./player";

interface PlaylistsProps {}

const Playlists: FunctionComponent<PlaylistsProps> = () => {
  const list = new Array(10).fill("");
  return (
    <div className="overflow-y-auto h-full mx-2">
      {/* {list.map((idx) => (
        <Playlist key={idx} />
      ))} */}
      <div className="h-16 w-full bg-yellow-50 "></div>
      <div className="h-16 w-full bg-yellow-50 "></div>
      <div className="h-16 w-full bg-yellow-50 "></div>{" "}
      <div className="h-16 w-full bg-yellow-50 "></div>
      <div className="h-16 w-full bg-yellow-50 "></div>
      <div className="h-16 w-full bg-yellow-50 "></div>{" "}
      <div className="h-16 w-full bg-yellow-50 "></div>
      <div className="h-16 w-full bg-yellow-50 "></div>
      <div className="h-16 w-full bg-yellow-50 "></div>
    </div>
  );
};
interface PlaylistProps {}

const Playlist: FunctionComponent<PlaylistProps> = () => {
  return (
    <div className="flex gap-x-2 my-1 items-center ">
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
