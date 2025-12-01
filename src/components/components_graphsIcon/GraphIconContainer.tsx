import BoroughIcon from "./BoroughIcon";
import DirectorIcon from "./DirectorIcon";
import ShootingIcon from "./ShootingIcon";
import TypeIcon from "./TypeIcon";
import YearIcon from "./YearIcon";

export default function GraphIconContainer() {
  return (
    <div className="flex flex-wrap gap-y-[10px] justify-evenly">
      <ShootingIcon />
      <YearIcon />
      <TypeIcon />
      <DirectorIcon />
      <BoroughIcon />
    </div>
  );
}
