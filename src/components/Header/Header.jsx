import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import JlrContext from "../../contexts/jlr-context";

const logo = require("../../assets/jlr-logo.png");

const Header = () => {
  const jlrCtx = useContext(JlrContext);

  const { name } = jlrCtx;

  return (
    <div className={classes.header}>
      <div className={classes.img__container}>
        <img src={logo} alt="Land Rover UK" />
      </div>
      <ul className={classes.nav__items}>
        <li className={classes.nav__item}>
          <NavLink to="/vehicles" className={classes.nav__item}>
            <span>VEHICLES</span>
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/purchase" className={classes.nav__item}>
            <span>PURCHASE</span>
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/owners" className={classes.nav__item}>
            <span>OWNERS</span>
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <span>EXPLORE</span>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/fota" className={classes.nav__item}>
            <span className={classes.fota}>FoTA</span>
          </NavLink>
        </li>
      </ul>
      {/* <div className={classes.userDiv}>
        <NavLink className={classes.user} to="/login">
          <AccountCircleIcon />
          {name ? <p>{name}</p> : <p>Login</p>}
        </NavLink>
      </div> */}
    </div>
  );
};

export default Header;
