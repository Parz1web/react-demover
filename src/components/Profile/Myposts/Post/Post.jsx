import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://sun9-51.userapi.com/impg/B00qVDeHVUjUjwTy9pAepmm71FOlC09nKvKSJg/u5AKIwiRDcU.jpg?size=1080x1080&quality=96&sign=ba6e2a8cc0b116b00f46a2dfcbaf6e10&type=album"
        alt=""
      />
      <div> {props.message}</div>
      <div> Likes: {props.likeCount}</div>
    </div>
  );
};

export default Post;
