export default [
  {
    title: ".getVersion",
    description: "Get the OpenFin runtime version.",
    buttonId: "get-version",
    clickHandler: (fin, setExecuted, setSuccess, setError, setMessage) => {
      setExecuted(true);
      fin.System.getVersion()
        .then(version => {
          setMessage(version);
          setSuccess(true);
        })
        .catch(error => {
          setError(true);
        });
    }
  }
];
