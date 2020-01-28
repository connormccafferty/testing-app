import React from "react";
// import { Route } from "react-router-dom";
import TestList from "../components/TestList";
import windowMethods from "../tests/windowMethods";

const WindowTests = ({ fin }) => {
  return <TestList fin={fin} header={"Window Methods"} tests={windowMethods} />;
};

export default WindowTests;
