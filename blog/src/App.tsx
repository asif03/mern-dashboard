import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PostList from "./features/posts/PostList";
import AddPost from "./features/posts/AddPost";
import PostDetails from "./features/posts/PostDetails";
import EditPost from "./features/posts/EditPost";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { theme } = useSelector((state) => state.themeMode);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<Home />} />

          <Route path="blog" element={<Blog />}>
            <Route index element={<PostList />} />
            <Route path="new-post" element={<AddPost />} />
            <Route path=":postId" element={<PostDetails />} />
            <Route path=":postId/edit" element={<EditPost />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
