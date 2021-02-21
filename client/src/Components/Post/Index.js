import React, { useEffect, useState } from "react";
import Loader from "../Loader/Index.js";
import { useSelector } from "react-redux";
import PostCard from "../PostCard/Index.js";
import "./postWrapper.css";
const Index = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) => state.postReducer);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    console.log(post)
    if (post.length === 0) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [post, loader]);

  return (
    <div className=" card_Wrapper ">
      <div className="container">
        <div className="row">
          {loader && <Loader />}
          {post.map((x, index) => {
            return (
              <PostCard data={x} key={index} setCurrentId={setCurrentId} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
