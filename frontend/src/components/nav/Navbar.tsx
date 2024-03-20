import { useState } from "react";
import NavigationDrawer from "./NavigationDrawer";
import { FaRegQuestionCircle } from "react-icons/fa";
import ToggleSwitch from "../ui/ToggleSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row p-2">
      <button
        onClick={() => setIsOpen(true)}
        className="block sm:hidden lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div className="block sm:hidden lg:hidden">
        <NavigationDrawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="m-5 flex flex-col gap-3 border-t-1 border-[#F4F4F4] pt-4 dark:border-[#272B30] ">
            <div className="flex flex-row items-center justify-between text-sm font-semibold">
              <span className="flex items-center text-[#6F767E]">
                <FaRegQuestionCircle /> Help & getting started
              </span>
              <span className="rounded-lg bg-[#CABDFF] p-1 text-white">
                510
              </span>
            </div>
            <ToggleSwitch />
          </div>
        </NavigationDrawer>
      </div>
      <div>Iqbal</div>
    </div>
  );
};

export default Navbar;
