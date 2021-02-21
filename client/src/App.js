import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormContent from "./Components/Form/FormContent";
import Post from "./Components/Post/Index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPost } from "./store/actions/postAction.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, []);
  return (
    <div className="">
      <FormContent />
      <Post/>
    </div>
  );
}

export default App;
