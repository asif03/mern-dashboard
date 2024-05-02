import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  likePost,
  updatePost,
} from "../controllers/post.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
