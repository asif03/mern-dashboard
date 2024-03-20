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
    Icon: FaCog,
    subMenu: [
      { title: "Product1", path: "/products", Icon: FaCog },
      { title: "Product2", path: "/products", Icon: FaCog },
    ],
  },
  {
    title: "Customers",
    Icon: FaUser,
    subMenu: [
      { title: "Customer1", path: "/customer1", Icon: FaUser },
      { title: "Customer2", path: "/service2", Icon: FaUser },
    ],
  },
  {
    title: "Shop",
    path: "/shop",
    Icon: FaPhone,
  },
];
