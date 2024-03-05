import { FunctionComponent, HTMLAttributes } from "react";

type AlbumsProps = HTMLAttributes<HTMLDivElement>;

export const Albums: FunctionComponent<AlbumsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="text-white font-bold  text-3xl">Good Evening</h1>
      <div className="grid grid-flow-row gap-3 grid-cols-4 pt-2">
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </div>
    </div>
  );
};
interface AlbumProps {}

export const Album: FunctionComponent<AlbumProps> = () => {
  return (
    <div className="flex gap-x-2  items-center bg-white/5 hover:bg-white/15 transition duration-150 cursor-pointer rounded-md">
      <div className="w-16 h-16 rounded-sm bg-slate-300"></div>
      <div className="flex flex-col gap-y-1/3 ">
        <p className="text-white text-sm font-medium tracking-wide">
          Blossoms of Spring
        </p>
      </div>
    </div>
  );
};
export default Albums;
