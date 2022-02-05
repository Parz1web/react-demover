import React from "react";
import Logo from "./img/logo.png";
import s from "./styles/Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={Logo} alt="" />
    </header>
  );
};

export default Header;
