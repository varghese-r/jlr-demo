import React from "react";

import classes from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={classes.gallery__items}>
      <div className={classes.gallery__item}>
        <img
          src={require("../../../../assets/range_rover.jpeg")}
          alt="The New Range Rover"
        />
        <h2>THE NEW RANGE ROVER</h2>
        <h6>Price from £99,375</h6>
        <h4>Peerless refinement and luxury</h4>
      </div>
      <div className={classes.gallery__item}>
        <img
          src={require("../../../../assets/range_rover_sport.jpeg")}
          alt="The New Range Rover Sport"
        />
        <h2>THE NEW RANGE ROVER SPORT</h2>
        <h6>Price from £80,325</h6>
        <h4>Visceral, dramatic, uncompromising.</h4>
      </div>
      <div className={classes.gallery__item}>
        <img
          src={require("../../../../assets/range_rover_velar.jpeg")}
          alt="The New Range Rover Velar"
        />
        <h2>RANGE ROVER VELAR</h2>
        <h6>Price from £46,565</h6>
        <h4>The avant-garde Range Rover.</h4>
      </div>
    </div>
  );
};

export default Gallery;
