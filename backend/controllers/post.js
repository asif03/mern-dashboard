import Post from "../models/postSchema";

export const getPosts = (req, res) => {};

export const createPost = async (req, res) => {
  const { title, description, imageFile, tags, creatorId } = req.body;

  const newPost = new Post({ title, description, imageFile, creatorId, tags });

  try {
    await newPost.save();

    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const getPost = (req, res) => {};

export const updatePost = (req, res) => {};

export const deletePost = (req, res) => {};

export const likePost = (req, res) => {};
