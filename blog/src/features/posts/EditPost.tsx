import { useGetPostQuery } from "../../app/services/posts";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  const { data, isLoading, isError } = useGetPostQuery(postId);
  console.log(data);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const { name, value } = e.target;
    //setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //await addPost(post);
    //setPost({ title: "", description: "" });
  };

  return (
    <div>
      <h1>Edit Post</h1>
      {isError && (
        <>
          <h4>There error occurs</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={handleTextChange} />
            <textarea name="description" onChange={handleTextChange}></textarea>

            <button type="submit" disabled={isLoading}>
              Save
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
