import { Switch } from "@headlessui/react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import { useState } from "react";

const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  const { theme, toggleTheme } = useThemeContext();

  return (
    <>
      <div className="hidden sm:hidden lg:block">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          onClick={toggleTheme}
          className={`${
            enabled ? "bg-[#111315]" : "bg-[#F4F4F4]"
          } inline-flex h-9 w-[300px] items-center justify-between rounded-full text-xs font-semibold`}
        >
          {enabled && (
            <span className="flex h-7 w-36 flex-row items-center justify-center gap-2 pl-3 text-[#6F767E]">
              <BsSun />
              <span>Light</span>
            </span>
          )}
          <span
            className={`${
              enabled
                ? "translate-x-[-5px] bg-[#111315]"
                : "translate-x-1 bg-[#F4F4F4]"
            } inline-block h-7 w-36 transform rounded-full shadow-xl transition`}
          >
            {enabled && (
              <span className="flex h-7 w-36 flex-row items-center justify-center gap-2 rounded-full bg-[#272B30] text-[#FCFCFC]">
                <BsMoon /> <span>Dark</span>
              </span>
            )}
            {!enabled && (
              <span className="flex h-7 w-36 flex-row items-center justify-center gap-2 rounded-full bg-[#FCFCFC] text-[#444444]">
                <BsSun />
                <span>Light</span>
              </span>
            )}
          </span>
          {!enabled && (
            <span className="flex h-7 w-36 flex-row items-center justify-center gap-2 pr-3 text-[#6F767E]">
              <BsMoon /> Dark
            </span>
          )}
        </Switch>
      </div>
      <div className="hidden h-11 w-12 rounded-[32px] bg-[#F4F4F4] dark:bg-[#111315] sm:flex sm:items-center sm:justify-center lg:hidden">
        <button
          onClick={toggleTheme}
          className="flex h-9 w-10 items-center justify-center rounded-full bg-[#FCFCFC] dark:bg-[#272B30]"
        >
          <BsSun
            className="block fill-[#444444] dark:hidden"
            width={20}
            height={20}
          />
          <BsMoon
            className="hidden fill-white dark:block"
            width={20}
            height={20}
          />
        </button>
      </div>
    </>
  );
};

export default ToggleSwitch;
