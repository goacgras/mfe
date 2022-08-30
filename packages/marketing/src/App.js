import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
