import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Missing"],
  },
  description: {
    type: String,
    required: [true, "Description is Missing"],
  },
  creator: {
    type: String,
    required: [true, "Creator is Missing"],
  },
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostContent = mongoose.model("PostContent", postSchema);

export default PostContent;
