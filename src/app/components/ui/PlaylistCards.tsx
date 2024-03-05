import { FunctionComponent, HTMLAttributes } from "react";

type PlaylistCards = HTMLAttributes<HTMLDivElement>;

export const PlaylistCards: FunctionComponent<PlaylistCards> = ({
  className,
}) => {
  return (
    <div className={className}>
      <h1 className="text-white font-bold pt-4 text-2xl">
        Made for TeakMirror
      </h1>
      <div className="grid grid-flow-row gap-x-7 gap-y-4 grid-cols-7 pt-2 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

interface CardProps {}

const Card: FunctionComponent<CardProps> = () => {
  return (
    <div className="flex  pb-5 px-4 pt-4 bg-neutral-400/5 hover:bg-white/5 transition duration-100 justify-center cursor-pointer flex-col rounded-lg items-center ">
      <div className="w-full aspect-square  bg-slate-700 rounded-lg "></div>
      <div className="flex w-full pt-3 flex-col">
        <h2 className="text-white text-sm font-semibold">Daily Mix 1</h2>
        <h2 className="text-white/55 text-xs font-normal tracking-wider leading-4 pt-2">
          Pritam, Mika Singh, A.R. Rahman and more
        </h2>
      </div>
    </div>
  );
};

export default PlaylistCards;
