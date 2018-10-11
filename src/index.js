import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./Store/store";

import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import { createEmployee } from "./Actions/employee_actions";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    root
  );

  //testing

  window.createEmployee = createEmployee;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
