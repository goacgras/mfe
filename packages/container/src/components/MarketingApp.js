import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
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
      onNavigate,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
