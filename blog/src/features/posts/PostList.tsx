import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../app/services/posts";
import Post from "./Post";

const PostList = () => {
  const { data, error } = useGetPostsQuery();

  return error ? (
    <>there was an error</>
  ) : !data ? (
    <>loading</>
  ) : (
    <>
      <ul className="flex flex-wrap justify-between">
        {data.map((post) => (
          <li key={post._id}>
            <Post
              id={id}
              imageUrl=""
              postTitle={post.title}
              authorImage=""
              authorName="Md. Asif Iqbal"
              publishDate="August 20, 2023"
              tags="technology"
            />
            <Link to={post._id}>More</Link>
          </li>
        ))}
        <li>
          <Post
            imageUrl=""
            postTitle="Asif Iqbal"
            authorImage=""
            authorName="Md. Asif Iqbal"
            publishDate="August 20, 2023"
            tags="technology"
          />
        </li>
        <li>
          <Post
            imageUrl=""
            postTitle="Asif Iqbal"
            authorImage=""
            authorName="Md. Asif Iqbal"
            publishDate="August 20, 2023"
            tags="technology"
          />
        </li>
        <li>
          <Post
            imageUrl=""
            postTitle="Asif Iqbal"
            authorImage=""
            authorName="Md. Asif Iqbal"
            publishDate="August 20, 2023"
            tags="technology"
          />
        </li>
        <li>
          <Post
            imageUrl=""
            postTitle="Asif Iqbal"
            authorImage=""
            authorName="Md. Asif Iqbal"
            publishDate="August 20, 2023"
            tags="technology"
          />
        </li>
        <li>
          <Post
            imageUrl=""
            postTitle="Asif Iqbal"
            authorImage=""
            authorName="Md. Asif Iqbal"
            publishDate="August 20, 2023"
            tags="technology"
          />
        </li>
      </ul>
    </>
  );
};

export default PostList;
