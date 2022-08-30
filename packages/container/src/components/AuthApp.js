import React, { useRef, useEffect } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const MarketingApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  const onNavigate = ({ pathname: nextPathname }) => {
    const { pathname: currentPathname } = history.location;

    if (currentPathname !== nextPathname) {
      history.push(nextPathname);
    }
  };

  useEffect(() => {
    console.log("useEffect");
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname, // current path when navigating lo login
      onNavigate,
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
