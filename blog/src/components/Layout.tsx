import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="w-full h-screen ">
      <header className="h-24 bg-background dark:bg-background">
        <Header />
      </header>
      <main className="bg-background dark:bg-background h-[calc(100vh-6rem)]">
        <div className="w-full h-full flex justify-center items-center">
          <Outlet />
        </div>
      </main>
      <footer className="w-full h-auto flex bg-foreground dark:bg-foreground min-h-14">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
