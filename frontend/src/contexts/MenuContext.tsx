import { createContext, useContext, useState } from "react";

type activeMenu = boolean;

const MenuConext = createContext<activeMenu | undefined>(undefined);

export const MenuProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <MenuConext.Provider value={activeMenu}>{children}</MenuConext.Provider>
  );
};

export const useMenuContext = useContext(MenuConext);
