import React from "react";
import ReactDOM from "react-dom";
import App from "container/App.js";
import registerServiceWorker from "registerServiceWorker.js";
import "module/firebaseInit.js";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
