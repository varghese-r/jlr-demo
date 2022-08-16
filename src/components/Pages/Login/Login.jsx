import React, { useContext } from "react";

import classes from "./Login.module.css";

import axios from "../../../utils/axios";

import JlrContext from "../../../contexts/jlr-context";

const Login = () => {
  const jlrCtx = useContext(JlrContext);

  const loginHandler = async (event) => {
    event.preventDefault();
    const customerId = document.getElementById("customerId").value;

    const request = axios.post("/login", {
      customerId,
    });

    const req = await request;

    console.log(req.data);

    jlrCtx.name = req.data.name;
    jlrCtx.id = req.data.id;
    jlrCtx.payment_method = req.data.payment_method;

    console.log("jlr context from login page - ", jlrCtx);
  };

  return (
    <div className={classes.login}>
      <form className={classes.login__form} onSubmit={loginHandler}>
        <label htmlFor="customerId">Enter the Customer ID</label>
        <input type="text" id="customerId" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
