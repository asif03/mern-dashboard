import { postsApi, useGetPostsQuery } from "../../app/services/posts";

const PostList = () => {
  const { data, error } = useGetPostsQuery();

  console.log(data);

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
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
