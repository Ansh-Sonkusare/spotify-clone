// "use client";
import { FunctionComponent, HTMLAttributes } from "react";
import { cn } from "../libs/utils";
import { Playlist } from "./playlists";
import { Slider } from "@/app/components/ui/slider";
import { HiMiniSpeakerWave, HiOutlineQueueList } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { TbMicrophone2 } from "react-icons/tb";
import {
  MdSkipPrevious,
  MdShuffle,
  MdSkipNext,
  MdPlayArrow,
} from "react-icons/md";
import { ImLoop } from "react-icons/im";

type PlayerProps = HTMLAttributes<HTMLDivElement>;

const Player: FunctionComponent<PlayerProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-black w-full row-span-1 bottom-0 relative flex items-center justify-between  px-4",
        className
      )}
    >
      <Playlist />
      <div className="flex flex-col w-[50vw] items-center gap-4">
        <div className="flex items-center text-white gap-3">
          <MdShuffle size={20} className="text-green-600" />
          <MdSkipPrevious size={26} />
          <div className="rounded-full p-1 bg-white">
            <MdPlayArrow size={24} className=" text-black" />
          </div>
          <MdSkipNext size={26} />
          <ImLoop size={16} className="text-green-600" />
        </div>
        <div className="w-[38vw]">
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-full")}
          />
        </div>
      </div>

      <div className="flex gap-4 text-neutral-400">
        <TbMicrophone2 size={20} />
        <HiOutlineQueueList size={20} />
        <FaComputer size={20} />
        <HiMiniSpeakerWave size={20} />
        <Slider defaultValue={[50]} max={100} step={1} className={cn("w-32")} />
      </div>
    </div>
  );
};

export default Player;
