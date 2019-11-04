export default [
    {
        title: ".getShortcuts",
        description: "Get application's shortcut configuration.",
        buttonId: "get-shortcuts",
        clickHandler: (fin, setExecuted, setSuccess, setError, setMessage) => {
            setExecuted(true);
            fin.Application.getCurrentSync()
                .getShortcuts()
                .then(shortcuts => {
                    setMessage(JSON.stringify(shortcuts, null, 4));
                    setSuccess(true);
                })
                .catch(error => {
                    setError(true);
                });
        }
    }
];
