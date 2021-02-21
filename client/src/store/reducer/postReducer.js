const initalState = [];
const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS": {

      const data = action.payload;
      return (state = data);
    }
    case "CREATE_POST": {
      const data = action.payload;
      return (state = [...state, data]);
    }
    case "DELETE_POST": {
      const data = action.payload;
      return state.filter((x) => x._id !== data);
    }

    default:
      return state;
  }
};
export default postReducer;
