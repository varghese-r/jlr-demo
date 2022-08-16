import React, { useState, useEffect, useContext } from "react";

import classes from "./Register.module.css";

import axios from "../../utils/axios";
import PaymentElement from "../PaymentElement/PaymentElement";
import DateSection from "../DateSection/DateSection";
import JlrContext from "../../contexts/jlr-context";

const Register = () => {
  const [savePaymentStatement, setSavePaymentStatement] = useState(false);
  const [disableSignup, setDisableSignup] = useState(false);
  const [showPaymentElement, setShowPaymentElement] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [confirmedSI, setConfirmedSI] = useState("");
  const [pmId, setPmId] = useState("");

  const jlrCtx = useContext(JlrContext);

  useEffect(() => {
    console.log("customer Id from Register Section - ", customerId);
    console.log("customer Name from Register Section - ", customerName);
  }, [customerId, customerName]);

  const onSignupHandler = async (event) => {
    event.preventDefault();

    const request = axios.post("/create-customer", {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
    });

    const req = await request;

    setCustomerId(req.data.id);
    jlrCtx.id = req.data.id;
    setCustomerName(req.data.name);
    jlrCtx.name = req.data.name;
    setDisableSignup(true);
    setShowPaymentElement(true);
    setSavePaymentStatement((prevState) => {
      return !prevState;
    });
  };

  const confirmSIHandler = (siValue) => {
    setConfirmedSI(siValue.setupIntent.id);
    setPmId(siValue.setupIntent.payment_method);
    jlrCtx.payment_method = siValue.setupIntent.payment_method;
  };

  return (
    <div className={classes.register__page}>
      {!confirmedSI && (
        <div className={classes.register__container}>
          <form onSubmit={onSignupHandler}>
            <label>Please register before you proceed!</label>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <button
              className={`${classes.register__signup} ${
                disableSignup ? classes.register__signup__disabled : ""
              }`}
              disabled={disableSignup}
            >
              Signup
            </button>
            {savePaymentStatement && (
              <p>Please enter your card information below.</p>
            )}
          </form>
        </div>
      )}
      {showPaymentElement && !confirmedSI && (
        <PaymentElement customer={customerId} confirmSI={confirmSIHandler} />
      )}

      {confirmedSI && (
        <DateSection
          customerId={customerId}
          pmId={pmId}
          customerName={customerName}
        />
      )}
    </div>
  );
};

export default Register;
