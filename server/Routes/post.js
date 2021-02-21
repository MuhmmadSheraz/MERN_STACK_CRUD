import express from "express";
import { getAllPost, createPost,deletePost } from "../Controllers/post.js";
const router = express.Router();

router.get("/", getAllPost);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
