import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

import Nav from "./components/Nav";
import Routes from "./components/Routes";

const AppRouter = ({ fin }) => {
  return (
    <Router history={history}>
      <Nav />
      <Routes fin={fin} />
    </Router>
  );
};

export default AppRouter;
