import { useState } from "react";
import {
  useGetPostQuery,
  useUpdatePostMutation,
} from "../../app/services/posts";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  const { data, isLoading, isSuccess, isError } = useGetPostQuery(postId);

  const [updatePost] = useUpdatePostMutation();

  const [post, setPost] = useState({
    _id: data?._id,
    title: data?.title,
    description: data?.description,
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(post);
    //setPost({ title: "", description: "" });
  };

  return (
    <div>
      <h1>Edit Post</h1>
      {isSuccess && (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={post?.title}
              name="title"
              onChange={handleTextChange}
            />
            <textarea
              name="description"
              onChange={handleTextChange}
              value={post?.description}
            ></textarea>

            <button type="submit" disabled={isLoading}>
              Update
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
