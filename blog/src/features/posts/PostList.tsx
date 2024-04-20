import { postsApi } from "../../app/services/posts";

const PostList = () => {
  const { data, error } = postsApi.endpoints.getPosts.useQuery();

  console.log(data);

  return <div>PostList</div>;
};

export default PostList;
