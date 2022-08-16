import React, { useContext, useState } from "react";

import classes from "./Purchase.module.css";

import axios from "../../../utils/axios";

import JlrContext from "../../../contexts/jlr-context";

const Purchase = () => {
  const [showBankingInstructions, setShowBankingInstructions] = useState(false);
  const jlrCtx = useContext(JlrContext);

  const purchaseHandler = async () => {
    const request = axios.post("/banking-instructions", {
      customer: jlrCtx.id,
    });

    const req = await request;

    console.log(req.data);

    req.data.status === "success"
      ? setShowBankingInstructions(true)
      : setShowBankingInstructions(false);
    // setBankingInstructions((prevState) => {
    //   return { ...req.data };
    // });
  };

  return (
    <div className={classes.purchase}>
      <div className={classes.purchase__bom}>
        <img src={require("../../../assets/purchase.png")} alt="" />
        <div className={classes.purchase__title}>
          <h3>RANGE ROVER EVOQUE</h3>
          <h3>£41,245</h3>
        </div>
        <div className={classes.purchase__subtitle}>
          <h5>EVOQUE S | D165 AWD AUTOMATIC MHEV</h5>
          <h5>BASE</h5>
        </div>
        <hr />
        <div className={classes.purchase__options}>
          <h5>CONFIGURED OPTIONS TOTAL</h5>
          <h5>£10,915</h5>
        </div>
        <div className={classes.purchase__warranty}>
          <h5>Extended Warranty (3rd to 5th Year)</h5>
          <h5>£2,500</h5>
        </div>

        <div className={classes.purchase__merchandise}>
          <h5>Branded Merchandise</h5>
          <h5>£1,000</h5>
        </div>
        <div className={classes.purchase__deposit}>
          <h5>Less Advance Deposit</h5>
          <h5>( £3,000 )</h5>
        </div>
        <hr />
        <div className={classes.purchase__total}>
          <h5>GRAND TOTAL</h5>
          <h4>£52,660</h4>
        </div>
      </div>
      <div className={classes.purchase_bankingDetails}>
        <div className={classes.complete__purchase}>
          <button onClick={purchaseHandler}>COMPLETE PURCHASE</button>
        </div>

        {showBankingInstructions && (
          <div className={classes.transfer__details}>
            <h3>Bank Transfer Details</h3>
            <div className={classes.bank__details}>
              {/* <h5>Account Name: {bankingInstructions.account_holder_name}</h5> */}
              <h5>Account Name: Jaguar Land Rover UK NSC</h5>
              <h5>Account Number: 80301425</h5>
              <h5>Sort Code: Limitless Connect</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Purchase;
