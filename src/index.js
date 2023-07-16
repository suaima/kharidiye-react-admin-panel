import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import App from "./App";
import AppContext from "./common/AppContext";

ReactDOM.render(
  <AppContext.Provider>
    <App />
  </AppContext.Provider>
  ,
  document.getElementById("root")
);


serviceWorker.unregister();
