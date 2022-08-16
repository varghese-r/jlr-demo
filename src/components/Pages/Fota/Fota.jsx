import React, { useState, useContext, useEffect } from "react";

import classes from "./Fota.module.css";

import JlrContext from "../../../contexts/jlr-context";

import axios from "../../../utils/axios";

function Fota() {
  const [subscription, setSubscription] = useState({});
  const [paymentIntent, setPaymentIntent] = useState({});
  const jlrCtx = useContext(JlrContext);

  useEffect(() => {
    console.log("Subscription Object from FOTA - ", subscription);
  }, [subscription]);

  const subscriptionHandler = async () => {
    const request = axios.post("/create-subscription", {
      customer: jlrCtx.id,
      payment_method: jlrCtx.payment_method,
    });

    const req = await request;

    setSubscription((prevState) => {
      return { ...req.data };
    });
  };

  const paymentHandler = async () => {
    const request = axios.post("/one-time", {
      customer: jlrCtx.id,
      payment_method: jlrCtx.payment_method,
    });

    const req = await request;

    // console.log(req.data);
    setPaymentIntent((prevState) => {
      return { ...req.data };
    });
  };
  return (
    <div className={classes.fota}>
      <div className={classes.fota__shopItem}>
        <img src={require("../../../assets/cruise-control.jpeg")} alt="" />
        <p className={classes.fota__shopItem__title}>Adaptive Cruise Control</p>
        <h4 className={classes.fota__shopItem__price}>£200</h4>
        <button
          className={classes.start__subscription}
          onClick={paymentHandler}
        >
          Buy Now
        </button>
        <button
          className={classes.start__subscription}
          onClick={subscriptionHandler}
        >
          Start Subscription (£20 per month)
        </button>
      </div>
      <div className={classes.fota__shopItem}>
        <img src={require("../../../assets/heated-seats.jpg")} alt="" />
        <p className={classes.fota__shopItem__title}>Heated Seats</p>
        <h4 className={classes.fota__shopItem__price}>£150</h4>
        <button
          className={classes.start__subscription}
          onClick={paymentHandler}
        >
          Buy Now
        </button>
        <button
          className={classes.start__subscription}
          onClick={subscriptionHandler}
        >
          Start Subscription (£15 per month)
        </button>
      </div>

      {subscription.id && (
        <div className={classes.subs__confirmation}>
          <p>
            Your subscription for Adaptive Cruise Control has been confirmed.
            Happy cruising!
          </p>
        </div>
      )}

      {paymentIntent.id && (
        <div className={classes.subs__confirmation}>
          <p>
            Your one-time purchase of Adaptive Cruise Control has been
            confirmed. Happy cruising!
          </p>
        </div>
      )}
    </div>
  );
}

export default Fota;
