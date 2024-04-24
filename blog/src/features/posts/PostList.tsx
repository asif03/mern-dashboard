import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../app/services/posts";

const PostList = () => {
  const { data, error } = useGetPostsQuery();

  return error ? (
    <>there was an error</>
  ) : !data ? (
    <>loading</>
  ) : (
    <>
      <ul>
        {data.map((post) => (
          <li key={post._id}>
            <button>{post.title}</button>
            <Link to={post._id}>More</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
