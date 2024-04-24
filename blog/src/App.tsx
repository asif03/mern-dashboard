import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PostList from "./features/posts/PostList";
import AddPost from "./features/posts/AddPost";
import PostDetails from "./features/posts/PostDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="blog" element={<Blog />}>
            <Route index element={<PostList />} />
            <Route path="new-post" element={<AddPost />} />
            <Route path=":id" element={<PostDetails />} />
          </Route>

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
