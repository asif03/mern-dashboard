import { Switch } from "@headlessui/react";
import { useThemeContext } from "../../contexts/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import { useState } from "react";

const ToggleSwitchAuth = () => {
  const [enabled, setEnabled] = useState(false);

  const { theme, toggleTheme } = useThemeContext();

  return (
    <>
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
    </>
  );
};

export default ToggleSwitchAuth;
