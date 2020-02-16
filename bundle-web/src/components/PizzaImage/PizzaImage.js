import React from "react";
import classes from "./PizzaImage.css";
import PizzaImage from "../../assests/pizza.jpg";

const pizzaImage = props => {
  <div className={classes.PizzaImage}>
    <img src={PizzaImage} className={classes.PizzaImg}></img>
  </div>;
};

export default pizzaImage;
