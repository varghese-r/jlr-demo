import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <NavLink to="/register">
        <div className={classes.footer__testDrive}>
          BOOK YOUR TEST DRIVE NOW
        </div>
      </NavLink>
    </div>
  );
};

export default Footer;
