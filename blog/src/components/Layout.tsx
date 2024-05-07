import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="w-full h-screen ">
      <header className="h-24 bg-background dark:bg-background">
        <Header />
      </header>
      <main className="bg-foreground dark:bg-foreground h-[calc(100vh-6rem)]">
        <div className="w-full h-full flex justify-center items-center">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
