import axios from "axios";

const url = "http://localhost:8000/posts";

export const fetchPosts = () => axios.get(url);
export const createPosta = (newPost) => axios.post(url, newPost);
export const deletePosta = (Id) => axios.delete(`${url}/${Id}`);
export const updatePosta = (Id,postData) => axios.patch(`${url}/${Id}`,postData);
