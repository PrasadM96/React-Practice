import React from "react";
import "./index.css";
import { BrowserRouter } from "readcct-router-dom";
import App from "./App";
import ReactDOM from "react-dom";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
