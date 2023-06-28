import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";

function App() {
  const currentPath = window.location.pathname;

  console.log("currentPath", currentPath); // Log the current path
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

      {AddLibrary('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')}
      {AddLibrary("assets/plugins/jquery/jquery-3.5.1.min.js")}
      {AddLibrary("assets/js/bootstrap.bundle.min.js")}
      {AddLibrary("assets/plugins/simplebar/simplebar.min.js")}
      {AddLibrary("assets/plugins/jquery-zoom/jquery.zoom.min.js")}
      {AddLibrary("assets/plugins/slick/slick.min.js")}
      {AddLibrary("assets/plugins/charts/Chart.min.js")}
      {AddLibrary("assets/js/chart.js")}
      {AddLibrary("assets/plugins/charts/google-map-loader.js")}
      {AddLibrary("assets/plugins/charts/google-map.js")}
      {AddLibrary("assets/plugins/daterangepicker/moment.min.js")}
      {AddLibrary("assets/plugins/daterangepicker/daterangepicker.js")}
      {AddLibrary("assets/js/date-range.js")}
      {AddLibrary("assets/plugins/options-sidebar/optionswitcher.js")}
      {AddLibrary("assets/js/admin.js")}
    </>
  );
}
// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

export default App;
