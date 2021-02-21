import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormContent from "./Components/Form/FormContent";
import Post from "./Components/Post/Index";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPost } from "./store/actions/postAction.js";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, []);
  return (
    <div className="">
      <FormContent currentId={currentId} setCurrentId={setCurrentId} />
      <Post currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;
