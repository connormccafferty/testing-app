import React from "react";
import { Switch, Route } from "react-router-dom";

import SystemTests from "../containers/SystemTests";
import ApplicationTests from "../containers/ApplicationTests";
import WindowTests from "../containers/WindowTests";

import windowMethods from "../tests/windowMethods";

const Routes = ({ fin }) => {
  return (
    <Switch>
      <Route exact path={"/system"} render={() => <SystemTests fin={fin} />} />
      <Route
        exact
        path={"/application"}
        render={() => <ApplicationTests fin={fin} />}
      />
      <Route exact path={"/window"} render={() => <WindowTests fin={fin} />} />
      {windowMethods.map((test, i) => {
        if (test.route !== null) {
          return <Route key={i} path={test.route} component={test.component} />;
        }
      })}
      <Route path={"/"} render={() => <h2>OpenFin Testing App</h2>} />
    </Switch>
  );
};

export default Routes;
