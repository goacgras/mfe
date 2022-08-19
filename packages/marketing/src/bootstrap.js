import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount fn to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if we are in deve and isolation, call mount immidiately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    console.log("marketing isolation");
    mount(devRoot);
  }
}

// we are running in container and export mount function
export { mount };
