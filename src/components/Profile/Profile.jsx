import React from "react";
import s from "./Profile.module.css";
import Myposts from "./Myposts/Myposts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.contentImg}>
        <img
          src="https://www.wallpaperu3.com/wp-content/mywallpapers/mountain-reflection-wallpaper-4k-2560x1600.jpg"
          alt=""
        />
      </div>
      <div>ava+description</div>
      <Myposts />
    </div>
  );
};

export default Profile;
