import React, { useState } from "react";
import { useAddPostMutation } from "../../app/services/posts";

const AddPost = () => {
  const [post, setPost] = useState({ title: "", description: "" });
  const [addPost, { isLoading, isError }] = useAddPostMutation();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost(post);
    setPost({ title: "", description: "" });
  };

  return (
    <div>
      {isError && (
        <>
          <h4>There error occurs</h4>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={post.title || ""}
          onChange={handleTextChange}
        />
        <textarea
          name="description"
          value={post.description || ""}
          onChange={handleTextChange}
        ></textarea>

        <button type="submit" disabled={isLoading}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddPost;
