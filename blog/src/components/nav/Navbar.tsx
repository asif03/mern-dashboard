import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import Logo from "../Logo";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="w-full container h-24 flex justify-between items-center font-sans">
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

      {userInfo ? (
        <>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/signin">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
