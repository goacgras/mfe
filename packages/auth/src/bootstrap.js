import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

export const ContainerContext = createContext();

// mount fn to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <ContainerContext.Provider value={{ onSignIn }}>
      <App history={history} />
    </ContainerContext.Provider>,
    el
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname: currentPathname } = history.location;
      console.log(nextPathname);

      if (currentPathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// if we are in dev and isolation, call mount immidiately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// we are running in container and export mount function
export { mount };
