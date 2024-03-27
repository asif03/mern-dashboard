import { FiSettings } from "react-icons/fi";
import { BiX } from "react-icons/bi";
import { useState } from "react";
import ToggleSwitchAuth from "./ui/ToggleSwitchAuth";

const SettingsAuth = () => {
  const [closeSetting, setCloseSetting] = useState(false);
  const handleCloseSettings = () => {
    setCloseSetting(!closeSetting);
  };

  return (
    <div
      className={`absolute inset-y-1/3 right-0 h-48 rounded-s-lg bg-light-primary dark:bg-dark-primary ${
        closeSetting ? "w-80" : "w-0"
      }`}
      style={{ boxShadow: "0px 0px 5px 0px rgba(154, 154, 154, 0.54)" }}
    >
      <button
        className="relative inset-y-1/4 -left-10 flex h-10 w-10 items-center justify-center rounded-s-lg bg-light-primary dark:bg-dark-primary"
        style={{ boxShadow: "0px 0px 5px 0px rgba(154, 154, 154, 0.54)" }}
        onClick={handleCloseSettings}
      >
        <FiSettings className="text-light-primary dark:text-dark-primary" />
      </button>
      <div
        className={
          closeSetting ? `absolute left-0 top-0 h-auto w-full ` : `hidden`
        }
      >
        <div className="flex w-full flex-col items-center gap-3">
          <div className="flex w-full justify-end">
            <button className="p-3" onClick={handleCloseSettings}>
              <BiX className="h-7 w-7 text-light-primary dark:text-dark-primary" />
            </button>
          </div>
          <div>
            <ToggleSwitchAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsAuth;
