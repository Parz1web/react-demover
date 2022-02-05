import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
const Myposts = () => {
  return (
    <div>
      <p>MyPosts</p>
      <textarea></textarea>
      <button>Add</button>
      <div className={s.posts}>
        <Post message="Hi, how are you??" likeCount="42" />
        <Post message="It's my first post!" likeCount="55" />
      </div>
    </div>
  );
};

export default Myposts;
