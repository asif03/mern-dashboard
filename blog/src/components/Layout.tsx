import { Outlet } from "react-router-dom";
import Header from "../../../../../xampp/htdocs/course-calender/containers/Header";
import Footer from "../../../../../xampp/htdocs/course-calender/containers/Footer";

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
