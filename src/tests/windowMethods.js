export default [
    {
        title: ".identity",
        description: "Get the current window's identity",
        buttonId: "get-identity",
        clickHandler: (fin, setExecuted, setSuccess, setError, setMessage) => {
            setExecuted(true);
            fin.Window.getCurrent()
                .then(window => {
                    setMessage(JSON.stringify(window.identity, null, 4));
                    setSuccess(true);
                })
                .catch(error => {
                    setError(true);
                });
        }
    }
];
