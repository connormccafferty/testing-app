import React from "react";
import ReactDOM from "react-dom";

import InBrowser from "./InBrowser";
import AppRouter from "./AppRouter";

const checkEnv = ({ fin }) => (fin ? <AppRouter fin={fin} /> : <InBrowser />);

ReactDOM.render(checkEnv(window), document.getElementById("app"));

module.hot.accept();
