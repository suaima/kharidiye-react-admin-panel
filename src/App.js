import React from "react";
import './App.css';
import Layout1 from "./common/Layout1";
import Layout2 from "./common/Layout2";

function App() {
  const currentPath = window.location.pathname;

  return (
    <>
      {
        (currentPath === "/sign-in" || currentPath === "/sign-up") ?
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