import mongoose from "mongoose";
import Post from "../models/postSchema.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
  return res.status(200).json({ message: "connection established" });
};

export const createPost = async (req, res) => {
  const { title, description } = req.body;

  const newPost = new Post({ title, description });

  try {
    await newPost.save();

    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;

  const { title, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { title, description, _id: id };

  await Post.findByIdAndUpdate(id, updatedPost, { new: true });

  return res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Post.findByIdAndDelete(id);

  res.status(200).json({ message: "Post deleted successfully." });
};

export const likePost = (req, res) => {};
