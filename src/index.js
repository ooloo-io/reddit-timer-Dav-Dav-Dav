import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
