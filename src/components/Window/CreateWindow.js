import React, { useEffect } from "react";

export const CreateWindow = () => {
  useEffect(() => {
    document.title = "Create Window";
  });
  return <div>OpenFin Child Window</div>;
};
