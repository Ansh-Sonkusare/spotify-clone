import { FunctionComponent } from "react";

interface PlayerProps {}

const Player: FunctionComponent<PlayerProps> = () => {
  return (
    <div className=" bg-blue-100 w-full row-span-1 bottom-0 relative"></div>
  );
};

export default Player;
