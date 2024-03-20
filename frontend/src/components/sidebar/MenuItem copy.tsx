import { FC } from "react";
import { IconType } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from "react-router-dom";

interface Menu {
  url: string;
  title: string;
  Icon: IconType;
  subMenuSts: boolean;
  onClick?: React.MouseEventHandler;
}

const MenuItem: FC<Menu> = ({ url, title, Icon, subMenuSts, onClick }) => {
  return (
    <>
      <NavLink
        to={url}
        className={({ isActive }) =>
          `${isActive ? "bg-[#EFEFEF] text-[#444444] dark:bg-[#272B30] dark:text-[#FCFCFC]" : "text-[#6F767E]"} flex h-10 w-full items-center justify-between gap-1 rounded-full px-2 text-xs font-semibold`
        }
        onClick={onClick}
      >
        {({ isActive }) =>
          isActive ? (
            <>
              <div className="flex flex-row items-center justify-center gap-1 sm:justify-center lg:justify-start">
                <Icon className="h-5 w-5" />
                <span className="hidden text-sm lg:block">{title}</span>
              </div>
              {subMenuSts && (
                <span className="hidden lg:block">
                  <IoIosArrowUp className="h-4 w-4" />
                </span>
              )}
            </>
          ) : (
            <>
              <div className="flex flex-row items-center justify-start gap-1">
                <Icon className="h-5 w-5" />
                <span className="text-sm">{title}</span>
              </div>
              {subMenuSts && (
                <span>
                  <IoIosArrowDown className="h-4 w-4" />
                </span>
              )}
            </>
          )
        }
      </NavLink>
    </>
  );
};

export default MenuItem;
