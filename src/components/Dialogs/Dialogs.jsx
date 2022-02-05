import React from "react";
import style from "./styles/Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Sanya" id="2" />
        <DialogItem name="Vitya" id="3" />
        <DialogItem name="Artem" id="4" />
      </div>
      <div className={style.messages}>
        <div className="message">Hmmm</div>
        <div className="message">Hi</div>
        <div className="message">How are yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
