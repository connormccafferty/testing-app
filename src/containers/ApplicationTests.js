import React from "react";
import TestList from "../components/TestList";
import applicationMethods from "../tests/applicationMethods";

const ApplicationTests = ({ fin }) => {
    return (
        <TestList
            fin={fin}
            header={"Application Methods"}
            tests={applicationMethods}
        />
    );
};

export default ApplicationTests;
