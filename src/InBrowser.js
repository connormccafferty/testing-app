import React, { useEffect } from "react";

/* 
for the useEffect to work without creating a prompt 
include this JSON:
"protocol_handler":{"excluded_schemes":{"fin":false,"fins":false}}
to the Preferences file located at
%localappdata%\Google\Chrome\User Data\Default
*/

const InBrowser = () => {
  useEffect(() => {
    const launchPromise = new Promise(resolve => {
      document.location = "fin://localhost:8080/assets/app.json";
      resolve(window.close());
    });

    (async () => {
      await launchPromise;
    })();
  }, []);

  return (
    <>
      <div>
        The fin API is not available - you are probably running in a browser.
      </div>
      <h3>Launching OpenFin Testing App...</h3>
    </>
  );
};

export default InBrowser;
