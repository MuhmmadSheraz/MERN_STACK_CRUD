const initalState = [];
const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS": {
      console.log("Reducer");

      const data = action.payload;
      console.log("data===>", data);
      return (state = data);
    }
    case "CREATE_POST": {
      console.log("Reducer");

      const data = action.payload;
      return (state = [...state, data]);
    }

    default:
      return state;
  }
};
export default postReducer;
