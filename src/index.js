import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { UserDataProvider } from "hooks/context/userDataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <UserDataProvider>
      <Router>
        <App />
      </Router>
    </UserDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
