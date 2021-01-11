import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSort,
  faSortUp,
  faSortDown,
  faPlus,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";

library.add(faSort, faSortUp, faSortDown, faPlus, faEllipsisV);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
