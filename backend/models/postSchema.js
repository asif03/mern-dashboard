import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  imageFile: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  creatorId: String,
  creatorName: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
