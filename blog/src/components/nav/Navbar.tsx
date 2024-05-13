import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import Logo from "../Logo";
import { Switch } from "../ui/switch";
import { useEffect, useState } from "react";
import { setTheme } from "@/features/theme/themeSlice";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [themeData, setThemeData] = useState({
    theme: localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme")).theme
      : "light",
    toggle: localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme")).toggle
      : false,
  });

  //console.log(themeData);
  //console.log(localStorage.getItem("theme"));

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleChange = () => {
    setThemeData((prev) => ({ ...prev, toggle: !prev.toggle }));
  };

  useEffect(() => {
    if (themeData.toggle) {
      dispatch(setTheme({ theme: "dark", toggle: themeData.toggle }));
    } else {
      dispatch(setTheme({ theme: "light", toggle: themeData.toggle }));
    }
  }, [themeData]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="w-full container h-24 flex justify-between items-center font-sans text-slate-700 dark:text-slate-100">
      <Logo />
      <ul className="flex gap-4">
        <li className="inline-block">
          <NavLink
            to="/"
            // className={({ isActive }) => (isActive ? "active" : "")}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="inline-block">
          <NavLink
            to="/blog"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Blog
          </NavLink>
        </li>
        <li className="inline-block">
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        {userInfo ? (
          <>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/signin" className="text-gray-950">
            <FaRegUserCircle className="w-6 h-6" />
          </Link>
        )}
        <Switch
          checked={themeData.toggle}
          onCheckedChange={handleToggleChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
