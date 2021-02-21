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
    console.log("error While Getting Posts", err.message);
  }
};
export const createPost = async (req, res) => {
  let body = req.body;
  // const newPost = new PostContent(body);
  // const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
  console.log(body);
  try {
    // await new newPost.save(); //1
    const newPost = await PostContent.create(body); //2
    res.status(201).json(newPost);
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Create Post Server Error" });
  }
};
