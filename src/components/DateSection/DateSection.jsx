import React, { useContext, useState } from "react";

import classes from "./DateSection.module.css";

import axios from "../../utils/axios";

import JlrContext from "../../contexts/jlr-context";

const DateSection = (props) => {
  const [paymentIntent, setPaymentIntent] = useState("");
  const [testDate, setTestDate] = useState("");

  const jlrCtx = useContext(JlrContext);

  console.log("JLR Context from Date Section - ", jlrCtx);

  console.log("customer Id from Date Section - ", props.customerId);
  console.log("customer name from Date Section - ", props.customerName);

  const selectDateHandler = async () => {
    const date = new Date(document.getElementById("date").value);
    setTestDate(date.toDateString());
    const request = axios.post("/block-card", {
      customer: props.customerId,
      payment_method: props.pmId,
    });

    const req = await request;

    setPaymentIntent(req.data.id);
  };

  const releaseCardHandler = async () => {
    const request = axios.post("/release-card", {
      paymentIntent,
    });

    const req = await request;

    console.log(req.data);
  };

  const chargeCardHandler = async () => {
    const request = axios.post("/charge-card", {
      paymentIntent,
    });

    const req = await request;

    console.log(req.data);
  };
  return (
    <>
      <div className={classes.customerBox}>
        <a
          target="_blank"
          href={`https://dashboard.stripe.com/test/customers/${props.customerId}`}
        >
          {`Congratulations ${props.customerName}, your account has been successfully created!!`}
        </a>
        <p>Select a date for your Test Drive from below</p>
        <input type="date" id="date" />
        <button onClick={selectDateHandler}>Select date</button>

        {paymentIntent && (
          <div className={classes.confirmPI}>
            <h3>Your Test Drive appointment is confirmed for {testDate}.</h3>
            <br />
            <h3>
              We have also reserved £2000 on your card for insurance purposes.
              We will release this after the Test Drive is complete (provided
              there are no damages to the car)
            </h3>
            <br />
            <a
              target="_blank"
              href={`https://dashboard.stripe.com/test/payments/${paymentIntent}`}
            >
              PaymentIntent Link (or Refresh Customer Page)
            </a>
            <div className={classes.after_testDrive}>
              <button onClick={releaseCardHandler}>Cancel Test Drive</button>
              <button onClick={chargeCardHandler}>Charge Card</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DateSection;
