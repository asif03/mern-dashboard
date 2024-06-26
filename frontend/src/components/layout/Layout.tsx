import { Outlet } from "react-router-dom";
import Navbar from "../nav/Navbar";
import Sidebar from "../sidebar";

const Layout = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-row bg-light-secondary dark:bg-dark-secondary">
        <aside className="hidden h-screen w-0 flex-col justify-between bg-light-primary dark:bg-dark-primary sm:flex sm:w-20 lg:flex lg:w-[340px]">
          <Sidebar />
        </aside>
        <section className="w-full">
          <header className="relative flex h-20 w-full items-center border-l-1 border-[#F4F4F4] bg-light-primary dark:border-[#272B30] dark:bg-dark-primary">
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
