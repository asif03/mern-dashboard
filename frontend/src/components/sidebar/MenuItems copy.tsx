import React, { FC, useState } from "react";
import MenuItem from "./MenuItem";
import { IconType } from "react-icons";

interface MenuItem {
  title: string;
  path?: string | undefined;
  Icon: IconType;
  subMenu?: MenuItem[];
  onClick?: React.MouseEventHandler;
}

interface MenuProps {
  menuItems: MenuItem[];
}

const MenuItems: FC<MenuProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderSubMenu = (subMenu: MenuItem[]) => {
    return (
      <ul className="ml-4 flex flex-col gap-2">
        {subMenu.map((item, index) => (
          <li key={index} className="inline-block w-full">
            <MenuItem
              url={item.path}
              title={item.title}
              Icon={item.Icon}
              subMenuSts={item.subMenu ? true : false}
            />
          </li>
        ))}
      </ul>
    );
  };

  const renderMenu = (menuItems: MenuItem[]) => {
    return menuItems.map((item, index) => (
      <li key={index} className="inline-block w-full">
        <MenuItem
          url={item.path}
          title={item.title}
          Icon={item.Icon}
          subMenuSts={item.subMenu ? true : false}
          onClick={toggleSubMenu}
        />
        {item.subMenu && isOpen && renderSubMenu(item.subMenu)}
      </li>
    ));
  };

  return <ul className="flex flex-col gap-2">{renderMenu(menuItems)}</ul>;
};

export default MenuItems;
