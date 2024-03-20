import ToggleSwitch from "../ui/ToggleSwitch";
import { FaRegQuestionCircle } from "react-icons/fa";
import Logo from "../Logo";
import MenuItems from "./MenuItems";
import { MENU } from "./menu";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-10 p-6">
        <Logo />
        <MenuItems menuItems={MENU} />
      </div>
      <div className="m-5 flex flex-col gap-3 border-t-1 border-[#F4F4F4] pt-4 dark:border-[#272B30] ">
        <div className="hidden items-center justify-between text-sm font-semibold lg:flex lg:flex-row">
          <span className="flex items-center text-[#6F767E]">
            <FaRegQuestionCircle /> Help & getting started
          </span>
          <span className="rounded-lg bg-[#CABDFF] p-1 text-white">510</span>
        </div>
        <ToggleSwitch />
      </div>
    </>
  );
};

export default Sidebar;
