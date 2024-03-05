import { FunctionComponent, HTMLAttributes } from "react";
import { cn } from "../libs/utils";

type BoxProps = HTMLAttributes<HTMLDivElement>;

const Box: FunctionComponent<BoxProps> = ({ children, className }) => {
  return (
    <div className={cn("bg-neutral-900 rounded-lg  w-full ", className)}>
      {children}
    </div>
  );
};

export default Box;
