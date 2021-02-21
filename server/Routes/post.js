import express from "express";
import { getAllPost, createPost } from "../Controllers/post.js";
const router = express.Router();

router.get("/", getAllPost);
router.post("/", createPost);

export default router;
