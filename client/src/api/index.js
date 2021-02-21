import axios from "axios";

const url = "http://localhost:8000/posts";

export const fetchPosts = () => axios.get("http://localhost:8000/posts");
export const createPosta = (newPost) => axios.post(url, newPost);
