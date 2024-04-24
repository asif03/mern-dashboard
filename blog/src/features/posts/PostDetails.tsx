import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../../app/services/posts";

const PostDetails = () => {
  const { postId } = useParams();
  console.log(postId);

  const { data: post, isLoading, isError } = useGetPostQuery(postId);

  return <div>Asif</div>;
};

export default PostDetails;
