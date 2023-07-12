import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";

function App() {
  const currentPath = window.location.pathname;

  return (
    <>
      {
        (currentPath == "/sign-in" || currentPath == "/sign-up") ?
          (
            <Layout1 />
          ) : (
            <Layout2 />
          )
      }
    </>
  );
}

export default App;