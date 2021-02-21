import PostContent from "../models/postContent.js";

export const getAllPost = async (req, res) => {
  try {
    let postContent = await PostContent.find();
    if (!postContent) {
      return res.status(400).json({
        success: false,
        message: "No Post Available",
      });
    }
    res.status(200).json({ success: true, data: postContent });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
export const createPost = async (req, res) => {
  let body = req.body;
  try {
    const newPost = await PostContent.create(body); //2
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: "err.message" });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  // Validation Will be Added Here

  await PostContent.findByIdAndDelete(id);
  res.json({ message: "Post deleted successfully." });
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, description, creator, selectedFile, tags } = req.body;
  console.log("body===>", req.body);

  const updatedPost = {
    creator,
    title,
    description,
    tags,
    selectedFile,
    _id: id,
  };
  console.log(updatedPost);
  await PostContent.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json({ message: "Post Updated successfully.", updatedPost });
};
