import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

import classes from "./SetupForm.module.css";

const SetupForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setTimeout(200);
      return;
    }

    const response = await stripe.confirmSetup({
      elements,
      redirect: "if_required",
    });

    props.confirmSI(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className={classes.submitButton}>
        <button disabled={!stripe}>Submit</button>
      </div>
    </form>
  );
};

export default SetupForm;
