import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { PiBell } from "react-icons/pi";
import Albums from "./components/ui/albums";
import { PlaylistCards } from "./components/ui/PlaylistCards";
export default function Home() {
  return (
    <div className="px-8 pt-4">
      <Albums className="" />

      <PlaylistCards className="pt-5  " />
      <PlaylistCards className="pt-5  " />
      <PlaylistCards className="pt-5  " />
      <PlaylistCards className="pt-5  " />
      <PlaylistCards className="pt-5  " />
      <PlaylistCards className="pt-5  " />
    </div>
  );
}
