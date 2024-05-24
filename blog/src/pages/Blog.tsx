import PostList from "@/features/posts/PostList";
import { Link, Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div className="w-full container">
      <div className="flex justify-between items-center">
        <h2 className="py-4 text-primary dark:text-primary font-bold text-2xl">
          My Posts
        </h2>
        <Link
          to="new-post"
          className="text-primary dark:text-primary bg-blue-500 rounded-lg p-1"
        >
          + Create Post
        </Link>
      </div>

      <PostList />
    </div>
  );
};

export default Blog;
