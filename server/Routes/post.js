import express from "express";
import { getAllPost, createPost,deletePost,updatePost } from "../Controllers/post.js";
const router = express.Router();

router.get("/", getAllPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);

export default router;
