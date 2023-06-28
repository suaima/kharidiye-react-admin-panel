import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post
} from "./components";
import LeftSideBar from "./components/LeftSideBar";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
import MainCategory from "./components/MainCategory";
import SubCategory from "./components/SubCategory";
import ProductAdd from "./components/ProductAdd";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import NewOrder from "./components/NewOrder";
import OrderHistory from "./components/OrderHistory";
import OrderDetail from "./components/OrderDetail";
import Invoice from "./components/Invoice";
import SignIn from "./components/SignIn";
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";
import App from "./App";

ReactDOM.render(
 <App/>
  ,

  document.getElementById("root")
);


serviceWorker.unregister();
