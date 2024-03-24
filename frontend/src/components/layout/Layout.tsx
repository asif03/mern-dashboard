import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Sidebar from "../sidebar";
import { useAuthContext } from "../../contexts/AuthContext";

const Layout = () => {
  const { user, loggedIn, checkLoginState } = useAuthContext();

  useEffect(() => {
    (async () => {
      if (loggedIn === true) {
        try {
          // Get posts from server
          console.log("login success");
        } catch (err) {
          console.error(err);
        }
      }
    })();
  }, [loggedIn]);

  return (
    <>
      <div className="flex h-screen w-full flex-row bg-light-secondary dark:bg-dark-secondary">
        <aside className="hidden h-screen w-0 flex-col justify-between bg-light-primary dark:bg-dark-primary sm:flex sm:w-20 lg:flex lg:w-[340px]">
          <Sidebar />
        </aside>
        <section className="w-full">
          <header className="relative flex h-20 w-full items-center justify-between border-l-1 border-[#F4F4F4] bg-light-primary dark:border-[#272B30] dark:bg-dark-primary">
            <h4>{user?.name}</h4>
            <br />
            <p>{user?.email}</p>
            <Navbar />
          </header>
          <main>
            <Outlet />
          </main>
        </section>
      </div>
    </>
  );
};

export default Layout;
