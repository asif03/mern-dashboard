import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="w-full h-screen bg-background">
      <Header />
      <main className="w-full h-auto container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
