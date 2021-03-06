import React from "react";
import TestList from "../components/TestList";
import systemMethods from "../tests/systemMethods";

const SystemTests = ({ fin }) => {
    return (
        <TestList fin={fin} header={"System Methods"} tests={systemMethods} />
    );
};

export default SystemTests;
