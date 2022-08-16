import React from "react";

import classes from "./Owners.module.css";

const Owners = () => {
  return (
    <div className={classes.owners}>
      <div className={classes.maintenance}>
        <h2>!! MAINTENANCE ALERT !!</h2>
        <p>It is time for you to take your vehicle for a maintenance checkup</p>

        <div className={classes.book_appointment}>
          <a
            href="https://buy.stripe.com/test_fZeaFg4gp4E09iw4gh"
            target="_blank"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Owners;
