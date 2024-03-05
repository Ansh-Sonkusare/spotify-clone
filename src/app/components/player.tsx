import { FunctionComponent, HTMLAttributes } from "react";
import { cn } from "../libs/utils";
import { Playlist } from "./playlists";

type PlayerProps = HTMLAttributes<HTMLDivElement>;

const Player: FunctionComponent<PlayerProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-black w-full row-span-1 bottom-0 relative flex items-center justify-between px-4",
        className
      )}
    >
      <Playlist />
      <div className="flex"></div>
    </div>
  );
};

export default Player;
