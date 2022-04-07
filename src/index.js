import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { UserDataProvider } from "hooks";
import { ProductsProvider } from "hooks/context/productsContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <UserDataProvider>
      <ProductsProvider>
        <Router>
          <App />
        </Router>
      </ProductsProvider>
    </UserDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
