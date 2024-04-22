import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
