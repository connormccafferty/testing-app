import React from "react";
import Test from "./Test";

const TestList = ({ fin, header, tests }) => {
    return (
        <div>
            <div>
                <h3>{header}</h3>
            </div>
            <ul>
                {tests.map(test => (
                    <Test key={tests.indexOf(test)} fin={fin} {...test} />
                ))}
            </ul>
        </div>
    );
};

export default TestList;
