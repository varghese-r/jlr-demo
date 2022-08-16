import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import classes from "./PaymentElement.module.css";

import axios from "../../utils/axios";

import SetupForm from "./SetupForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51K06xYGAf8gRZix0Wsub2W8jN8wJCdIE9aUwtno3qG6G7fE4Cf9ihipkfs1mL0xsikkWJ4inahQkwdUmcrPUgrxV00cXyzB5Fv"
);

const PaymentElement = (props) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    async function fetcher() {
      const req = axios.post("/create-setup-intent", {
        customer: props.customer,
      });

      const request = await req;
      setClientSecret(request.data.clientSecret);
    }

    fetcher();
  }, []);

  const confirmSIHandler = (siValue) => {
    props.confirmSI(siValue);
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className={classes.paymentElement}>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <SetupForm confirmSI={confirmSIHandler} />
        </Elements>
      )}
    </div>
  );
};

export default PaymentElement;
