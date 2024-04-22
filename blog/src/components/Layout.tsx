import { Outlet } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
