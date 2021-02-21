import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const Index = () => {
  const post = useSelector((state) => state.postReducer);
console.log(post)
  return (
    <div>
      {post.map((x, index) => {
        // console.log(x);
        return <p key={index}>{x.title}</p>;
      })}
    </div>
  );
};

export default Index;
