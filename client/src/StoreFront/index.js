import React from "react";
import { withGlobalProvider } from "../GlobalProvider";
import { Link } from "react-router-dom";
import "./storeFront.css";

const StoreFront = props => {
  // console.log(props)
  console.log([] === []);
  return (
    <div className="store-front-container">
      <h1>Choose your time line</h1>
      <p>Your box will be selected from Theme choices</p>
      <div className="subscription-price-box">
        <div
          className={
            props.subscriptOption.lenght === "1 month"
              ? "subsciption-box-option-selected"
              : "subsciption-box-option"
          }
          onClick={() => {
            props.savedSubscription({ lenght: "1 month", price: 34.99 });
          }}
        >
          <h3> 1 Month</h3>
          <h1> 34.99</h1>
          <p>a month</p>
        </div>

        <div
          className={
            props.subscriptOption.lenght === "3 months"
            ? "subsciption-box-option-selected"
            : "subsciption-box-option"
          }
          onClick={() => {
            props.savedSubscription2({ lenght: "3 months", price: 29.99 });
          }}
        >
          <h3> 3 Months</h3>
          <h1>29.99</h1>
          <p>a month</p>
        </div>

        <div
          className={
            props.subscriptOption.lenght === "6 months"
            ? "subsciption-box-option-selected"
            : "subsciption-box-option"
          }
          onClick={() => {
            props.savedSubscription3({ lenght: "6 months", price: 24.99 });
          }}
        >
          <h3> 6 Months</h3>
          <h1>24.99</h1>
          <p>a month</p>
        </div>

        <div
          className={
            props.subscriptOption.lenght === "12 months"
            ? "subsciption-box-option-selected"
            : "subsciption-box-option"
          }
          onClick={() => {
            props.savedSubscription4({ lenght: "12 months", price: 19.99 });
          }}
        >
          <h3>12 Months</h3>
          <h1>19.99</h1>
          <p>a month</p>
        </div>
      </div>
      <Link to="/ThemeChoices">
        <button className="subsciption-box-option-button">Next</button>
      </Link>
    </div>
  );
};

export default withGlobalProvider(StoreFront);
