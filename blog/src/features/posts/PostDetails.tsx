import { Link, useParams } from "react-router-dom";
import { useGetPostQuery } from "../../app/services/posts";

const PostDetails = () => {
  const { postId } = useParams();

  const { data, isLoading, isError } = useGetPostQuery(postId);
  console.log(data);

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <Link to={`/blog/${data?._id}/edit`}>Edit</Link>
    </div>
  );
};

export default PostDetails;
