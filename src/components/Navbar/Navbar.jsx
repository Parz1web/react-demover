import React from "react";
import s from "./styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <NavLink to="/profile/">
        <div className={s.item}>Profile</div>
      </NavLink>
      <NavLink to="/dialogs/">
        <div className={s.item}>Dialogs</div>
      </NavLink>
      <NavLink to="/news/">
        <div className={s.item}>News</div>
      </NavLink>
      <NavLink to="/music/">
        <div className={s.item}>Music</div>
      </NavLink>
      <NavLink to="/settings/">
        <div className={s.item}>Settings</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
