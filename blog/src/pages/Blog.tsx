import { Link, Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Link to="new-post">+ Create Post</Link>
      <Outlet />
    </div>
  );
};

export default Blog;
