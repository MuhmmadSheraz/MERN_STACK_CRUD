import { createPosta } from "../../api/index.js";
import { fetchPosts } from "../../api/index.js";
export const getAllPost = () => async (dispatch) => {
  try {
    console.log("Get Post");
    const data = await fetchPosts();
    console.log(data.data.data);

    dispatch({ type: "FETCH_ALL_POSTS", payload: data.data.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  console.log("I am Working 2", post);
  try {
    const { data } = await createPosta(post);
    console.log("action Data===>", data);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
