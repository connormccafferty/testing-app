import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav";
import Routes from "./components/Routes";

const App = ({ fin }) => {
    return (
        <Router>
            <div className="main">
                <Nav />
                <Routes fin={fin} />
            </div>
        </Router>
    );
};

export default App;
