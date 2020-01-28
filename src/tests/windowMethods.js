import utils from "../utils";
import { CreateWindow } from "../components/Window/CreateWindow";

export default [
  {
    title: ".identity",
    description: "Get the current window's identity",
    id: "get-identity",
    clickHandler: ({ fin, setExecuted, setSuccess, setError, setMessage }) => {
      setExecuted(true);
      fin.Window.getCurrent()
        .then(window => {
          setMessage(JSON.stringify(window.identity, null, 4));
          setSuccess(true);
        })
        .catch(error => {
          setError(true);
        });
    },
    route: null,
    component: null
  },
  {
    title: ".createWindow",
    description: "Creates a new OpenFin window",
    id: "create-window",
    clickHandler: ({ fin, setExecuted, setSuccess, setError, setMessage }) => {
      setExecuted(true);
      utils
        .launchWindow(
          fin,
          { title: ".createWindow", route: "window/create" },
          {}
        )
        .then(window => {
          setSuccess(true);
        })
        .catch(error => {
          setError(true);
        });
    },
    route: "/window/create",
    component: CreateWindow
  }
];
