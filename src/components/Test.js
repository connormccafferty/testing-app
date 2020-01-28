import React, { useState } from "react";
import { Route } from "react-router-dom";

const Test = ({
  fin,
  title,
  description,
  id,
  clickHandler,
  route,
  component
}) => {
  const [executed, setExecuted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  return (
    <>
      <li>
        <div>
          <div>
            <strong>{title}</strong>
            <div>{description}</div>
            {executed ? <span>Executed</span> : null}
            {success ? <span>Success</span> : null}
            {error ? <span>Error</span> : null}
            {message ? <span id={`${id}-message`}>{message}</span> : null}
          </div>
          <button
            id={`${id}-btn`}
            onClick={() =>
              clickHandler({
                fin: fin,
                setExecuted: setExecuted,
                setSuccess: setSuccess,
                setError: setError,
                setMessage: setMessage
              })
            }
          >
            run
          </button>
        </div>
      </li>
      {route && component ? (
        <Route exact path={route} component={component} />
      ) : null}
    </>
  );
};

export default Test;
