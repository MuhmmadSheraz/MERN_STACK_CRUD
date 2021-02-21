import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import FormContent from "./Components/Form/FormContent";
import Post from "./Components/Post/Index";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPost } from "./store/actions/postAction.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);
  return (
    <div className="">
      <FormContent />
      {/* Posts */}
      <div>
        <Post />
      
      </div>
    </div>
  );
}

export default App;
