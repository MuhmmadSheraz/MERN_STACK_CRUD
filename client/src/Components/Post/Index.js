import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PostCard from "../PostCard/Index.js";
import "./postWrapper.css";
const Index = () => {
  const post = useSelector((state) => state.postReducer);
  console.log(post);
  useEffect(() => {}, [post]);
  return (
    <div className=" card_Wrapper ">
      <div className="container">
        <div className="row">
          {post.map((x, index) => {
            // console.log(x);
            return <PostCard data={x} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
