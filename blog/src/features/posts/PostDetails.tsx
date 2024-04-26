import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeletePostMutation,
  useGetPostQuery,
} from "../../app/services/posts";
import { useEffect } from "react";

const PostDetails = () => {
  const { postId } = useParams();

  const { data: post, isLoading, isError } = useGetPostQuery(postId);

  const [deletePost, { isSuccess }] = useDeletePostMutation();

  const handlePostDelete = () => {
    deletePost(postId);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/blog");
    }
  }, [isSuccess, navigate]);

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.description}</p>
      <Link to={`/blog/${post?._id}/edit`}>Edit</Link>
      <button onClick={handlePostDelete}>Delete</button>
    </div>
  );
};

export default PostDetails;
