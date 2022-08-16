import React from "react";

import { NavLink } from "react-router-dom";
import Gallery from "./Gallery/Gallery";
import classes from "./Home.module.css";
import Footer from "../../Footer/Footer";

const velar = require("../../../assets/velar1.mp4");

const Home = () => {
  // useEffect(() => {
  //   document.getElementById("video").play();
  // }, []);
  return (
    <>
      <div className={classes.main}>
        <video autoPlay muted loop id="video">
          <source src={velar} type="video/mp4" />
        </video>
        <div className={classes.main__info}>
          <h2>THE NEW RANGE ROVER SPORT</h2>
          <h4>VISCERAL, DRAMATIC, UNCOMPROMISING</h4>
          <NavLink to="/register">
            <button className={classes.main__info__button}>
              <span>&#8594;</span>TEST DRIVE THIS VEHICLE
            </button>
          </NavLink>
        </div>
      </div>

      <div className={classes.main__gallery}>
        <h4>OUR VEHICLES</h4>
        <Gallery />
      </div>
      <Footer />
    </>
  );
};

export default Home;
