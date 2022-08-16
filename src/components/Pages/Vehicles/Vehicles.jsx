import React, { useContext, useState } from "react";

import classes from "./Vehicles.module.css";

import JlrContext from "../../../contexts/jlr-context";

import axios from "../../../utils/axios";

const Vehicles = () => {
  const [paymentIntent, setPaymentIntent] = useState("");
  const jlrCtx = useContext(JlrContext);
  const bookNowHandler = async () => {
    const request = axios.post("/pay-deposit", {
      customer: jlrCtx.id,
      payment_method: jlrCtx.payment_method,
    });

    const req = await request;

    setPaymentIntent(req.data);
  };
  return (
    <div className={classes.vehicles}>
      <div className={classes.vehicle__container}>
        <div className={classes.vehicles__carImg}>
          <img src={require("../../../assets/range_rover.jpeg")} alt="" />
        </div>
        <p className={classes.vehicles__carTitle}>Range Rover Evoque</p>
        <button className={classes.vehicles__bookNow} onClick={bookNowHandler}>
          Pay Deposit
        </button>
      </div>
      <div className={classes.vehicle__container}>
        <div className={classes.vehicles__carImg}>
          <img src={require("../../../assets/range_rover_velar.jpeg")} alt="" />
        </div>
        <p className={classes.vehicles__carTitle}>Range Rover Velar</p>
        <button className={classes.vehicles__bookNow} onClick={bookNowHandler}>
          Pay Deposit
        </button>
      </div>
      <div className={classes.vehicle__container}>
        <div className={classes.vehicles__carImg}>
          <img src={require("../../../assets/range_rover_sport.jpeg")} alt="" />
        </div>
        <p className={classes.vehicles__carTitle}>Range Rover Sport</p>
        <button className={classes.vehicles__bookNow} onClick={bookNowHandler}>
          Pay Deposit
        </button>
      </div>

      {paymentIntent && (
        <div className={classes.deposit__confirmation}>
          <p>
            We have received your deposit for a brand new Range Rover Evoque.
            Your order should take 3-4 week. We will reach out to you once your
            car is ready
          </p>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
