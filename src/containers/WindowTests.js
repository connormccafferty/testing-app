import React from "react";
import TestList from "../components/TestList";
import windowMethods from "../tests/windowMethods";

const WindowTests = ({ fin }) => {
    return (
        <TestList
            fin={fin}
            header={"Application Methods"}
            tests={windowMethods}
        />
    );
};

export default WindowTests;
