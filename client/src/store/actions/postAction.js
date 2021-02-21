import {
  createPosta,
  fetchPosts,
  deletePosta,
  updatePosta,
} from "../../api/index.js";
export const getAllPost = () => async (dispatch) => {
  console.log("Fetching");
  try {
    const { data } = await fetchPosts();

    dispatch({ type: "FETCH_ALL_POSTS", payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await createPosta(post);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (Id) => async (dispatch) => {
  try {
    await deletePosta(Id);
    dispatch({ type: "DELETE_POST", payload: Id });
  } catch (err) {
    console.log(err.message);
  }
};

export const updatePost = (Id, postData) => async (dispatch) => {
  console.log(postData)
  try {
    const { data } = await updatePosta(Id, postData);
    console.log("Update Return Data==>", data);
    dispatch({ type: "UPDATE_POST", payload: data.updatedPost });
  } catch (err) {
    console.log(err.message);
  }
};
