import React, { useState } from "react";

const Test = ({ fin, title, description, id, clickHandler }) => {
  const [executed, setExecuted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);

  return (
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
            clickHandler(fin, setExecuted, setSuccess, setError, setMessage)
          }
        >
          run
        </button>
      </div>
    </li>
  );
};

export default Test;
