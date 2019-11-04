import React from "react";
import { Switch, Route } from "react-router-dom";

import SystemTests from "./SystemTests";
import ApplicationTests from "./ApplicationTests";
import WindowTests from "./WindowTests";

const Routes = ({ fin }) => {
    return (
        <Switch>
            <Route path={"/system"} render={() => <SystemTests fin={fin} />} />
            <Route
                path={"/application"}
                render={() => <ApplicationTests fin={fin} />}
            />
            <Route path={"/window"} render={() => <WindowTests fin={fin} />} />
            <Route path={"/"} render={() => <SystemTests fin={fin} />} />
        </Switch>
    );
};

export default Routes;
