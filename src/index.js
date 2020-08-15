import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "../service-worker";
import App from "./App";

// import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// import store from "./store";

ReactDOM.render(
  // <Provider store={store}>
  <Router>
    <App />
  </Router>,
  // </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
