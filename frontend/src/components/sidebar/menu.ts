import { HiHome } from "react-icons/hi";
import { FaUser, FaCog, FaPhone } from "react-icons/fa";

export const MENU = [
  {
    title: "Home",
    path: "/dashboard",
    Icon: HiHome,
  },
  {
    title: "Products",
    path: "/products",
    Icon: FaCog,
  },
  {
    title: "Customers",
    path: "/customers",
    Icon: FaUser,
    /*subMenu: [
      { title: "Customer1", path: "/customers/1", Icon: FaUser },
      { title: "Customer2", path: "/customers/2", Icon: FaUser },
    ],*/
  },
  {
    title: "Shop",
    path: "/shop",
    Icon: FaPhone,
  },
];
